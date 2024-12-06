import { dialog } from "./ui/dialog.js";
import { list7Bind } from "./bind/list7Bind.js";
import { data } from "../data/list7Bind.js"; // 데이터는 따로 관리
import { include } from "./ui/include.js";
import { includeHTML } from "./ui/includeHTML.js";
import { movieSearch } from "./movieSearch.js";
import { select } from "./select.js";

// 팝업
dialog("popup1", true); //true, fals는 dim창
dialog("popup2");

// 리스트데이터바인딩
list7Bind(data);

// HTML 인클루드
// include();

// includeHTML(주소, 선택자);
includeHTML("/01Content/include/header.html", ".header");
includeHTML("/01Content/include/footer.html", ".footer");

// 영화검색결과
// movieSearch();

// select
select();
