import { el } from "../helper.js";
import { data } from "../../data/list7Bind.js"; //데이터는 따로 관리하기 위해

export const list7Bind = (arry) => {
  const element = document.querySelector(".shop-list");
  if (!element) {
    return;
  }
  const liItems = arry.map((item) => {
    const { title, benefit, date, logo, saveDate, target } = item;
    // console.log(item);
    return /* html */ `
        <li>
          <span class="brand color${item.id}"><img src=${logo} alt="" /></span>
          <p class="title">${title}</p>
          <ul>
            <li>기간<span>${item.date || "-"}</span></li> <!-- 데이터가 없을 경우 "-" 로 처리-->
            <li>적립일<span>${saveDate}</span></li>
            <li>대상<span>${target}</span></li>
            
             ${benefit ? `<li>혜택<span class="blue">${benefit}</span></li>` : ""}
             <!-- 베네핏이 있을 경우도 있고 없을 경우가 있어서 이걸 대비함 안써주면 undefine이라고 나옴 -->
          </ul>
        </li>
    `; //배열에 새로운 값을 담기 위해
  });
  //   console.log(liItems);el
  el(".shop-list").innerHTML = liItems.join("");
};
