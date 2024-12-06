export const el = (selector) => {
  if (!selector || typeof selector !== "string") {
    console.warn("선택자가 비어있거나, 문자데이터가 아닙니다."); //콘솔창에 경고문 출력
    return;
  }
  const element = document.querySelector(selector);
  if (!element) {
    console.warn("현재${selector}는 페이지에 존재하지 않습니다.");
    return;
  }
  //   console.log(element);
  return element;
};

export const els = (selector) => {
  if (!selector || typeof selector !== "string") {
    console.warn("선택자가 비어있거나, 문자데이터가 아닙니다."); //콘솔창에 경고문 출력
    return;
  }
  const element = document.querySelectorAll(selector);
  if (!element) {
    console.warn("현재${selector}는 페이지에 존재하지 않습니다.");
    return;
  }
  //   console.log(element);
  return element;
};
