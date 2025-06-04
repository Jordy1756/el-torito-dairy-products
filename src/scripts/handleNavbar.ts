export const initNavbar = (): void => {
    const banner = document.querySelector("#banner") as HTMLElement;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;
    const nav = document.querySelector("#navbar") as HTMLElement;
    const menuBtn = nav.querySelector("#menu-btn") as HTMLButtonElement;
    const toggleLinks = nav.querySelectorAll("ul > li > a") as NodeListOf<HTMLAnchorElement>;
    const removeLinks = nav.querySelectorAll("div > a, a[href='/#contact-us']") as NodeListOf<HTMLAnchorElement>;
    const contactButton = nav.querySelector("aside > .secondary") as HTMLButtonElement;

    const setContactButton = (color: "var(--neutral-50)" | "var(--neutral-900)") => {
        contactButton.style.border = `1px solid ${color}`;
        contactButton.style.color = color;
    };

    const createScrollObserver = (): IntersectionObserver => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const handleNavbarScroll = (isIntersecting: boolean) => {
            const color = isIntersecting ? "var(--neutral-50)" : "var(--neutral-900)";
            nav.classList.toggle("scrolled", !isIntersecting);
            setContactButton(color);
        };

        return new IntersectionObserver(([entry]) => handleNavbarScroll(entry.isIntersecting), options);
    };

    const setupMobileMenu = (): void => {
        if (window.innerWidth > 768) return;

        const addToggleListener = (element: HTMLElement) =>
            element.addEventListener("click", () => nav.classList.toggle("open"));

        const addRemoveListener = (element: HTMLElement) =>
            element.addEventListener("click", () => nav.classList.remove("open"));

        addToggleListener(menuBtn);
        addToggleListener(overlay);

        toggleLinks.forEach(addToggleListener);
        removeLinks.forEach(addRemoveListener);
    };

    setupMobileMenu();

    if (!banner) return;

    createScrollObserver().observe(banner);
};
