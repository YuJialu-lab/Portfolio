
// Skills

var skills = [{
        img: "icon_analysis.svg",
        title: "Analysis"
    },
    {
        img: "icon_develop.svg",
        title: "Develop"
    },
    {
        img: "icon_plan.svg",
        title: "Project plan"
    },
    {
        img: "icon_card.svg",
        title: "Branding"
    },
    {
        img: "icon_ui.svg",
        title: "UI/UX Design"
    },
    {
        img: "icon_motion.svg",
        title: "Motion Graphics"
    }
];

var rowIcons = document.querySelector('.row-icons');

for (let i = 0; i < skills.length; i++) {
    const {
        img,
        title
    } = skills[i];


    var templateSkills = `
    <div class="icon-section">
        <img src="${img}" alt="${title}">
        <p>${title}</p>
    </div>`;

    rowIcons.insertAdjacentHTML('beforeend', templateSkills);

};

// Social

var social = [{
        img: "linkedin.svg",
        title: "linkedin",
        url: "https://www.linkedin.com/in/jialu-yu-a67597165/"
    },
    {
        img: "dribbble.svg",
        title: "dribbble",
        url: "https://dribbble.com/jialuyu"
    },
    {
        img: "codepen.svg",
        title: "codepen",
        url: "https://codepen.io/"
    }
];

var socialItems = document.querySelector('.social-items');

for (let i = 0; i < social.length; i++) {
    const {
        img,
        title,
        url,
    } = social[i];


    var templateSocial = `
        <a class="social" href="${url}" target="_blank"  rel="noopener">
            <img src="${img}" alt="${title}">
            <p class="social-title">${title}</p>
        </a>`;

    socialItems.insertAdjacentHTML('beforeend', templateSocial);

}