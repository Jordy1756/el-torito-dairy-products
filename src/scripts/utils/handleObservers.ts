export const createBannerObserver = (
    nav: HTMLElement,
    setContactButton: (color: "var(--neutral-50)" | "var(--neutral-900)") => void
): IntersectionObserver => {
    const options = {
        root: null,
        rootMargin: "-1px",
        threshold: 0,
    };

    const handleNavbarScroll = (isIntersecting: boolean) => {
        const color = isIntersecting ? "var(--neutral-50)" : "var(--neutral-900)";
        nav.classList.toggle("scrolled", !isIntersecting);
        setContactButton(color);
    };

    return new IntersectionObserver(([entry]) => handleNavbarScroll(entry.isIntersecting), options);
};

export const createSectionObserver = (sectionId: string): IntersectionObserver => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.35,
    };

    return new IntersectionObserver(([entry]) => {
        const navigationItem = document.querySelector(`li[data-link="${sectionId}"]`) as HTMLAnchorElement;
        navigationItem.classList.toggle("active", entry.isIntersecting);
    }, options);
};
