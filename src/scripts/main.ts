import Lenis from "lenis";
import "lenis/dist/lenis.css";

const initLenis = () => {
    const lenis = new Lenis();

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};

const initApp = () => {
    initLenis();
};

initApp();
