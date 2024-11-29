/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");
  const number1 = document.querySelector(".sum .number1");
  const number2 = document.querySelector(".sum .number2");

  const result = () => {
    const num1 = Number(number1.value); //무조건 입력은 문자로 받아서 Number로 숫자로 바껴야함
    const num2 = Number(number2.value);
    // console.log();
    return num1 + num2;
  };

  button.addEventListener("click", (e) => {
    e.preventDefault(); // 폼 새로고침 방지
    const sum = result(); // 리턴 값은 변수로 받음. 여기있는 sum 변수는 클릭이벤트 안에서만 씀
    resultValue.textContent = sum;
  });
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
      output.textContent = "메시지를 입력하세요.";
      return; // 조건이 맞으면 멈춤
    }
    output.textContent = input.value;
  });
};
message();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                    호이스팅 (기명함수의 경우)                                 */
/* -------------------------------------------------------------------------- */

// 함수를 한번에 몰아서 실행시킴
const init = () => {
  hellow();
};
const hellow = function () {
  console.log("text");
};
init();

// hellow();

// function hellow() {
//   console.log("text");
// }

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(message) {
  const dialog = document.querySelector("dialog");
  dialog.innerHTML = message;
  // setTimeout(함수, 딜레이시간)
  const time = setTimeout(() => {
    dialog.close();
    console.log("팝업닫음");
  }, 2000);
  return time;
}

// 알림 호출
const isTime = showNotification("알람입니다");
let seconds = 0;

/* ------------------------------- setInterval ------------------------------ */
const updateTimer = () => {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
};

// 1초마다 타이머 업데이트
const stopTime = setInterval(updateTimer, 1000);

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  clearTimeout(isTime);
});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(stopTime);
});
