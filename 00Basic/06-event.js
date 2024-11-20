const message = document.querySelector(".message");
const click = document.querySelector(".click");
const enter = document.querySelector(".enter");
const leave = document.querySelector(".leave");
const inputText = document.querySelector(".input input");
const change = document.querySelector(".change select");
const submit = document.querySelector(".submit");
const submitID = document.querySelector(".submit .id");
const submitNickname = document.querySelector(".submit .nickname");
const target = document.querySelector(".target .parent");

const log = function (text) {
  const div = document.createElement("div");
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener("click", function () {
  log("click");
});

enter.addEventListener("mouseenter", function () {
  log("mouseenter");
});

leave.addEventListener("mouseleave", function () {
  log("mouseleave");
});

inputText.addEventListener("input", function (e) {
  log(e.target.value);
});

change.addEventListener("change", function (e) {
  log(e.target.value);
});

//이벤트 대상을 잡기 위해서 e라는 매개 변수를 줘야함

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = submitID.value;
  const nickname = submitNickname.value;

  if (id === "" || nickname === "") {
    log("아이디 또는 닉네임을 입력하세요.");
    return;
  }

  log("아이디:" + id + " / 닉네임:" + nickname);
});

document.querySelector(".link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("링크가 클릭되었습니다.");
});
target.addEventListener("click", function (e) {
  e.preventDefault();

  const isTarget = e.target.id;
  const isCurrentTarget = e.currentTarget.id;

  // log(isTarget);
  log(isCurrentTarget);
});
