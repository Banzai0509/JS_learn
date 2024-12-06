import { el } from "../helper.js";

export const topAlramDel = () => {
  const alramDelBtn = document.querySelectorAll(".alram__del");
  const profileAlram = document.querySelector(".profile__alram");
  const alramLength = document.querySelectorAll(".alram li");
  const alramZero = document.querySelector(".alram");

  if (!alramDelBtn || !profileAlram || !alramLength) {
    //부정연산자를 넣어줘야 아래 코드가 실행됨. 아니면 return
    return;
  }

  let length = alramLength.length;
  profileAlram.textContent = length; //처음 개수 계산

  alramDelBtn.forEach((alram) => {
    alram.addEventListener("click", (e) => {
      const delBtn = e.currentTarget;
      delBtn.closest("li").remove(); // closest: del버튼과 제일 가까운 li를 찾음

      length = length - 1;
      profileAlram.textContent = length;

      if (length === 0) {
        alramZero.innerHTML =
          "<div style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; color: #aaa; text-align:center; font-size: 14ax;'>확인 가능한 알람이 없습니다.</div>";
      }
    });
  });
};
