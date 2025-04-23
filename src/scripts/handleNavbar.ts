import type { NavbarElements } from "@definitions/navbarTypes";

const createScrollObserver = (nav: HTMLElement): IntersectionObserver => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    return new IntersectionObserver((entries) => {
        entries.forEach((entry) =>
            entry.isIntersecting ? nav.classList.remove("scrolled") : nav.classList.add("scrolled")
        );
    }, options);
};

const setupMobileMenu = (elements: NavbarElements): void => {
    if (window.innerWidth > 768) return;

    const { nav, menuBtn, overlay, toggleLinks, removeLinks } = elements;

    const addToggleListener = (element: HTMLElement) =>
        element.addEventListener("click", () => nav.classList.toggle("open"));

    const addRemoveListener = (element: HTMLElement) =>
        element.addEventListener("click", () => nav.classList.remove("open"));

    addToggleListener(menuBtn);
    addToggleListener(overlay);
    toggleLinks.forEach(addToggleListener);
    removeLinks.forEach(addRemoveListener);
};

const getNavbarElements = (): NavbarElements => {
    const banner = document.querySelector("#banner") as HTMLElement;
    const nav = document.querySelector("#navbar") as HTMLElement;

    return {
        banner,
        nav,
        menuBtn: nav.querySelector("#menu-btn") as HTMLButtonElement,
        overlay: document.querySelector("#overlay") as HTMLDivElement,
        toggleLinks: nav.querySelectorAll("ul > li > a") as NodeListOf<HTMLAnchorElement>,
        removeLinks: nav.querySelectorAll("div > a, a[href='/#contact-us']") as NodeListOf<HTMLAnchorElement>,
    };
};

const initNavbar = (): void => {
    const elements = getNavbarElements();

    if (elements.banner) createScrollObserver(elements.nav).observe(elements.banner);

    setupMobileMenu(elements);
};

document.addEventListener("DOMContentLoaded", initNavbar);
