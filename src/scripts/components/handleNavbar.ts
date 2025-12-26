const initNavbar = () => {
    if (window.innerWidth > 864) return;

    const navbar = document.querySelector("#navbar") as HTMLElement;
    const menuBtn = navbar.querySelector("#menu-btn") as HTMLButtonElement;
    const overlay = document.querySelector("#overlay") as HTMLDivElement;
    const navbarLinks = navbar.querySelectorAll("#navbar-menu-container a") as NodeListOf<HTMLAnchorElement>;

    const openNavbar = () => {
        const navbarCloseButtonText = "Cerrar menú de navegación";
        navbar.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("aria-label", navbarCloseButtonText);
        menuBtn.setAttribute("title", navbarCloseButtonText);
    };

    const closeNavbar = () => {
        const navbarOpenButtonText = "Abrir menú de navegación";
        navbar.classList.remove("open");
        navbar.classList.add("closing");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", navbarOpenButtonText);
        menuBtn.setAttribute("title", navbarOpenButtonText);

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
