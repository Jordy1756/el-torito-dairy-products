export const initNavbar = () => {
    const nav = document.querySelector("#navbar") as HTMLElement;
    const menuBtn = nav.querySelector("#menu-btn") as HTMLButtonElement;
    const navbarLinks = nav.querySelectorAll("ul > li > a, div > a") as NodeListOf<HTMLAnchorElement>;
    const contactButton = nav.querySelector(".navbar__actions > .secondary") as HTMLButtonElement;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;

    const setContactButton = (color: "var(--neutral-50)" | "var(--neutral-900)") => {
        contactButton.style.border = `1px solid ${color}`;
        contactButton.style.color = color;
    };

    const setupMobileMenu = (): void => {
        if (window.innerWidth > 768) return;

        const addToggleListener = (element: HTMLElement) =>
            element.addEventListener("click", () => {
                nav.classList.toggle("open");
                if (nav.classList.contains("open")) setContactButton("var(--neutral-900)");
                else setContactButton(nav.classList.contains("scrolled") ? "var(--neutral-900)" : "var(--neutral-50)");
            });

        const addRemoveListener = (element: HTMLElement) =>
            element.addEventListener("click", () => nav.classList.contains("open") && nav.classList.remove("open"));

        addToggleListener(menuBtn);
        addRemoveListener(overlay);

        navbarLinks.forEach(addRemoveListener);
    };

    setupMobileMenu();

    return { nav, setContactButton };
};
