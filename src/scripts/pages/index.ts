import { initNavbar } from "@scripts/components/handleNavbar";
import { initContactForm } from "@scripts/components/handleContactForm";
import { createBannerObserver } from "@utils/handleObservers";
import { initLenis } from "@utils/handleLenis";
import { initToast } from "@scripts/components/handleToast";

const initApp = () => {
    const banner = document.querySelector("#banner") as HTMLElement;

    initLenis();
    const { showToast } = initToast();
    const { nav } = initNavbar();
    createBannerObserver(nav).observe(banner);
    initContactForm(showToast);
};

document.addEventListener("DOMContentLoaded", () => initApp());
