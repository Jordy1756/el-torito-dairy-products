import { initNavbar } from "@scripts/components/handleNavbar";
import { createSectionObserver } from "@utils/handleObservers";
import { initLenis } from "@utils/handleLenis";

const initObserverSections = () => {
    const sections = document.querySelectorAll("#about-us, #testimonies, #our-team") as NodeListOf<HTMLElement>;
    sections.forEach((section) => createSectionObserver(section.id).observe(section));
};

const initApp = () => {
    initLenis();
    initNavbar();
    initObserverSections();
    // initContactForm();
};

document.addEventListener("DOMContentLoaded", () => initApp());
