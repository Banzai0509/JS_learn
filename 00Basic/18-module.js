// https://rebehayan.notion.site/Module-d43403cf4df44e4fbde72f513e0979bb
// 파일을 따로 따로 관리하는 것이 모듈.
// import {실행할 함수명 ctrl + space 여러개는 ,로 구분} from "./18-user.js"
// as: user라는 함수 대신에 userA라는 함수를 쓰겠음
// 파일명 = 함수명 무조건 같아야함
// import { user as userA, userInfo } from "./18-user.js";

// default export는 {} 없이 걍 씀
// import company, { address } from "./18-company.js";

import { address, user, userInfo } from "./18-middle.js";
// 함수 실행은 imprt한 파일에서 실행시킴
user();
userInfo();
address();
