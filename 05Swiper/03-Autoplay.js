import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slide1 = new Swiper(".swiper", {
  loop: true, // 슬라이드 순환
  autoplay: {
    // 자동 슬라이드
    delay: 2000, // 슬라이드 머무는 시간 1/1000초
  },
  speed: 200, // 슬라이드 넘김속도
});

const stopSlide = document.querySelector(".stop");
const playSlide = document.querySelector(".play");

stopSlide.addEventListener("click", () => {
  slide1.autoplay.stop();
});

playSlide.addEventListener("click", () => {
  slide1.autoplay.start();
});

const toggleSlide = document.querySelector(".toggle");
let isToggle = true;
toggleSlide.addEventListener("click", () => {
  if (isToggle) {
    slide1.autoplay.stop();
    toggleSlide.textContent = "재생";
  } else {
    slide1.autoplay.start();
    toggleSlide.textContent = "정지";
  }
  isToggle = !isToggle; //토글을 반전 시킴 이미 true가 됐기 때문에 false가 됨
});
