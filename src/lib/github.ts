export async function getRepos() {
  const response = await fetch("https://api.github.com/users/j4mLoz/repos", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // cache 1 hora
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("GitHub API error:", errorText);
    throw new Error("Failed to fetch repos");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    console.error("Unexpected GitHub response:", data);
    throw new Error("GitHub did not return an array");
  }

  return data
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3);
}
