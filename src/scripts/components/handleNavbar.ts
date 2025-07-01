export const initNavbar = () => {
    const nav = document.querySelector("#navbar") as HTMLElement;
    const menuBtn = nav.querySelector("#menu-btn") as HTMLButtonElement;
    const navbarLinks = nav.querySelectorAll("ul > li > a, div > a") as NodeListOf<HTMLAnchorElement>;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;

    const setupMobileMenu = (): void => {
        if (window.innerWidth > 864) return;

        const addToggleListener = (element: HTMLElement) =>
            element.addEventListener("click", () => nav.classList.toggle("open"));

        const addRemoveListener = (element: HTMLElement) =>
            element.addEventListener("click", () => nav.classList.contains("open") && nav.classList.remove("open"));

        addToggleListener(menuBtn);
        addRemoveListener(overlay);

        navbarLinks.forEach(addRemoveListener);
    };

    setupMobileMenu();

    return { nav };
};
