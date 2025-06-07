import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const initLenis = () => {
    const lenis = new Lenis();

    const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
};
