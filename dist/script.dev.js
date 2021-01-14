"use strict";

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination

  /* spaceBetween: 30, */
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
  /*   // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  }, */

});