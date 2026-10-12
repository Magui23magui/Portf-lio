const projectTranslations = {
    pt: {
        backProjects: "Projetos",
        backLink: "Voltar aos projetos",
        detailRole: "Papel",
        detailTools: "Ferramentas",
        detailYear: "Ano",
        nextProject: "Próximo projeto",
        missingImage: "Adicionar imagem: ",
        footer: "Feito com curiosidade."
    },
    en: {
        backProjects: "Projects",
        backLink: "Back to projects",
        detailRole: "Role",
        detailTools: "Tools",
        detailYear: "Year",
        nextProject: "Next project",
        missingImage: "Add image: ",
        footer: "Made with curiosity."
    }
};

let language = getSavedLanguage();

function getCurrentId() {
    const id = new URLSearchParams(window.location.search).get("id");
    // No (or unknown) id: open the first project so the page is never empty
    return projects[id] ? id : Object.keys(projects)[0];
}

/* Open a project in the right-hand side without reloading the page */
function openProject(id) {
    if (id === getCurrentId()) return;
    history.pushState({}, "", `project.html?id=${encodeURIComponent(id)}`);
    renderProject();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindInPageLink(link, id) {
    link.href = `project.html?id=${encodeURIComponent(id)}`;
    link.onclick = event => {
        // let ctrl/cmd/middle-click open a new tab as normal
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        openProject(id);
    };
}

/* ---------- Left menu ---------- */

function renderMenu(activeId) {
    const menu = document.getElementById("project-menu-list");
    menu.replaceChildren();

    Object.entries(projects).forEach(([id, project], index) => {
        const link = document.createElement("a");
        link.className = "menu-item" + (id === activeId ? " active" : "");
        if (id === activeId) link.setAttribute("aria-current", "page");
        bindInPageLink(link, id);

        const number = document.createElement("span");
        number.className = "menu-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const text = document.createElement("span");
        text.className = "menu-title";
        text.textContent = project.title[language];

        link.append(number, text);
        menu.appendChild(link);
    });

    // keep the active item visible inside the menu
    const active = menu.querySelector(".active");
    if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
}

/* ---------- Right content ---------- */

function renderProject() {
    const id = getCurrentId();
    const project = projects[id];
    const t = projectTranslations[language];

    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
    paintLanguageToggle(language);

    document.title = `${project.title[language]} — Margarida Santos`;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const text = t[element.dataset.i18n];
        if (text) element.textContent = text;
    });

    renderMenu(id);

    document.getElementById("project-category").textContent = project.category[language];
    document.getElementById("project-title").textContent = project.title[language];
    document.getElementById("project-description").textContent = project.description[language];

    // Details: hide any field that is empty
    const role = project.role[language];
    document.getElementById("project-role").textContent = role;
    document.getElementById("project-tools").textContent = project.tools;
    document.getElementById("project-year").textContent = project.year;

    document.getElementById("detail-role").hidden = !role;
    document.getElementById("detail-tools").hidden = !project.tools;
    document.getElementById("detail-year").hidden = !project.year;

    const visibleDetails = [role, project.tools, project.year].filter(Boolean).length;
    const detailsBox = document.getElementById("project-details");
    detailsBox.hidden = visibleDetails === 0;
    detailsBox.style.setProperty("--columns", Math.max(visibleDetails, 1));

    // Gallery
    const gallery = document.getElementById("project-gallery");
    gallery.replaceChildren();

    project.images.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = `${project.title[language]} (${index + 1}/${project.images.length})`;
        img.loading = index === 0 ? "eager" : "lazy";
        img.onerror = () => {
            img.alt = t.missingImage + item.src;
            img.classList.add("image-missing");
        };
        gallery.appendChild(img);
    });

    // Next project (wraps around to the first)
    const ids = Object.keys(projects);
    const nextId = ids[(ids.indexOf(id) + 1) % ids.length];
    bindInPageLink(document.getElementById("next-project"), nextId);
    document.getElementById("next-project-title").textContent = projects[nextId].title[language];

    // small fade-in on every project change
    const content = document.getElementById("project-content");
    content.classList.remove("swap");
    void content.offsetWidth;
    content.classList.add("swap");
}

document.getElementById("language-toggle").addEventListener("click", () => {
    language = language === "pt" ? "en" : "pt";
    saveLanguage(language);
    renderProject();
});

window.addEventListener("popstate", renderProject);

renderProject();