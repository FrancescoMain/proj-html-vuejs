import { reactive } from 'vue'
export const store = reactive({

    // img
    logo: {
        path: "../../public/img/avada-movers-logo.png",
        alt: "Avada: Movers"
    },



    navbarLinks: [
        {
            id: 0,
            title: "Home",
            href: "#",
        },
        {
            id: 1,
            title: "Rates",
            href: "#",
        },
        {
            id: 2,
            title: "Testimonials",
            href: "#",
        },
        {
            id: 3,
            title: "FAQ",
            href: "#",
        },
        {
            id: 4,
            title: "Blog",
            href: "#",
        },
        {
            id: 5,
            title: "Contact",
            href: "#",
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


    navBut: {
        text: "FREE QUOTE",
        href: "#",
    }
});