(() => {
  if (window.innerWidth > 874) return;

  const popoverNavbar = document.querySelector("#nav-popover") as HTMLElement;
  const navbarLinks = popoverNavbar.querySelectorAll(".menu__container a") as NodeListOf<HTMLAnchorElement>;

  navbarLinks.forEach((link) => link.addEventListener("click", () => popoverNavbar.hidePopover()));
})();
