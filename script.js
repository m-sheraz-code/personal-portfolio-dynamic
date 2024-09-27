// DYNAMIC DETAILS ................................

const personalData = {
    name: "Muhammad Sheraz",
    title: "Web Developer",
    description: "I am passionate about web development, with a strong focus on frontend technologies. I have a deep appreciation for both web and game development, which continue to inspire and drive my career.",
    profilePicture: "/images/IMG_20231203_104807_674.jpg",
    about: "I am a 21-year-old pursuing a Bachelor's degree in Computer Science, specializing in web development. With a solid foundation in HTML and CSS, I am adept at creating visually appealing and responsive websites. My expertise extends to WordPress development, where I focus on building custom themes and implementing user-friendly functionalities to enhance website performance.\n\nDriven by a passion for creating seamless user experiences, I am dedicated to leveraging my skills to deliver engaging and functional web solutions. I am committed to continuous learning and staying current with industry best practices to ensure the projects I work on are both innovative and effective.",
    education: [
        {
            degree: "Bachelor in Computer Science",
            description: "Currently pursuing a Bachelor's degree at <span>Information Technology University,</span> 5th semester.",
            date: "Current"
        },
        {
            degree: "Intermediate",
            description: "Completed Intermediate education from <span>Govt. Degree College Shahdrah</span> with 80%.",
            date: "2021-04-26"
        },
        {
            degree: "Matriculation",
            description: "Completed matriculation from <span>Govt. High School Shakargarh</span> with 91%.",
            date: "2019-02-13"
        }
    ],
    softSkills: [
        { name: "Teamwork", icon: "/images/partnership_2589792.png" },
        { name: "Problem Solving", icon: "/images/puzzle_3889837.png" },
        { name: "Critical Thinking", icon: "/images/thinking_16315145.png" },
        { name: "Work Ethic", icon: "/images/work-life_12467181.png" },
        { name: "Time Management", icon: "/images/collaboration_11445672.png" }
    ],
    hardSkills: [
        { name: "C++", icon: "/images/c_6132222.png" },
        { name: "HTML/CSS", icon: "/images/browser_921594.png" },
        { name: "Figma Designs", icon: "/images/figma_5968705.png" },
        { name: "WordPress", icon: "/images/wordpress_15015925.png" }
    ],
    projects: [
        {
            name: "Search Engine (C++)",
            description: "A <span>Data Structures and Algorithms (DSA)</span> project that implements efficient search functionality.",
            date: "2023-04-01"
        },
        {
            name: "Soccer Sphere Website (MERN)",
            description: "Developed using <span>AWS cloud services</span> and <span>MERN stack</span> for <span>DBMS</span> coursework.",
            date: "2023-09-11"
        },
        {
            name: "WordPress Websites",
            description: "Built <span>WordPress websites</span> such as <span>USA Dispatch and World Travels.</span>",
            date: "2024-07-10"
        }
    ],
    certificates: [
        {
            title: "WordPress Elementor Certificate",
            picture: "/images/Certificate1.jpg",
            date: "2024-07-05"
        },
        {
            title: "Code Crusher Competition",
            picture: "/images/Certificate2.jpeg",
            date: "2024-08-10"
        }
    ],
    socialLinks: {
        facebook: "https://www.facebook.com/ms22139?mibextid=ZbWKwL",
        whatsapp: "https://wa.me/92164203671",
        instagram: "https://www.instagram.com/msherrraz/",
        linkedin: "https://www.linkedin.com/in/muhammad-sheraz-7b6364328/"
    }
};

  
// Populate Name, Title, Description, Profile Picture, and About Section
document.querySelector(".name-des h1 span").innerText = personalData.name;
document.querySelector(".name-des p").innerText = personalData.description;
document.querySelector(".pp img").src = personalData.profilePicture;
document.querySelector("#about p").innerText = personalData.about;
document.title = personalData.name;
document.querySelector("footer p").innerHTML += personalData.name;

// Populate Education Section
const educationList = document.querySelector(".educations");
personalData.education.forEach(edu => {
    educationList.innerHTML += `
        <li>
            <strong>${edu.degree}</strong>
            <div class="education">
                <p>${edu.description}</p>
                <h4><i style="font-size:20px; color: #2B98D4;" class="fa">&#xf073;&nbsp;</i> ${edu.date}</h4>
            </div>
        </li>
    `;
});

// Populate Soft Skills Section
const softSkillsList = document.querySelector(".detail1 .inner-div");
let ulElementSoft = document.createElement("ul"); // Start with an empty <ul>

