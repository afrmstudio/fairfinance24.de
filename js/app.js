document.addEventListener("DOMContentLoaded", function () {
    let currentLang = 'de';

    // Cargar secciones parciales
    function loadSection(id, file) {
        fetch(`./partials/${file}`)
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .then(() => {
                if (id === "header-container") setupLanguageSwitcher();
                if (id === "hero-container") updateContent();
            });
    }

    loadSection("header-container", "header.html");
    loadSection("hero-container", "hero.html");
    loadSection("footer-container", "footer.html");

    const translations = {
        de: [
            { emoji: '📈', title: 'Unternehmensberatung' },
            { emoji: '🏢', title: 'Immobilien & Investments' },
            { emoji: '🔍', title: 'Finanzanalyse & Konzepte' }
        ],
        en: [
            { emoji: '📈', title: 'Corporate Consulting' },
            { emoji: '🏢', title: 'Real Estate & Investments' },
            { emoji: '🔍', title: 'Financial Analysis & Concepts' }
        ],
        es: [
            { emoji: '📈', title: 'Consultoría Empresarial' },
            { emoji: '🏢', title: 'Bienes Raíces e Inversiones' },
            { emoji: '🔍', title: 'Análisis Financiero y Conceptos' }
        ]
    };

    function updateContent() {
        const servicesContainer = document.getElementById("services-container");
        if (!servicesContainer) return;

        servicesContainer.innerHTML = "";

        translations[currentLang].forEach(service => {
            const serviceDiv = document.createElement("div");
            serviceDiv.classList.add("service");
            serviceDiv.innerHTML = `<span class="emoji">${service.emoji}</span> ${service.title}`;
            servicesContainer.appendChild(serviceDiv);
        });
    }

    function setupLanguageSwitcher() {
        document.querySelectorAll(".language-dropdown li").forEach(item => {
            item.addEventListener("click", function () {
                currentLang = this.getAttribute("data-lang");
                updateContent();
            });
        });

        document.getElementById("year").textContent = new Date().getFullYear();
    }
});
