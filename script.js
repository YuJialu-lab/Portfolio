window.onload = function (e) {

    const sections = [{
            title: "Portfolio",
            image: ["more.jpg", "more.jpg"],
            description: "Seleccion of works, featuring UI Design. Get to know me!",
            url: "https://yujialu-lab.github.io/Portfolio/portfolio/",
            button: "enter",
            class: "",
            target: ""
        },
        {
            title: "Daily UI",
            image: ["music-app-animate2", "music-app-animate2"],
            description: "Daily UI Challenge progress.",
            url: "/works",
            button: "enter",
            class: "",
            target: ""
        },
        {
            title: "Showreel",
            image: ["showreel.jpg", "showreel.jpg"],
            description: "Quick way to check a few of my UI designs and interactions.",
            url: "#",
            button: "watch",
            class: "video",
            target: "_self"
        },
    ];

    const social = [{
            name: "Linkedin",
            icon: "linkedin.svg",
            url: "https://www.linkedin.com/in/jialu-yu-a67597165/",
        },

        {
            name: "Dribbble",
            icon: "dribbble.svg",
            url: "https://dribbble.com/jialuyu",
        },
    ];

    const documents = [{
            name: "cv and skills",
            icon: "me.svg",
            url: "https://yujialu-lab.github.io/Portfolio/cv/",
        },
        {
            name: "send email",
            icon: "email.svg",
            url: "mailto: lu.yujialu@gmail.com",
        },
    ];
    const intro = document.querySelector('.intro'),
        socialItems = document.querySelector('.social');


    // Add the Intro Sections
    sections.forEach(function (el) {
        const randomImage = Math.floor(Math.random() * el.image.length);
        const template = `
        <a class="introItem ${el.class}" href="${el.url}" target="${el.target}" >
            <figure class="introItem__image">
                    <img src="${el.image[randomImage]}" alt="">
            </figure>
            <div class="introItem__content">
                <h2 class="introItem__title">${el.title}</h2>
                <p class="introItem__text">${el.description}</p>
                <div class="introItem__button"><p>${el.button}</p><span></span></div>
            </div>
        </a>
        `;

        intro.insertAdjacentHTML("beforeend", template);

    })

    //Animate Intro Section on Hover
    const introItem = document.querySelectorAll('.introItem');
    introItem.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    })

    function animeIn(e) {
        introItem.forEach(function (el) {
            el.style.opacity = "0.5";
            el.style.transform = "scale(0.95)";
        });
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
    };

    function animeOut() {
        introItem.forEach(function (el) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
        });

    };


    // Add Social Media on footer

    social.forEach(function (el) {
        const template = ` 
        <a class="social__item" href="${el.url}" target="_blank" rel="noopener">
        <img class="social__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        socialItems.insertAdjacentHTML("beforeend", template);
    })

    documents.forEach(function (el) {
        const template = ` 
        <a class="documents__item" href="${el.url}" target="_blank" rel="noopener">
        <p class="documents__name">${el.name}</p>
        <img class="documents__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        document.querySelector('.documents').insertAdjacentHTML("beforeend", template);
    })

    // Make the wrapper 100vh on mobile
    if (window.innerWidth <= 899) {
        document.querySelector('#wrapper').style.height = window.innerHeight + "px";
    }


    //open Modal

    const btnVideo = document.querySelector('.video'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        body.style.overflow = "visible";
    };
    document.querySelector('.modal').style.height = window.innerHeight + "px";

};
