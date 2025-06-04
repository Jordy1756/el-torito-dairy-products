import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initNavbar } from "@scripts/handleNavbar";
import { initCarouselControls } from "@scripts/handleCarouselControls";
import { initContactForm } from "@scripts/handleContactForm";

const initLenis = () => {
    const lenis = new Lenis();

    const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
};

const initApp = () => {
    initLenis();
    initNavbar();
    initCarouselControls();
    initContactForm();
};

document.addEventListener("DOMContentLoaded", () => initApp());
