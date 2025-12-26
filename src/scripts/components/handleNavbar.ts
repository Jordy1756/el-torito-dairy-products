const initNavbar = () => {
    if (window.innerWidth > 864) return;

    const navbar = document.querySelector("#navbar") as HTMLElement;
    const menuBtn = navbar.querySelector("#menu-btn") as HTMLButtonElement;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;
    const navbarLinks = navbar.querySelectorAll("#navbar-menu-container a") as NodeListOf<HTMLAnchorElement>;

    const openNavbar = () => {
        navbar.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", "Cerrar menú de navegación");
    };

    const closeNavbar = () => {
        navbar.classList.remove("open");
        navbar.classList.add("closing");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menú de navegación");

        setTimeout(() => {
            navbar.classList.remove("closing");
        }, 300);
    };

    const toggleNavbar = () => (navbar.classList.contains("open") ? closeNavbar() : openNavbar());

    menuBtn.addEventListener("click", () => toggleNavbar());
    overlay.addEventListener("click", () => closeNavbar());
    navbarLinks.forEach((link) => link.addEventListener("click", () => closeNavbar()));
};

initNavbar();
