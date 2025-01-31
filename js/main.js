// Traducciones
const translations = {
    de: {
        consulting: 'Unternehmensberatung',
        realestate: 'Immobilien & Investments',
        analysis: 'Finanzanalyse & Konzepte'
    },
    en: {
        consulting: 'Corporate Consulting',
        realestate: 'Real Estate & Investments',
        analysis: 'Financial Analysis & Concepts'
    },
    es: {
        consulting: 'Consultoría Empresarial',
        realestate: 'Bienes Raíces e Inversiones',
        analysis: 'Análisis Financiero y Conceptos'
    }
};

// Cambiar idioma
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Actualizar botones
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Cambiar textos
        const lang = button.dataset.lang;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[lang][key];
        });
    });
});

// Actualizar año en el footer
document.getElementById('year').textContent = new Date().getFullYear();