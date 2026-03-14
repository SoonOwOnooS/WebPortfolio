const APIURL = 'https://api.github.com/users/';
const username = "hoowoonsoon";

async function getGithubProfile(){
    const response = await fetch(APIURL + username);
    const data = await response.json();

    console.log("GitHub data:", data);

    const avatar = document.querySelector(".profile img");
    avatar.src = data.avatar_url;

    const stats = document.getElementById("githubStats");
    stats.textContent = `Public repos: ${data.public_repos}`;

    getRepos();
}

async function getRepos(){
    const response = await fetch(APIURL + username + "/repos?sort=created");
    const repos = await response.json();

    addRepos(repos);
}

function addRepos(repos) {
    const reposEl = document.getElementById('repos');

    repos.slice(0,5).forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    });
}

getGithubProfile();