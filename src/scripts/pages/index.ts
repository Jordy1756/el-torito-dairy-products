import { initNavbar } from "@scripts/components/handleNavbar";
import { initCarouselControls } from "@scripts/components/handleCarouselControls";
import { initContactForm } from "@scripts/components/handleContactForm";
import { createBannerObserver } from "@utils/handleObservers";
import { initLenis } from "@utils/handleLenis";

const initApp = () => {
    const banner = document.querySelector("#banner") as HTMLElement;

    initLenis();
    const { nav, setContactButton } = initNavbar();
    createBannerObserver(nav, setContactButton).observe(banner);
    initCarouselControls();
    initContactForm();
};

document.addEventListener("DOMContentLoaded", () => initApp());
