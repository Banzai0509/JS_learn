import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".slider1", {
  //   loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    //자동으로 넘어감 2000=2초
    delay: 2000,
  },
  speed: 1000, //넘어가는 속도
  slidesPerView: 3, //한번에 몇 개의 이미지를 보여줄 것인가를 결정
  centeredSlides: true,
  slideActiveClass: "active",
  slideNextClass: "next", // 내가 쓸 클래스 지정
  slidePrevClass: "prev", // 내가 쓸 클래스 지정
});

const swiper2 = new Swiper(".slider2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //slidesPerGroup: 2, 한번에 몇 개의 이미지를 이동할 것인가를 결정
  //centeredSlides: true, 절대 루프랑 같이 쓰면 안됨
  spaceBetween: 10,
});