personalData.softSkills.forEach(skill => {
    // Create <li> for each skill
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name} Icon">
        <p>${skill.name}</p>
    `;
    ulElementSoft.appendChild(liElement); // Add the <li> to the current <ul>
});

softSkillsList.appendChild(ulElementSoft); // Append the final <ul>

// Populate Hard Skills Section
const hardSkillsList = document.querySelector(".detail2 .inner-div");
let ulElement = document.createElement("ul"); // Start with an empty <ul>

personalData.hardSkills.forEach(skill => {
    // Create <li> for each skill
    const liElement = document.createElement("li");
    liElement.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name} Icon">
        <p>${skill.name}</p>
    `;
    ulElement.appendChild(liElement); // Add the <li> to the current <ul>
});

hardSkillsList.appendChild(ulElement); // Append the final <ul>



// Populate Projects Section
const projectsList = document.querySelector(".projects");
personalData.projects.forEach(project => {
    projectsList.innerHTML += `
        <li>
            <strong>${project.name}</strong>
            <div class="project">
                <p>${project.description}</p>
                <h4><i style="font-size:20px; color: #2B98D4;" class="fa">&#xf073;&nbsp;</i> ${project.date}</h4>
            </div>
        </li>
    `;
});

// Populate Certificates Section
const certificatesList = document.querySelector(".Certifications");
personalData.certificates.forEach(cert => {
    certificatesList.innerHTML += `
        <li>
            <strong>${cert.title}</strong>
            <div class="Certificate">
                <div class="overlay">
                    <img src="${cert.picture}" alt="${cert.title}">
                </div>
                <h4><i style="font-size:20px; color: #2B98D4;" class="fa">&#xf073;&nbsp;</i> ${cert.date}</h4>
            </div>
        </li>
    `;
});

// Populate Social Media Links
const socialIcons = document.querySelector(".social-icons");
socialIcons.innerHTML = `
    <a href="${personalData.socialLinks.facebook}" target="_blank" class="social-icon">
        <img src="/images/social_15707737.png" alt="Facebook">
    </a>
    <a href="${personalData.socialLinks.whatsapp}" target="_blank" class="social-icon">
        <img src="/images/whatsapp_3670051.png" alt="WhatsApp">
    </a>
    <a href="${personalData.socialLinks.instagram}" target="_blank" class="social-icon">
        <img src="/images/social_15707749.png" alt="Instagram">
    </a>
    <a href="${personalData.socialLinks.linkedin}" target="_blank" class="social-icon">
        <img src="/images/linkedin_4782336.png" alt="LinkedIn">
    </a>
`;
  
  
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
        contact: "Contact",
        ranking: "I am passionate about web development, with a strong focus on frontend technologies. I have a deep appreciation for both web and game development, which continue to inspire and drive my career."
    },
    ar: {
        name: "محمد شيراز",
        about: "حول",
        skills: "المهارات",
        projects: "المشاريع",
        certifications: "الشهادات",
        contact: "اتصل",
        ranking: "أنا شغوف بتطوير الويب، مع تركيز قوي على تقنيات الواجهة الأمامية. لدي تقدير عميق لكل من تطوير الويب والألعاب، اللذان يستمران في إلهامي ودفع مسيرتي المهنية."
    },
    ur: {
        name: "محمد شیراز",
        about: "کے بارے میں",
        skills: "مہارتیں",
        projects: "پروجیکٹس",
        certifications: "سرٹیفیکیشن",
        contact: "رابطہ",
        ranking: "مجھے ویب ڈویلپمنٹ کا جنون ہے، خاص طور پر فرنٹ اینڈ ٹیکنالوجیز پر توجہ مرکوز ہے۔ میں ویب اور گیم ڈویلپمنٹ دونوں کی گہری قدر کرتا ہوں، جو میری پیشہ ورانہ زندگی کو مسلسل متاثر اور متحرک کرتی ہیں۔"
    },
    fr: {
        name: "Muhammad Sheraz",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        certifications: "Certifications",
        contact: "Contact",
        ranking: "Je suis passionné par le développement web, avec un fort accent sur les technologies front-end. J'ai une profonde appréciation pour le développement web et de jeux, qui continuent d'inspirer et de motiver ma carrière."
    }
    };
    // To update the name in your header based on the selected language:
    document.querySelector('.name-des span').textContent = translations[language].name;
    document.querySelector('.name-des p').textContent = translations[language].ranking;



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

