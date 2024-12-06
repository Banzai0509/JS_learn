import { el } from "../helper.js";
import { learnData } from "../../data/learnData.js";

export const learn = (arryLearn) => {
  const learnEl = document.querySelector(".list-type1");

  if (!learnEl) {
    return;
  }

  const liItemsLearn = arryLearn.map((itemLearn) => {
    const { link, backImg, subject, coin, title, tag, type, schedule, gigan } = itemLearn;

    let coinGubun = parseInt(`${coin}`).toLocaleString();

    return /* html */ `
        <li>
          <a href=${link} target="_blank">
            <div class="thumbnail">
              <img src=${backImg} alt="" />
            </div>
            <div class="badges">
              <span class="badge subjectBg">${subject}</span>
              ${coinGubun ? `<span class="badge coin">${coinGubun}</span>` : ""}
            </div>
            <strong class="list-type1__title">${title}</strong>
            <div class="hash">
              <span>${tag}</span>
            </div>
            <ul class="list-type2">
              <li>
                <span>형 태</span>
                <div>${type}</div>
              </li>
              <li>
                <span>일 정</span>
                <div>${schedule}</div>
              </li>
            </ul>
            <div class="list-type1__date">신청기간 : ${gigan}</div>
          </a>
        </li>
    `;
  });

  el(".list-type1").innerHTML = liItemsLearn.join("");

  const subjectColor = document.querySelectorAll(".subjectBg");

  subjectColor.forEach((backColor) => {
    if (backColor.textContent === "경영") {
      backColor.classList.add("orange");
    } else if (backColor.textContent === "뉴스") {
      backColor.classList.add("purple");
    }
  });
};
