//Jobs

var jobs = [{
        date: "November 2017 — present",
        title: "UI/UX Designer/Developer",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Netfonds Gruppe (AG)",
        extra: "UI/UX Designer, Front-end developer, Project manager"
    },
    {
        date: "May 2016 — present",
        title: "Freelancer",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Startup companys",
        extra: "Webdesign, Print Medien, Packaging design, Graphic design"
    },
    {
        date: "March 2017 — October 2017",
        title: "Art Direction Trainee",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Accenture",
        extra: "UI/UX Design, Print Medien, PR"
    },
    {
        date: "Febrary 2013 — August 2013",
        title: "Trainee",
        subDate: "",
        title2: "",
        subDate2: "",
        description: "Tencent, China",
        extra: "Management, Marketing, Analyse"
    }
];

var jobsSection = document.querySelector('.jobs');

for (let i = 0; i < jobs.length; i++) {
    const {
        date,
        title,
        title2,
        description,
        subDate,
        subDate2,
        extra
    } = jobs[i];

    var template = `
        <div class="timeline-item">
            <label>${date}</label>
            <article>
                    <p class="title">${title} ${subDate ? `<span> ${subDate}</span>` : ""} </p>
                    ${title2 ? `<p class="title">${title2} <span> ${subDate2}</span></p>` : ""} 
                    <p class="description">${description}</p>
                   ${extra ? `<p class="extra">${extra}</p>` : ""}
                </article>
            </div>
    `;

    jobsSection.insertAdjacentHTML('beforeend', template);
}

// Studies

var studies = [{
        date: "November 2018 — 2019 (Not regular)",
        title: "JavaScript/jQuery training",
        description: "Netfonds AG",
	extra: "Training for Developer Trainee"
    },
    {
        date: "October 2014 — October 2017",
        title: "Degree: Brand Design",
        description: "Brand Academy, Hamburg"
    },
    {
        date: "October 2013 — July 2014",
        title: "Brand Design + German course",
        description: "Zhuhai Branch of Beijing Normal University, China"
    },
    {
        date: "October 2012 — January 2014",
        title: "Wirtschaft Managment",
        description: "Zhuhai Branch of Beijing Normal University, China"
    }
];

var studiesSection = document.querySelector('.studies');

for (let i = 0; i < studies.length; i++) {
    const {
        date,
        title,
        description
    } = studies[i];

    var template = `
    <div class="timeline-item">
        <label>${date}</label>
            <article>
                <p class="title">${title}</p>
                <p class="description">${description}</p>
            </article>
        </div>
`;

    studiesSection.insertAdjacentHTML('beforeend', template);
}