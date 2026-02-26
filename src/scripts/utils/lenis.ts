import Lenis from "lenis";
import "lenis/dist/lenis.css";

(() => {
  const lenis = new Lenis();

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
})();
