import { reactive } from 'vue'
export const store = reactive({

    // imgs
    logo: {
        path: "../../public/img/avada-movers-logo.png",
        alt: "Avada: Movers"
    },

    // texts
    heroText:
    {
        textTop: "MOVING WHITOUT THE HASSLE",
        textBottom: "PROFESSIONAL SEVICE WITH HIGH QUALITY AND CUSTOMER SATISFACTION",
        title: "WE MAKE IT SIMPLE"
    },

    about: {
        title: "ABOUT",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",

    },

    footTitle: "AVADA MOVERS",
    footSecondTitle: "RECENTS POSTS",

    footerText: "@copyright 2012-2020 | Avada Theme  by ThemeFusion | All Rights Reserved | Powered By WordPress ",

    headacheFree: {
        smallTitle: "HEADACHE FREE",
        topTitle: "Award Winning ",
        botTitle: "Moving Company ",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",
    },

    servicesTitles: {
        topTitle: "WE ARE A PROFESSIONAL",
        botTitle: "Full-Services Solution",
    },

    servicesCards: [
        {
            img: "../../public/img/avada-movers-serviceonephoto-final-400x255.jpg",
            title: "Two Man Teams",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",
        },
        {
            img: "../../public/img/avada-movers-servicetwophoto-final-400x255.jpg",
            title: "We Do All The Lifting",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",
        },
        {
            img: "../../public/img/avada-movers-servicethreephoto-final-400x255.jpg",
            title: "Coast To Coast",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",
        }
    ],

    freeQuoteTexts: {
        topTitle: "WE REMOVE THE HEADACHE FROM MOVING ",
        title: "Move With Ease",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing el aspect et non proident et ullamcor lore tell tellus. Lorem ipsum dolor sit amet, consect",
    },

    // links
    cta: {
        icons: "fa-regular fa-paper-plane",
        href: "#",
        text: "GET A FREE QUOTE ONLINE NOW ",
    },
    recentPostsLinks: [
        {
            id: 0,
            title: "Heading Out To Collage?",
            href: "#",
            footer: true,
        },
        {
            id: 1,
            title: "Moving Your Business?",
            href: "#",
            footer: true,
        },
        {
            id: 2,
            title: "Outstanding Quality",
            href: "#",
            footer: true,
        },
        {
            id: 4,
            title: "Cost Of Moving",
            href: "#",
            footer: true,

        },
        {
            id: 5,
            title: "Best Moving Tips",
            href: "#",
            footer: true,
        }
    ],
    navbarLinks: [
        {
            id: 0,
            title: "Home",
            href: "#",
            footer: true,
        },
        {
            id: 1,
            title: "Rates",
            href: "#",
            footer: true,
        },
        {
            id: 2,
            title: "Testimonials",
            href: "#",
            footer: true,
        },
        {
            id: 3,
            title: "FAQ",
            href: "#",
            footer: false,
        },
        {
            id: 4,
            title: "Blog",
            href: "#",
            footer: false,

        },
        {
            id: 5,
            title: "Contact",
            href: "#",
            footer: true,
        }
    ],
    topHeadLink: {
        Text: "Call us for a Free Quote: 1.800.555.67890.555",
        icon: "fa-solid fa-phone-flip",
        href: "#",
    },
    socials: [
        {
            id: "facebook",
            href: "#",
            icon: "fa-brands fa-facebook-f"
        },
        {
            id: "twitter",
            href: "#",
            icon: "fa-brands fa-twitter"
        },
        {
            id: "instagram",
            href: "#",
            icon: "fa-brands fa-instagram"
        },
        {
            id: "youtube",
            href: "#",
            icon: "fa-brands fa-youtube"
        }],

    //buttons
    navBut: {
        text: "FREE QUOTE",
        href: "#",
    },
    headacheFreeBut: {
        text: "READ OUR TESTIMONIALS",
        href: "#",
    },
    readMoreBut: {
        text: "READ MORE",
        href: "#",
    },
    freeQuoteBut: {
        text: "GET A FREE QUOTE NOW",
        href: "#",
    }
});