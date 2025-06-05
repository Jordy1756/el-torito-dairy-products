import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initNavbar } from "@scripts/components/handleNavbar";
import { initContactForm } from "@scripts/components/handleContactForm";

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
    initContactForm();
};

document.addEventListener("DOMContentLoaded", () => initApp());
