import { el } from "../helper.js";
export const includeHTML = (location, selector) => {
  //유효성검사
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }
  // fetch('파일경로')
  fetch(location) //비동기통신: 순서가 안정해짐
    // .then((통신결과값) => {
    .then((response) => {
      //   console.log(response);
      return response.text(); //데이터를 텍스트화 시킴
    })
    .then((data) => {
      //   console.log(data);
      document.querySelector(selector).innerHTML = data;
    });
};

// header footer 인클루드 시키기
