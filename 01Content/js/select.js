import { el, els } from "./helper.js";

export const select = (element = ".select", activeClass = "active") => {
  //초기설정값
  const config = {
    selectName: ".select",
    className: "active",
  };

  const { className, selectName } = config;

  // 할일목록
  // 1. 선택하세요를 클릭하면 화살표 방향이 바뀐다.

  const handleSelect = (selector) => {
    const button = selector.children[0];
    // 1. 선택하세요를 클릭하면
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // 1-1 화살표 방향이 바뀐다.
      const parent = e.target.parentElement;
      //   console.log(parent);

      // 1-2 리스트가 펼쳐진다. toggle
      parent.classList.toggle(className);
    });
  };

  const handleSelectList = (selector) => {
    const buttons = selector.querySelectorAll("ul button");
    buttons.forEach((button) => {
      // 3. 리스트에 있는 버튼을 클릭하면 닫힌다.
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // 3-1 리스트가 닫힌다
        const parent = e.target.closest(selectName);
        parent.classList.remove(className);
        // 3-2 클릭한 버튼의 텍스트가 선택하세요 대신 써져야한다
        const isText = e.target.textContent;
        console.log(isText);
        parent.children[0].textContent = isText;
      });
    });
  };

  els(selectName).forEach((select) => {
    handleSelect(select);
    handleSelectList(select);
  });
};
