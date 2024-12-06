import { el, els } from "../helper.js";
export const dialog = (selector, modal = false) => {
  //다른 페이지에서는 안쓰는데 유효성검사(에러 방지)를 위해서 이렇게 써야함
  const isDialog = document.querySelector(`[data-dialog=${selector}]`);
  const isOpen = document.querySelector(`[data-dialog-open=${selector}]`);
  const isClose = document.querySelector(`[data-dialog-close=${selector}]`);

  if (!isDialog || !isOpen || !isClose) {
    //dialog가 없거나 open이 없거나 close가 없다면 리턴
    return;
  }

  const dialog = `[data-dialog=${selector}]`;
  const open = `[data-dialog-open=${selector}]`;
  const close = `[data-dialog-close=${selector}]`;

  // 기능이랑 이벤트 별로 관리함

  // 팝업열기
  const handleOpen = () => {
    modal ? el(dialog).showModal() : el(dialog).show();

    // if (modal) {
    //   el(dialog).showModal();
    // } else {
    //   el(dialog).show();
    // }
  };
  // 팝업닫기
  const handleClose = () => {
    el(dialog).close();
  };

  // 이벤트
  el(open).addEventListener("click", handleOpen);
  el(close).addEventListener("click", handleClose);
};
