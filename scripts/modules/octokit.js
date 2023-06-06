import console from "../modules/console.js";
import fs from "fs";
import yaml from "yaml";
const { assignees } = yaml.parse(fs.readFileSync(".github/auto_assign.yaml", { encoding: "utf-8" }));
import { startGroup, endGroup } from "@actions/core";
import { Octokit } from "@octokit/rest";
import { retry } from "@octokit/plugin-retry";
import authAction from "@octokit/auth-action";
import authUnauthenticated from "@octokit/auth-unauthenticated";
const isInGithubActions = process.env.GITHUB_ACTIONS === "true";
const isInMasterBranch = process.env.GITHUB_REF === "refs/heads/master";
const isPush = ["push"].includes(process.env.GITHUB_EVENT_NAME);
const isPullRequest = ["pull_request"].includes(process.env.GITHUB_EVENT_NAME);
const octokitBaseOptions = {
    owner: isInGithubActions ? process.env.GITHUB_REPOSITORY_OWNER : null,
    repo: isInGithubActions ? process.env.GITHUB_REPOSITORY.split("/")[1] : null,
};
const workflowLink = isInGithubActions ? `https://github.com/${octokitBaseOptions.owner}/${octokitBaseOptions.repo}/actions/runs/${process.env.GITHUB_RUN_ID}` : null;
class OctokitWithRetry extends Octokit.plugin(retry) {
    constructor(authStrategy, auth) {
        if (authStrategy && auth) {
            super({ authStrategy, auth });
        } else {
            super({
                authStrategy: isInGithubActions && process.env.GITHUB_TOKEN ? authAction.createActionAuth : authUnauthenticated.createUnauthenticatedAuth,
                auth: isInGithubActions ? process.env.GITHUB_TOKEN ? {} : { reason: "Running in github actions, but the `GITHUB_TOKEN` env variable is unset, unable to get any auth." } : { reason: "Not running in github actions, unable to get any auth." },
            });
        }
        // 非常神必，直接给 request 传入 { ...octokitBaseOptions, ...options } 没有任何作用，只能修改地址了
        this.hook.wrap("request", (request, options) => {
            const url = options.url.split("/");
            options.url = url.map((part) => part === "{owner}" ? options.owner || octokitBaseOptions.owner || part : part === "{repo}" ? options.repo || octokitBaseOptions.repo || part : part).join("/");
            return request(options);
        });
    }
}
const octokit = new OctokitWithRetry();
const auth = await octokit.auth();
startGroup("octokit initialization:");
console.log("isInGithubActions:", isInGithubActions);
console.log("isInMasterBranch:", isInMasterBranch);
console.log("isPush:", isPush);
console.log("isPullRequest:", isPullRequest);
console.info("workflowLink:", workflowLink);
console.log("octokitBaseOptions:", octokitBaseOptions);
console.log("auth:", auth);
endGroup();
/**
 * @param {string} issueTitle 
 * @param {string} issueBody 
 * @param {string[]} labels 
 * @param {string} [replyBody] 
 * @returns {Promise<number>}
 */
const createIssue = async (issueTitle, issueBody, labels, replyBody) => {
    if (!isInMasterBranch) {
        console.info("[createIssue]", "Not running in the master branch, exit.");
        return;
    }
    console.info("[createIssue]", "Running in the master branch, searching current opened issue with labels:", labels);
    const issues = (await octokit.rest.issues.listForRepo({
        labels: labels.join(","),
    })).data;
    startGroup("[createIssue]", "Current opened issue:");
    console.info(issues);
    endGroup();
    let issue_number;
    let body = `${assignees.map((assignee) => `@${assignee}`).join(" ")} Occured at ${workflowLink}`;
    if (replyBody?.length > 0) {
        body += `\n\n<hr>\n\n${replyBody}`;
    }
    for (const { number, title, body } of issues) {
        console.info("[createIssue]", "Checking issue:", { number, title, body });
        if (title !== issueTitle || body !== issueBody) {
            console.info("[createIssue]", "Issue is not relative, ignore.");
            continue;
        }
        if (typeof issue_number !== "number") {
            console.info("[createIssue]", "Issue is relative, reuse it:", issue_number);
            issue_number = number;
            continue;
        }
        console.info("[createIssue]", "Issue is duplicated, start to close issue...");
        const result = await octokit.rest.issues.update({
            issue_number: number,
            state: "closed",
            state_reason: "not_planned",
        });
        startGroup("[createIssue]", "Successfully closed the issue:");
        console.info(result);
        endGroup();
    }
    if (typeof issue_number !== "number") {
        const options = {
            title: issueTitle,
            body: issueBody,
            labels,
            assignees,
        };
        console.info("[createIssue]", "No relative issue found, start to create issue:", options);
        const result = await octokit.rest.issues.create(options);
        startGroup("[createIssue]", "Successfully created the issue:");
        console.info(result);
        endGroup();
        issue_number = result.data.number;
    }
    const options = {
        issue_number,
        body,
    };
    console.info("[createIssue]", "Start to reply the relative issue:", options);
    const result = await octokit.rest.issues.createComment(options);
    startGroup("[createIssue]", "Successfully replied the relative the issue:");
    console.info(result);
    endGroup();
    return issue_number;
};
export { octokit, isInMasterBranch, octokitBaseOptions, createIssue, isInGithubActions, isPush, isPullRequest, OctokitWithRetry, workflowLink };
export default { octokit, isInMasterBranch, octokitBaseOptions, createIssue, isInGithubActions, isPush, isPullRequest, OctokitWithRetry, workflowLink };
