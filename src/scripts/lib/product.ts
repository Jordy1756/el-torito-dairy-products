(() => {
  const carousel = document.querySelector("#product-carousel") as HTMLElement;
  const carouselButtons = carousel.querySelectorAll(".carousel__button") as NodeListOf<HTMLButtonElement>;
  const carouselItems = carousel.querySelectorAll(".product__card") as NodeListOf<HTMLElement>;

  let currentIndex = 0;
  let autoScrollInterval: NodeJS.Timeout;
  const itemWidth = carouselItems[0].clientWidth;

  const changeProduct = (index: number) => {
    carouselButtons[currentIndex]?.classList.remove("active");
    carouselButtons[index]?.classList.add("active");

    currentIndex = index;
    carousel.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () =>
    setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselButtons.length;
      changeProduct(nextIndex);
    }, 5000);

  autoScrollInterval = startAutoScroll();

  carouselButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      changeProduct(index);
      clearInterval(autoScrollInterval);
      autoScrollInterval = startAutoScroll();
    });
  });
})();
