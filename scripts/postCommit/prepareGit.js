import console from "../modules/console.js";
console.info("Initialization done.");
import { isInGithubActions } from "../modules/octokit.js";
import { git } from "../modules/git.js";

if (!isInGithubActions) {
    console.info("Not running in github actions, exit.");
    process.exit(0);
}
console.info("Running in github actions, preparing git...");
const name = "github-actions[bot]";
const email = "41898282+github-actions[bot]@users.noreply.github.com";
console.info("name:", name);
console.info("email:", email);
await git
    .add(".")
    .addConfig("user.name", name)
    .addConfig("user.email", email)
    .addConfig("author.name", name)
    .addConfig("author.email", email)
    .addConfig("committer.name", name)
    .addConfig("committer.email", email)
    .addConfig("push.autoSetupRemote", "true");
