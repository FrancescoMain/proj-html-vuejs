import { reactive } from 'vue'
export const store = reactive({
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
    ]
});