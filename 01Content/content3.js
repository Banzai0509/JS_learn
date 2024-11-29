const super01 = {
  colorClass01: "green",
  name01: "농민마트",
  place01: "mart",
  link01: "배달 중인 상품 바로 보기",
  colorClass02: "blue",
  name02: "GS25",
  place02: "gs25",
  link02: "픽업 대기 중인 상품 바로 보기",
  colorClass03: "yellow",
  name03: "와인25+",
  place03: "wine",
  link03: "수락 대기 중인 상품 바로 보기",
};

const { colorClass01, name01, place01, link01, colorClass02, name02, place02, link02, colorClass03, name03, place03, link03 } = super01;

const superList = () => {
  const aLink = document.querySelector(".first");
  const aLink02 = document.querySelector(".second");
  const aLink03 = document.querySelector(".third");

  aLink.innerHTML = `
    <span class="badge ${colorClass01}">${name01}</span>
    <div class="text ${place01}">${link01}</div>
  `;
  aLink02.innerHTML = `
    <span class="badge ${colorClass02}">${name02}</span>
    <div class="text ${place02}">${link02}</div>
  `;
  aLink03.innerHTML = `
    <span class="badge ${colorClass03}">${name03}</span>
    <div class="text ${place03}">${link03}</div>
  `;
};
superList();

// const baedal = [
//   { badge: "우동마트", text: "배달 중인 상품 바로 보기" },
//   { badge: "GS25", text: "픽업 중인 상품 바로 보기" },
//   { badge: "와인25+", text: "수락 중인 상품 바로 보기" },
// ];

// const { badge, text } = baedal;
// console.log(badge, text);

// const baedalList = () => {
//   const aLink = document.querySelectorAll(".notice");

//   aLink.forEach((a) => {
//     console.log(a);

//     a.innerHTML = `
//         <a href="">
//           <span class="badge green">${badge}</span>
//           <div class="text mart">${text}</div>
//         </a>
//       `;
//   });
// };

// baedalList();
