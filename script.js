// Initialize Swiper
const swiper = new Swiper('.heroSwiper', {

  // Slide effect — try 'cube' or 'flip' later for fun!
  effect: 'fade',

  // Loop forever
  loop: true,

  // Auto play every 4.5 seconds
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  // Smooth transition speed
  speed: 800,

  // Arrow navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Dots navigation
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});