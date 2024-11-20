const boardTr = document.querySelectorAll("table tbody tr");
const boardCount = document.querySelector(".board-count");
//console.log(boardTr.length);

const noticeCount = boardCount.textContent;
//console.log(noticeCount);

const num = boardTr.length;
//console.log(num);

boardCount.textContent = `총 ${num} 건`;

//testttttttttttttttttt
