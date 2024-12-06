import { el } from "../helper.js";
import { noticeData } from "../../data/noticeData.js";

export const notice = (arryNotice) => {
  const noticeEl = document.querySelector(".tbody-tr");
  if (!noticeEl) {
    return;
  }

  // 배열이 비었거나 null이나 undefined일 경우 처리. map안에 넣으면 작동 안됨
  if (!arryNotice || arryNotice.length === 0) {
    noticeEl.innerHTML = /* html */ `
      <tr>
        <td colspan="5" style="text-align: center">
          데이터가 없습니다.
        </td>
      </tr>
    `;
    return;
  }

  const liitemsNotice = arryNotice.map((itemNotice) => {
    const { no, titleNotice, writer, dateNotice, click } = itemNotice;
    return /* html */ `
        <tr>
            <td>${no}</td>
            <td><a href="">${titleNotice}</a></td>
            <td>${writer}</td>
            <td>${dateNotice}</td>
            <td>${click}</td>
        </tr>
    `;
  });

  el(".tbody-tr").innerHTML = liitemsNotice.join("");
};
