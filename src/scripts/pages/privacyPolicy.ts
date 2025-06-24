import { initNavbar } from "@scripts/components/handleNavbar";
import { initLenis } from "@utils/handleLenis";

const initApp = () => {
    initLenis();
    initNavbar();
};

document.addEventListener("DOMContentLoaded", () => initApp());
