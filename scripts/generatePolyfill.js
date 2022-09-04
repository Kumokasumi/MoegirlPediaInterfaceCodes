"use strict";
const consoleWithTime = require("./console.js");
consoleWithTime.info("Start initialization...");
const exec = require("./exec.js");
const axios = require("./axios.js");
const fsPromises = require("fs/promises");
const unflaggableFeatures = require("./unflaggableFeatures.js");

const targetChromiumVersion = "70.0.3538.0";
const targetUA = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${targetChromiumVersion} Safari/537.36`;

(async () => {
    try {
        await fsPromises.rm("tmp", {
            recursive: true,
            force: true,
        });
        await fsPromises.mkdir("tmp", {
            recursive: true,
        });
        consoleWithTime.info("Start compile src/ to temporary bundle file...");
        await exec("npx tsc --project tsconfig.json --outFile tmp/bundle.js");
        consoleWithTime.info("\tDone.");
        consoleWithTime.info("Start analyse the temporary bundle file...");
        const analysisReport = [...new Set(JSON.parse(await exec("npx @financial-times/js-features-analyser analyse --file tmp/bundle.js")))];
        const features = analysisReport.filter((feature) => !unflaggableFeatures.includes(feature));
        consoleWithTime.info("\tDone.");
        consoleWithTime.info("\tfeatures", JSON.stringify(features, null, 4));
        consoleWithTime.info("Start download polyfill file...");
        const url = new URL("https://polyfill.io/v3/polyfill.js");
        url.searchParams.set("features", features.join(","));
        url.searchParams.set("ua", targetUA);
        const { data } = await axios.get(`${url}`);
        consoleWithTime.info("\tDone.");
        consoleWithTime.info("Start write polyfill file to gadget-libPolyfill...");
        const code = [
            "/**",
            " * Generated by scripts/generatePolyfill.js",
            " * Options:",
            ` *     targetChromiumVersion: "${targetChromiumVersion}"`,
            ` *     targetUA: "${targetUA}"`,
            " *     unflaggableFeatures: \"scripts/unflaggableFeatures.js\"",
            ` *     flaggableFeatures: ${JSON.stringify(features, null, 1).replace(/\n */g, " ")}`,
            " */",
        ];
        code.push(data, "");
        await fsPromises.writeFile("src/gadgets/libPolyfill/MediaWiki:Gadget-libPolyfill.js", code.join("\n"));
        consoleWithTime.info("\tDone.");
        const newunflaggableFeatures = [];
        for (const feature of features) {
            const match = data.match(RegExp(`\\b${feature.replaceAll(".", "\\.")}\\b`, "g"));
            if (!Array.isArray(match) || match.length === 1) {
                newunflaggableFeatures.push(feature);
            }
        }
        if (data.includes("These features were not recognised")) {
            const match = data.match(/(?<=\n \* These features were not recognised:\n \* - )[^\n]+?(?=\s*\*\/)/)?.[0]?.split?.(/,-\s*/);
            if (Array.isArray(match)) {
                newunflaggableFeatures.push(...match);
            } else {
                console.info(`::warning title=New unflaggable features found::There are some new unflaggable features that have been detected, but unparsable, please try it yourself: ${url}`);
            }
        }
        if (newunflaggableFeatures.length > 0) {
            console.info(`::warning title=New unflaggable features detected::There are some new unflaggable features that have been detected: ${newunflaggableFeatures.join(", ")}`);
        }
        process.exit(0);
    } catch (e) {
        consoleWithTime.error(e);
        process.exit(1);
    }
})();