const translations = {
    pt: {
        navProjects: "Projetos",
        navAbout: "Sobre",
        navContact: "Contacto",
        heroPortfolio: "PORTFÓLIO",
        heroTags: "DESIGN · MULTIMÉDIA · INTERAÇÃO",
        heroDescription: "Designer de Multimédia interessada em interação, sistemas generativos e comunicação visual.",
        heroScroll: "Ver projetos",
        mq1: "Design de Interação",
        mq2: "Design Generativo",
        mq3: "Identidade Visual",
        mq4: "Desenvolvimento Web",
        mq5: "Visualização de Informação",
        introTitle: "Ideias que se transformam em experiências visuais.",
        introText: "Exploro a relação entre design, tecnologia e interação através de projetos digitais, identidades visuais e sistemas generativos.",
        projectsTitle: "Projetos",
        aboutTitle: "Sobre mim",
        aboutBig: "Acredito que o design começa com curiosidade, mas ganha forma quando transforma problemas reais em soluções claras e funcionais.",
        aboutText1: "A minha formação em Tecnologias e Design de Multimédia permite-me explorar diferentes áreas, do desenvolvimento digital à comunicação visual.",
        aboutText2: "Gosto de experimentar, cruzar referências e encontrar soluções que equilibrem intenção, funcionalidade e expressão visual. Procuro desafios que me tirem da zona de conforto, me ajudem a desenvolver novas competências e a descobrir até onde uma ideia pode chegar.",
        contactTitle: "Contactos",
        footer: "Feito com curiosidade."
    },

    en: {
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        heroPortfolio: "PORTFOLIO",
        heroTags: "DESIGN · MULTIMEDIA · INTERACTION",
        heroDescription: "Multimedia designer interested in interaction, generative systems and visual communication.",
        heroScroll: "See projects",
        mq1: "Interaction Design",
        mq2: "Generative Design",
        mq3: "Visual Identity",
        mq4: "Web Development",
        mq5: "Information Visualisation",
        introTitle: "Ideas transformed into visual experiences.",
        introText: "I explore the relationship between design, technology and interaction through digital projects, visual identities and generative systems.",
        projectsTitle: "Projects",
        aboutTitle: "About me",
        aboutBig: "I believe design starts with curiosity, but takes shape when it turns real problems into clear, functional solutions.",
        aboutText1: "My background in Multimedia Technologies and Design allows me to explore different areas, from digital development to visual communication.",
        aboutText2: "I like to experiment, mix references and find solutions that balance intent, functionality and visual expression. I look for challenges that take me out of my comfort zone, help me build new skills and discover how far an idea can go.",
        contactTitle: "Get in touch",
        footer: "Made with curiosity."
    }
};

let currentLanguage = getSavedLanguage();

/* ---------- Project list ---------- */

function renderProjectList() {
    const list = document.getElementById("project-list");
    list.replaceChildren();

    Object.entries(projects).forEach(([id, project], index) => {
        const link = document.createElement("a");
        link.className = "project reveal";
        link.href = `project.html?id=${encodeURIComponent(id)}`;
        link.dataset.cover = project.images[0]?.src || "";

        const number = document.createElement("div");
        number.className = "project-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const info = document.createElement("div");
        info.className = "project-info";

        const title = document.createElement("h3");
        title.textContent = project.title[currentLanguage];

        const category = document.createElement("p");
        category.textContent = project.category[currentLanguage];

        info.append(title, category);

        link.append(number, info);
        list.appendChild(link);
    });

    observeReveals();
    bindPreview();
}

/* ---------- Language ---------- */

function setLanguage(language) {
    currentLanguage = language;
    saveLanguage(language);
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const text = translations[language][element.dataset.i18n];
        if (text) element.textContent = text;
    });

    paintLanguageToggle(language);
    renderProjectList();
}

document.getElementById("language-toggle").addEventListener("click", () => {
    setLanguage(currentLanguage === "pt" ? "en" : "pt");
});

/* ---------- Scroll reveal ---------- */

const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 })
    : null;

function observeReveals() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(element => {
        if (revealObserver) revealObserver.observe(element);
        else element.classList.add("visible");
    });
}

/* ---------- Cursor-following image preview ---------- */

const preview = document.getElementById("project-preview");
const previewImg = preview.querySelector("img");
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

let targetX = 0, targetY = 0, currentX = 0, currentY = 0, rafId = null;

function animatePreview() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;
    preview.style.transform =
        `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(animatePreview);
}

function bindPreview() {
    if (!canHover) return;

    document.querySelectorAll(".project").forEach(row => {
        row.addEventListener("mouseenter", () => {
            const cover = row.dataset.cover;
            if (!cover) return;

            previewImg.onload = () => preview.classList.add("active");
            previewImg.onerror = () => preview.classList.remove("active");
            previewImg.src = cover;

            if (!rafId) animatePreview();
        });

        row.addEventListener("mouseleave", () => {
            preview.classList.remove("active");
            cancelAnimationFrame(rafId);
            rafId = null;
        });

        row.addEventListener("mousemove", event => {
            targetX = event.clientX;
            targetY = event.clientY;
            if (!preview.classList.contains("active")) {
                currentX = targetX;
                currentY = targetY;
            }
        });
    });
}

setLanguage(currentLanguage);
observeReveals();