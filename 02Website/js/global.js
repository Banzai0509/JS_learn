import { boardFile } from "./ui/boardFile.js";
import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { topAlram } from "./ui/topAlram.js";
import { data } from "../data/topAlramData.js";
import { learnData } from "../data/learnData.js";
import { noticeData } from "../data/noticeData.js";
import { topAlramDel } from "./ui/topAlramDel.js";
import { learn } from "./ui/learn.js";
import { notice } from "./ui/notice.js";

//인클루드
includeHTML("/02Website/include/header.html", "header");
includeHTML("/02Website/include/footer.html", "footer").then(() => {
  //알람데이터바인딩
  topAlram(data);
  topAlramDel();
  learn(learnData);
  notice(noticeData);
  footerYear();
});

//프로미스: 비동기함수 (통신이 일어난 뒤에)
