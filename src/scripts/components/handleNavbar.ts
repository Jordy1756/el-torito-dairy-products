export const initNavbar = () => {
    const nav = document.querySelector("#navbar") as HTMLElement;

    if (window.innerWidth > 864) return { nav };

    const menuBtn = nav.querySelector("#menu-btn") as HTMLButtonElement;
    const navbarLinks = nav.querySelectorAll("ul > li > a, div > a") as NodeListOf<HTMLAnchorElement>;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;

    const toggleAriaExpanded = () => {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!isExpanded));
        menuBtn.setAttribute("aria-label", isExpanded ? "Abrir menú de navegación" : "Cerrar menú de navegación");
    };

    const addToggleListener = (element: HTMLElement) => {
        element.addEventListener("click", () => {
            nav.classList.toggle("open");
            toggleAriaExpanded();
        });
    };

    const addRemoveListener = (element: HTMLElement) => {
        element.addEventListener("click", () => {
            if (!nav.classList.contains("open")) return;

            nav.classList.remove("open");
            toggleAriaExpanded();
        });
    };

    addToggleListener(menuBtn);
    addRemoveListener(overlay);
    navbarLinks.forEach(addRemoveListener);

    return { nav };
};
