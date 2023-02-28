"use strict";
const console = require("../modules/console.js");
console.info("Start initialization...");
const fetch = require("../modules/fetch.js");
const createCommit = require("../modules/createCommit.js");
const prefetchTargets = require("./targets.js");
const fs = require("fs");
const path = require("path");
const core = require("@actions/core");
const semver = require("semver");
const { createIssue } = require("../modules/octokit.js");
const exec = require("../modules/exec.js");

const labels = ["ci:prefetch"];

(async () => {
    core.startGroup("prefetchTargets:");
    console.info(prefetchTargets);
    core.endGroup();
    exec("npm config get registry --global").then((output) => console.info("npm config get registry --global:", output));
    const registryBaseUrl = (await exec("npm config get registry --global")).trim();
    const fileList = [];
    for (const prefetchTarget of prefetchTargets) {
        console.info("target:", prefetchTarget);
        const { type, moduleName, gadget: { name, fileName }, distFilePath, version, appendCode } = prefetchTarget;
        const file = path.join("src/gadgets", name, fileName);
        fileList.push(file);
        console.info(`[${name}]`, "Start to fetch...");
        const data = await (async () => {
            if (type === "npm") {
                const packageName = `${moduleName}${typeof version === "string" ? `@${version}` : ""}`;
                const filePath = path.posix.join("npm", packageName, distFilePath);
                const url = new URL(filePath, "https://cdn.jsdelivr.net/");
                console.info(`[${name}]`, `url: ${url}`);
                return await fetch.text(url, {
                    method: "GET",
                });
            }
        })();
        console.info(`[${name}]`, "Successfully fetched.");
        const code = [
            "/**",
            " * Generated by scripts/prefetch/index.js",
            " * Options:",
        ];
        for (const [k, v] of Object.entries(prefetchTarget)) {
            code.push(` *     ${k}: ${JSON.stringify(v, null, 1).replace(/\n */g, " ")}`);
        }
        code.push(" */", data);
        if (typeof appendCode === "string") {
            code.push(appendCode);
        }
        code.push("");
        if (await fs.promises.readFile(file, { encoding: "utf-8" }) === code.join("\n")) {
            console.info(`[${name}]`, "Nothing changed, continue.");
            continue;
        }
        const folder = path.dirname(file);
        const filename = path.basename(file);
        const eslintrcName = path.join(folder, ".eslintrc");
        await fs.promises.mkdir(folder, {
            recursive: true,
        });
        await fs.promises.writeFile(file, code.join("\n"));
        if (path.extname(file) === ".js") {
            const eslintrc = JSON.parse(await fs.promises.readFile(eslintrcName, "utf-8").catch(() => "{}"));
            if (!Array.isArray(eslintrc.ignorePatterns)) {
                eslintrc.ignorePatterns = [];
            }
            if (!eslintrc.ignorePatterns.includes(filename)) {
                eslintrc.ignorePatterns.push(filename);
                await fs.promises.writeFile(eslintrcName, JSON.stringify(eslintrc, null, 4));
            }
        }
        console.info(`[${name}]`, "wrote the code file and eslintrc successfully.");
        const registryUrl = `${new URL(moduleName, registryBaseUrl)}`;
        console.info(`[${name}]`, "Start to fetch the package info:", registryUrl);
        const packageInfo = await fetch.json(registryUrl, {
            method: "GET",
        });
        core.startGroup("Successfully get the package info:");
        console.info(packageInfo);
        core.endGroup();
        const distVersions = Object.keys(packageInfo.versions);
        console.info(`[${name}]`, "distVersions:", distVersions);
        const targetVersion = semver.maxSatisfying(distVersions, version || "*");
        console.info(`[${name}]`, "targetVersion:", targetVersion);
        await createCommit(`auto(Gadget-${name}): bump ${moduleName} to ${targetVersion} by prefetch`);
        if (packageInfo["dist-tags"].latest !== targetVersion) {
            await createIssue(
                `[prefetch] Found new verion ${moduleName}@${packageInfo["dist-tags"].latest} higher than ${targetVersion}`,
                `Found new verion \`${moduleName}@${packageInfo["dist-tags"].latest}\` higher than \`${targetVersion}\`, while [\`scripts/prefetch/targets.js\`](scripts/prefetch/targets.js) configured as \`${moduleName}@${version || "*"}\`, please consider to upgrade it: ${new URL(path.posix.join("package", name), "https://www.npmjs.com/")}`,
                labels,
            );
        }
    }
    core.exportVariable("linguist-generated-prefetch", JSON.stringify(fileList));
    console.info("Done.");
    process.exit(0);
})();
