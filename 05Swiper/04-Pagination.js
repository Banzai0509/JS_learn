import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination", //이름 바꿀 수 있음
    bulletClass: "item",
    bulletElement: "button",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: (index, className) => {
      return /* html */ `
            <button class="item ico${index + 1}">${index + 1}</button> <!-- 버튼에 클래스 추가-->
        `;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
