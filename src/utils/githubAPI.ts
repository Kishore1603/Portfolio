import type { GitHubRepo } from "@/types";

const GITHUB_USERNAME = "Kishore1603";
const GITHUB_API = "https://api.github.com";

/**
 * Fetches public repositories for the configured GitHub user.
 * Sorted by most recently updated. Uses unauthenticated API (60 req/hr limit).
 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API}/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?sort=updated&per_page=30&type=public`;

  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github.v3+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos: GitHubRepo[] = await response.json();

  // Filter out forked repos and profile repo
  return repos.filter(
    (repo) =>
      repo.name !== GITHUB_USERNAME && repo.name !== `${GITHUB_USERNAME}`
  );
}

/**
 * Formats a date string to a readable format.
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
