const translations = {
  nl: {
    vloerverwarming: 'Onderhoud en installatie van efficiënte vloerverwarmingssystemen.',
    airco: 'Deskundig advies en installatie van airconditioningsystemen.',
    heating: 'Betrouwbare verwarmingsoplossingen voor elk seizoen.',
    badkamer: 'Complete renovatie van badkamers met hoogwaardige afwerking.',
  },
  en: {
    vloerverwarming: 'Maintenance and installation of efficient underfloor heating systems.',
    airco: 'Expert advice and installation of air conditioning systems.',
    heating: 'Reliable heating solutions for every season.',
    badkamer: 'Complete renovation of bathrooms with high-quality finishes.',
  },
  tr: {
    vloerverwarming: 'Verimli yerden ısıtma sistemlerinin bakımı ve montajı.',
    airco: 'Uzman tavsiyesi ve klima sistemleri montajı.',
    heating: 'Her mevsim için güvenilir ısıtma çözümleri.',
    badkamer: 'Yüksek kaliteli bitirme ile banyo yenileme.',
  },
};

document.getElementById('lang-nl').addEventListener('click', () => setLanguage('nl'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-tr').addEventListener('click', () => setLanguage('tr'));

function setLanguage(lang) {
  document.getElementById('vloerverwarming-text').textContent = translations[lang].vloerverwarming;
  document.getElementById('airco-text').textContent = translations[lang].airco;
  document.getElementById('heating-text').textContent = translations[lang].heating;
  document.getElementById('badkamer-text').textContent = translations[lang].badkamer;
}
