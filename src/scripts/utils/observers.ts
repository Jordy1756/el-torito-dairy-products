export const createBannerObserver = (nav: HTMLElement): IntersectionObserver => {
    const options = {
        root: null,
        rootMargin: "-1px",
        threshold: 0,
    };

    return new IntersectionObserver(([entry]) => nav.classList.toggle("out__banner", !entry.isIntersecting), options);
};

export const createSectionObserver = (sectionId: string): IntersectionObserver => {
    const options = {
        root: null,
        rootMargin: "-1px",
        threshold: 0.35,
    };

    return new IntersectionObserver(([entry]) => {
        const navigationItem = document.querySelector(`li[data-link="${sectionId}"] > a`) as HTMLAnchorElement;;
        navigationItem.classList.toggle("active", entry.isIntersecting);
    }, options);
};
