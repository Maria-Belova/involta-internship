const swiper = new Swiper(".swiper-container", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 30,
  slideToClickedSlide: true,
  initialSlide: 0,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
