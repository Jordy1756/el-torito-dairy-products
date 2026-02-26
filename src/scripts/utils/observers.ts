export const createHeroObserver = (header: HTMLElement): IntersectionObserver => {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "-1px",
    threshold: 0,
  };

  return new IntersectionObserver(([entry]) => header.classList.toggle("outside-hero", !entry.isIntersecting), options);
};

export const createSectionObserver = (sectionId: string): IntersectionObserver => {
  const viewportHeight = window.innerHeight;
  const topMargin = Math.floor(viewportHeight * 0.3);

  const options = {
    root: null,
    rootMargin: `-${topMargin}px 0px -${topMargin}px 0px`,
    threshold: 0.1,
  };

  return new IntersectionObserver(([entry]) => {
    const navigationItems = document.querySelectorAll(
      `.header nav li[data-link="${sectionId}"] > a`,
    ) as NodeListOf<HTMLAnchorElement>;

    console.log(navigationItems)

    navigationItems.forEach((item) => item.classList.toggle("active", entry.isIntersecting));
  }, options);
};
