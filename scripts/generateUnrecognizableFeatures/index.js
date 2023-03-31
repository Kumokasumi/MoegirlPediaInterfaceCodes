import console from "../modules/console.js";
console.info("Initialization done.");
import exec from "../modules/exec.js";
import mkdtmp from "../modules/mkdtmp.js";
import path from "path";
import createCommit from "../modules/createCommit.js";
import jsonModule from "../modules/jsonModule.js";

const targetChromiumVersion = "70.0.3538.0";
const targetUA = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${targetChromiumVersion} Safari/537.36`;

const unrecognizableFeatures = [];
const tempPath = await mkdtmp();
console.info("Start to compile src/ to temporary bundle file...");
const bundlePath = path.join(tempPath, "bundle.js");
console.log("bundlePath:", bundlePath);
await exec(`npx tsc --project tsconfig.json --outFile ${bundlePath}`);
console.info("\tDone.");
console.info("Start to analyse the temporary bundle file...");
const analysisReport = [...new Set(JSON.parse(await exec(`npx @financial-times/js-features-analyser analyse --file ${path.relative(".", bundlePath)}`)))].sort();
const clone = [...analysisReport];
console.info("\tDone.");
let i = 0;
while (analysisReport.length > 0) {
    const piece = [];
    while (analysisReport.length > 0 && piece.join(",").length <= 1973) {
        piece.push(analysisReport.splice(0, 1));
    }
    console.info(`Start to download polyfill file #${i}...`);
    const url = new URL("https://polyfill.io/v3/polyfill.js");
    url.searchParams.set("features", piece.join(","));
    url.searchParams.set("ua", targetUA);
    const dataResponse = await fetch(`${url}`, {
        method: "GET",
    });
    const data = await dataResponse.text();
    console.info("\tDone.");
    const match = data.match(/(?<=\n \* These features were not recognised:\n \* - )[^\n]+?(?=\s*\*\/)/)?.[0]?.split?.(/,-\s*/);
    unrecognizableFeatures.push(...match);
    i++;
}
await jsonModule.writeFile("scripts/generatePolyfill/unrecognizableFeatures.json", unrecognizableFeatures);
console.info(clone.length - unrecognizableFeatures.length, "unrecognizable features remaining");
await createCommit("auto: regenerated unrecognizable features list by generateUnrecognizableFeatures");
