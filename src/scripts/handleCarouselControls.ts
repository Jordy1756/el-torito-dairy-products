document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 480) return;

    let currentIndex = 0;

    const carouselControlSpans = document.querySelectorAll("#carousel-controls span") as NodeListOf<HTMLSpanElement>;
    const changeSlide = (index: number) => carouselControlSpans[index].classList.toggle("active");

    const main = () => {
        changeSlide(currentIndex);
        currentIndex = (currentIndex + 1) % carouselControlSpans.length;
        changeSlide(currentIndex);
    };

    changeSlide(currentIndex);

    setInterval(main, 5000);
});
