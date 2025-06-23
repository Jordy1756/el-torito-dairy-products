import { initNavbar } from "@scripts/components/handleNavbar";
import { createSectionObserver } from "@utils/handleObservers";
import { initLenis } from "@utils/handleLenis";
import { initContactForm } from "@scripts/components/handleContactForm";
import { initToast } from "@scripts/components/handleToast";

const initObserverSections = () => {
    const sections = document.querySelectorAll("#about-us, #testimonies, #our-team") as NodeListOf<HTMLElement>;
    sections.forEach((section) => createSectionObserver(section.id).observe(section));
};

const initApp = () => {
    initLenis();
    const { showToast } = initToast();
    initNavbar();
    initObserverSections();
    initContactForm(showToast);
};

document.addEventListener("DOMContentLoaded", () => initApp());
