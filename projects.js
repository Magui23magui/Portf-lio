/* =========================================================
   PROJECT DATA — the single source of truth.
   The home page list AND the project pages both read from here.
   To add a project: copy a block, give it a new id, add images
   in images/<id>/ (the first image is used as the hover preview).
   Fields left empty ("") are simply hidden on the project page.
========================================================= */

const projects = {
    "troca-paginas": {
        category: { pt: "Desenvolvimento Web · UX/UI", en: "Web Development · UX/UI" },
        title: { pt: "Troca Páginas", en: "Troca Páginas" },
        description: {
            pt: "Design e desenvolvimento da Troca Páginas, uma plataforma digital que promove a partilha e a troca de livros entre leitores. Inclui criação de perfis, listagem de livros, pesquisa de exemplares e gestão de trocas, numa interface simples, acessível e responsiva, pensada para manter os livros em circulação e aproximar leitores.",
            en: "Design and development of Troca Páginas, a digital platform for sharing and swapping books between readers. It includes profile creation, book listings, search and swap management, in a simple, accessible and responsive interface designed to keep books in circulation and bring readers together."
        },
        role: { pt: "Design e desenvolvimento", en: "Design and development" },
        tools: "Figma, React, HTML, CSS, JavaScript, PostgreSQL",
        year: "2025",
        images: [
            { src: "images/troca-paginas/capa.jpg" },
            { src: "images/troca-paginas/interface.jpg" },
            { src: "images/troca-paginas/detalhe.jpg" }
        ]
    },

    "viriatus-scouting": {
        category: { pt: "Aplicação Mobile · UI/UX", en: "Mobile Application · UI/UX" },
        title: { pt: "Viriatus Scouting", en: "Viriatus Scouting" },
        description: {
            pt: "Design e desenvolvimento da Viriatus Scouting, uma aplicação de recrutamento desportivo criada para o Académico de Viseu FC. Pensada para apoiar o trabalho dos scouts, alia uma usabilidade intuitiva a um desempenho consistente. O trabalho abrangeu o layout responsivo, os princípios de UX e acessibilidade e a programação das interações essenciais.",
            en: "Design and development of Viriatus Scouting, a sports recruitment app created for Académico de Viseu FC. Built to support the work of scouts, it combines intuitive usability with consistent performance. The work covered responsive layout, UX and accessibility principles, and the programming of the core interactions."
        },
        role: { pt: "Design e desenvolvimento", en: "Design and development" },
        tools: "Figma, React, HTML, CSS, JavaScript, Flutter",
        year: "2024",
        images: [
            { src: "images/viriatus-scouting/capa.jpg" },
            { src: "images/viriatus-scouting/interface.jpg" }
        ]
    },

    /* "ethica" is hidden for now. Remove the comment marks to show it again.
    "ethica": {
        category: { pt: "Design Editorial · Web", en: "Editorial Design · Web" },
        title: { pt: "ETHICA", en: "ETHICA" },
        description: {
            pt: "Uma publicação sobre a relação entre inteligência artificial e humanidade, explorada através de uma linguagem editorial e de uma experiência digital.",
            en: "A publication exploring the relationship between artificial intelligence and humanity through editorial language and a digital experience."
        },
        role: { pt: "Design editorial e digital", en: "Editorial and digital design" },
        tools: "HTML, CSS, JavaScript",
        year: "2025",
        images: [
            { src: "images/ethica/capa.jpg" },
            { src: "images/ethica/editorial.jpg" },
            { src: "images/ethica/web.jpg" }
        ]
    },
    */

    "mirage-studio": {
        category: { pt: "Identidade Visual", en: "Visual Identity" },
        title: { pt: "mirage studio", en: "mirage studio" },
        description: {
            pt: "Criei o Mirage Studio como extensão do meu trabalho enquanto designer, traduzindo uma abordagem clara e versátil. A sua identidade reflete um equilíbrio entre simplicidade e experimentação visual. ",
            en: "I created Mirage Studio as an extension of my work as a designer, reflecting a clear and versatile approach. Its identity balances simplicity with visual experimentation."
        },
        role: { pt: "Design de identidade", en: "Identity design" },
        tools: "Adobe Illustrator, Adobe Photoshop",
        year: "2025",
        images: [
            { src: "images/mirage-studio/capa.jpg" }
        ]
    },

    "ponto-daguarela": {
        category: { pt: "Identidade Visual · Comunicação", en: "Visual Identity · Communication" },
        title: { pt: "Ponto d’Aguarela", en: "Ponto d’Aguarela" },
        description: {
            pt: "Desenvolvimento da identidade visual da galeria de arte contemporânea Ponto d’Aguarela. A proposta gráfica procura traduzir a delicadeza e a sofisticação do espaço.",
            en: "Development of the visual identity for Ponto d’Aguarela, a contemporary art gallery. The graphic proposal seeks to convey the delicacy and sophistication of the space."
        },
        role: { pt: "Design e comunicação visual", en: "Design and visual communication" },
        tools: "Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe After Effects",
        year: "2023",
        images: [
            { src: "images/ponto-daguarela/capa.jpg" }
        ]
    },

    "parque-ecologico": {
        category: { pt: "Identidade Visual · Comunicação", en: "Visual Identity · Communication" },
        title: { pt: "Parque Ecológico de Gouveia", en: "Gouveia Ecological Park" },
        description: {
            pt: "Identidade visual desenvolvida em contexto de estágio para o Parque Ecológico de Gouveia, com o objetivo de reforçar a educação ambiental e promover o espaço. O projeto inclui cartazes e outros suportes de comunicação e divulgação.",
            en: "Visual identity developed during an internship for the Gouveia Ecological Park, aiming to strengthen environmental education and promote the space. The project includes posters and other communication and promotional materials."
        },
        role: { pt: "Design e comunicação visual", en: "Design and visual communication" },
        tools: "Adobe Illustrator, Adobe Photoshop, Adobe InDesign, Adobe Animate, Adobe Premiere Pro",
        year: "2024",
        images: [
            { src: "images/parque-ecologico/capa.jpg" },
            { src: "images/parque-ecologico/cartaz.jpg" },
            { src: "images/parque-ecologico/aplicacao.jpg" }
        ]
    },

    "cities-and-moments": {
        category: { pt: "Fotografia", en: "Photography" },
        title: { pt: "Cities and Moments", en: "Cities and Moments" },
        description: {
            pt: "Série fotográfica que percorre cidades e pequenos detalhes onde a arquitetura, a natureza e a vida quotidiana se encontram. Entre fachadas históricas, pormenores urbanos e instantes de natureza, cada imagem é um fragmento poético entre o efémero e o eterno.",
            en: "A photographic series that wanders through cities and small details where architecture, nature and everyday life meet. Between historic façades, urban details and moments of nature, each image is a poetic fragment between the ephemeral and the eternal."
        },
        role: { pt: "Fotografia", en: "Photography" },
        tools: "adobe Lightroom, Adobe Photoshop",
        year: "2023",
        images: [
            { src: "images/cities-and-moments/capa.jpg" }
        ]
    }
};

/* Shared language helpers (remembered between pages) */
function getSavedLanguage() {
    try {
        const saved = localStorage.getItem("language");
        return saved === "en" ? "en" : "pt";
    } catch (e) {
        return "pt";
    }
}

function saveLanguage(language) {
    try { localStorage.setItem("language", language); } catch (e) { /* ignore */ }
}

function paintLanguageToggle(language) {
    const toggle = document.getElementById("language-toggle");
    if (toggle) {
        toggle.innerHTML = language === "pt"
            ? "<strong>PT</strong> / EN"
            : "PT / <strong>EN</strong>";
    }
}