(() => {
    const username = "SoonOwOnooS";
    const profileUrl = `https://github.com/${username}`;
    const apiUrl = `https://api.github.com/users/${username}`;
    const avatar = document.querySelector(".profile img");
    const stats = document.getElementById("githubStats");
    const reposElement = document.getElementById("repos");
    const fallbackAvatar = avatar?.getAttribute("src") || "Icon/Logo.png";

    function showFallback() {
        if (!stats) return;
        const link = document.createElement("a");
        link.href = profileUrl;
        link.textContent = "View my projects on GitHub";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        stats.replaceChildren(link);
    }

    async function getJson(url) {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 8000);
        try {
            const response = await fetch(url, { signal: controller.signal });
            if (!response.ok) throw new Error("GitHub is unavailable");
            return await response.json();
        } finally {
            window.clearTimeout(timeout);
        }
    }

    async function loadProfile() {
        try {
            const profile = await getJson(apiUrl);
            if (avatar && typeof profile.avatar_url === "string" && profile.avatar_url.startsWith("https://")) {
                avatar.addEventListener("error", () => {
                    avatar.src = fallbackAvatar;
                }, { once: true });
                avatar.src = profile.avatar_url;
            }
            if (stats && Number.isInteger(profile.public_repos)) {
                stats.textContent = `Public repositories: ${profile.public_repos}`;
            }
        } catch {
            showFallback();
        }
    }

    async function loadRepositories() {
        if (!reposElement) return;
        try {
            const repos = await getJson(`${apiUrl}/repos?sort=updated&per_page=5`);
            if (!Array.isArray(repos)) return;
            reposElement.querySelectorAll(".repo").forEach(link => link.remove());
            repos.slice(0, 5).forEach(repo => {
                if (typeof repo.name !== "string" || typeof repo.html_url !== "string" || !repo.html_url.startsWith("https://github.com/")) return;
                const link = document.createElement("a");
                link.className = "repo";
                link.href = repo.html_url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = repo.name;
                reposElement.append(link);
            });
        } catch {
            // The profile link remains usable when the API is offline or rate limited.
        }
    }

    showFallback();
    void loadProfile();
    void loadRepositories();
})();
