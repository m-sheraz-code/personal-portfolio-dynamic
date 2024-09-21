
    // Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
document.getElementById('nav-links').classList.toggle('show');

// Toggle between "X" and the original menu icon
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle.innerHTML === 'X') {
    menuToggle.innerHTML = '&#9776;'; // Original menu icon (three horizontal lines)
} else {
    menuToggle.innerHTML = 'X'; // X icon to close the menu
}
});

// Handle language switching
document.querySelectorAll('.language-switcher img').forEach(img => {
    img.addEventListener('click', () => {
        const selectedLang = img.getAttribute('data-lang');

        // Set the lang attribute on the html element
        document.documentElement.lang = selectedLang;

        // Call a function to update the content based on the selected language
        updateContentBasedOnLanguage(selectedLang);
    });
});

function updateContentBasedOnLanguage(language) {
// Example translations for demonstration purposes
const translations = {
en: {
    name: "Muhammad Sheraz",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact"
},
ar: {
    name: "محمد شيراز",
    about: "حول",
    skills: "المهارات",
    projects: "المشاريع",
    certifications: "الشهادات",
    contact: "اتصل"
},
ur: {
    name: "محمد شیراز",
    about: "کے بارے میں",
    skills: "مہارتیں",
    projects: "پروجیکٹس",
    certifications: "سرٹیفیکیشن",
    contact: "رابطہ"
},
fr: {
    name: "Muhammad Sheraz",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact"
}
};

    // To update the name in your header based on the selected language:
    document.querySelector('.name-des span').textContent = translations[language].name;


    // Update navigation links based on the selected language
    const links = document.querySelectorAll('#nav-links li a');
    const keys = ['about', 'skills', 'projects', 'certifications', 'contact'];

    keys.forEach((key, index) => {
        links[index].textContent = translations[language][key];
    });
}

// Function to show the full-screen overlay on image click
document.querySelectorAll('.Certificate img').forEach((img) => {
    img.addEventListener('click', () => {
        let overlay = document.createElement('div');
        overlay.classList.add('fullscreen-overlay');
        
        const clonedImg = img.cloneNode(); // Clone the image
        overlay.appendChild(clonedImg);

        document.body.appendChild(overlay);
        overlay.classList.add('active');

        overlay.addEventListener('click', () => {
            overlay.remove(); // Remove the overlay when clicked
        });
    });
});

