import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  //   direction: "vertical", 세로라서 잘 쓰지 않아서 삭제
  loop: true,

  // css 클래스명이랑 맞춰야함
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
