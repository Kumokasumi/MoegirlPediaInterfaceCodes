import console, { originalConsole } from "../modules/console.js";
console.info("Initialization done.");
import jsonModule from "../modules/jsonModule.js";
import exec from "../modules/exec.js";

const localRegistry = await exec("npm config get registry");
const registries = [
    "https://registry.npmjs.org/",
    "https://mirrors.cloud.tencent.com/npm/",
].filter((registry) => registry !== localRegistry);
const packageLockFile = "package-lock.json";
console.info("localRegistry:", localRegistry);
console.info("registries:", registries);
console.info("Start to read", packageLockFile);
const packageLockFileContent = await jsonModule.readFile(packageLockFile);
console.info("Start to modified resolved path for packages");
const modifiedCount = {};
for (const key of Object.keys(packageLockFileContent.packages)) {
    if (typeof packageLockFileContent.packages[key].resolved === "string") {
        let url = packageLockFileContent.packages[key].resolved;
        for (const registry of registries) {
            if (url.startsWith(registry)) {
                url = url.replace(registry, localRegistry);
                if (typeof modifiedCount[registry] !== "number") {
                    modifiedCount[registry] = 0;
                }
                modifiedCount[registry]++;
                break;
            }
        }
        packageLockFileContent.packages[key].resolved = url;
    }
}
console.info("modifiedCount:", modifiedCount);
console.info("Start to write back", packageLockFile);
await jsonModule.writeFile(packageLockFile, packageLockFileContent);
console.info("Done.");
originalConsole.info("=".repeat(120));
