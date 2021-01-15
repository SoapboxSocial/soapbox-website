import { Octokit } from "@octokit/core";

export const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
