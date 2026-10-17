(() => {
    const projects = [...document.querySelectorAll(".port-box")];
    const categoryButtons = [...document.querySelectorAll(".category-item")];
    const filterButtonContainer = document.querySelector(".filter-button");
    const radios = [...document.querySelectorAll('.filter-person-or-group input[type="radio"]')];
    const gallery = document.querySelector(".portfolio-gallery");
    if (!filterButtonContainer || !gallery) return;

    const filters = {
        technical: [["all", "All"], ["unity", "Unity"], ["unreal", "Unreal"]],
        design: [["all", "All"], ["2d", "2D"], ["3d", "3D"]]
    };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let currentCategory = "technical";
    let currentType = "all";
    let currentTeam = "all";

    const emptyMessage = document.createElement("p");
    emptyMessage.className = "filter-empty";
    emptyMessage.textContent = "No projects match these filters. Try selecting All.";
    emptyMessage.setAttribute("role", "status");
    emptyMessage.setAttribute("aria-live", "polite");
    emptyMessage.hidden = true;
    gallery.append(emptyMessage);

    function filterProjects() {
        let visibleCount = 0;
        projects.forEach(project => {
            const matches = project.dataset.category === currentCategory &&
                (currentType === "all" || project.dataset.type === currentType) &&
                (currentTeam === "all" || project.dataset.team === currentTeam);
            project.classList.toggle("hide", !matches);
            project.classList.toggle("show", matches);
            project.hidden = !matches;
            project.style.animation = reducedMotion.matches ? "none" : "";
            if (matches) visibleCount += 1;
        });
        emptyMessage.hidden = visibleCount > 0;
    }

    function updateTypeButtons() {
        filterButtonContainer.querySelectorAll("button").forEach(button => {
            const selected = button.dataset.type === currentType;
            button.setAttribute("aria-pressed", String(selected));
            button.querySelector("span").classList.toggle("active", selected);
        });
    }

    function selectCategory(category) {
        if (!filters[category]) return;
        currentCategory = category;
        currentType = "all";
        currentTeam = "all";
        radios.forEach(radio => { radio.checked = radio.id === "all"; });
        categoryButtons.forEach(button => {
            const selected = button.dataset.category === currentCategory;
            button.setAttribute("aria-pressed", String(selected));
            button.classList.toggle("active", selected);
        });
        filterButtonContainer.replaceChildren();
        filters[currentCategory].forEach(([type, label]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.dataset.type = type;
            button.className = "btn";
            const text = document.createElement("span");
            text.textContent = label;
            button.append(text);
            button.addEventListener("click", () => {
                currentType = type;
                updateTypeButtons();
                filterProjects();
            });
            filterButtonContainer.append(button);
        });
        updateTypeButtons();
        filterProjects();
    }

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => selectCategory(button.dataset.category));
    });
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (!radio.checked) return;
            currentTeam = radio.id;
            filterProjects();
        });
    });
    reducedMotion.addEventListener("change", filterProjects);
    selectCategory(currentCategory);
})();
