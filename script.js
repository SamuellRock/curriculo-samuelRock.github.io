const htmlEl = document.documentElement;
const langButtons = document.querySelectorAll('[data-set-lang]');
const langElements = document.querySelectorAll('[data-lang]');
const langContentBlocks = document.querySelectorAll('[data-lang-content]');
const downloadButtons = [
    document.getElementById('downloadSidebarBtn'),
    document.getElementById('downloadMainBtn')
].filter(Boolean);

console.log("Currículo carregado");

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

    langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setLang === lang);
    });

    langElements.forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
    });

    langContentBlocks.forEach(block => {
    block.classList.toggle('active', block.dataset.langContent === lang);
    });

    localStorage.setItem('resume_lang', lang);
}

function downloadCV() {
    window.print();
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

downloadButtons.forEach(btn => {
    btn.addEventListener('click', downloadCV);
});

const savedLang = localStorage.getItem('resume_lang');
setLanguage(savedLang === 'en' ? 'en' : 'pt');