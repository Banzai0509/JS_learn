/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */

const item1 = document.querySelector(".yourname-list .item1");
//console.log(item1);
item1.style.border = "1px solid red";
const items = document.querySelectorAll(".yourname-list li");

//console.log(items.length); //개수확인
//console.log(items[0]); //개별아이템접근
//console.log(items); //노드리스트확인 : 유사배열

// items.forEach((개별아이템, 개별아이템index값) => {
//     console.log(개별아이템, 개별아이템index값);
// };)

items.forEach((item) => {
  //돔을 쓰기위해서는 forEach문을 써야 됨. querySelector랑 forEach는 항상 같이 씀
  item.style.border = "2px solid blue";
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */

const tabButtons = document.querySelectorAll(".tabs button");

// 클래스추가
// tabButtons.forEach((tabbutton) => {
//   tabbutton.addEventListener("click", () => {
//     console.log("클릭되었습니다.");
//     tabbutton.classList.add("active");
//   });
// });

//클래스제거
// tabButtons.forEach((tabButton) => {
//   tabButton.addEventListener("click", (e) => {
//     e.target.classList.remove("active");
//   });
// });

// 클래스토글

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */

// const isName = document.querySelector(".text-list .name");
// console.log(isName.textContent);
// isName.textContent = "이름을 넣으면";

const chageName = () => {
  const isButton = document.querySelector(".text-list button");
  const isName = document.querySelector(".text-list .name");

  isButton.addEventListener("click", () => {
    const name = isName.textContent;
    console.log(name);
    isButton.textContent = `${name}님이 수강신청을 하셨습니다.`;
  });
};
//chageName();

const CourseRegist = () => {
  const buttons = document.querySelectorAll(".text-list button");
  const names = document.querySelectorAll(".text-list .name");

  buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      //console.log(button, buttonIndex);
      names.forEach((name, nameIndex) => {
        //console.log(name, nameIndex);
        if (buttonIndex === nameIndex) {
          // console.log(name);
          isName = name.textContent;
          //console.log(isName);
          button.textContent = `${isName}님 신청완료`;
        }
      });
    });
  });
};
CourseRegist(); //함수실행

/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */

const disabledRadio = (selector) => {
  //const raido = document.querySelector(".ratings input");
  //raido.setAttribute('속성명','속성값')
  //raido.setAttribute("disabled", true);

  const radios = document.querySelectorAll(".ratings input");
  const disabledButton = document.querySelector(selector);

  let isdisabled = true;

  //모두 비활성화, 활성화 토글

  const disabled = () => {
    radios.forEach((radio) => {
      if (isdisabled) {
        disabledButton.textContent = "모두 활성";
        radio.setAttribute("disabled", true);
      } else {
        disabledButton.textContent = "모두 비활성";
        radio.removeAttribute("disabled"); //html에는 true,false가 없어서 false는 안됨
      }
    });
    isdisabled = !isdisabled; //!반대연산자
  };
  disabledButton.addEventListener("click", disabled);
};
disabledRadio(".btn-disabled");

// 패스워드 보기 눈 아이콘 켜기 안켜기

const passwordView = () => {
  const button = document.querySelector(".password button");
  const input = document.querySelector(".password input");

  //   button.addEventListener("click", () => {
  //     button.classList.add("active");
  //     input.setAttribute("type", "text");
  //   });

  // 함수바인드 (함수를 묶음)
  const bind = () => {
    addClass();
    changeType();
  };

  //   클래스추가
  const addClass = () => {
    button.classList.toggle("active");
  };
  //   input type수정
  const changeType = () => {
    const isType = input.getAttribute("type");
    console.log(isType);
    if (isType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };

  //   이벤트 실행
  button.addEventListener("click", bind);
};
passwordView();

// 왼쪽 상단 이름 바꾸기
// 1. 이름변경을 누르면 비활성 > 활성
// 2. 한번 더 이름변경을 누르면 input > 비활성
// 2-1. h1의 텍스트가 input의 value값을 h1의 내용으로 변경

const readonlyName = () => {
  const button = document.querySelector(".name button");
  const input = document.querySelector(".name input");
  const h1 = document.querySelector(".header h1 strong");

  button.addEventListener("click", () => {
    const isReadonly = input.hasAttribute("readonly");
    if (isReadonly) {
      input.removeAttribute("readonly");
    } else {
      const isValue = input.value;
      h1.textContent = isValue;
      console.log(isValue);

      input.setAttribute("readonly", true);
    }
    console.log(isReadonly);
    //input.removeAttribute("readonly");
  });
};
readonlyName();

// 오른쪽 상단 아이콘 바꾸기

const psaChange = () => {
  const img = document.querySelector(".avatar"); //제어 할 대상
  const changePsa = document.querySelector(".psaChange"); // 기능을 할 버튼

  changePsa.addEventListener("click", () => {
    img.setAttribute("src", "./images/001.jpg");
  });
};
psaChange();

// const imageAlt = () => {
//   const image = document.querySelector(".avatar");
//   const button = document.querySelector(".btn-alt");

//   button.addEventListener("click", () => {
//     const isAlt = image.hasAttribute("alt");
//     console.log(isAlt);
//     if (!isAlt) {
//       image.setAttribute("alt", "프로필");
//     }
//   });
// };
// imageAlt();

// const isValue = document.querySelector(".ratings input").value;
// console.log(isValue);

// 선택한 점수 확인

const checkScore = () => {
  const button = document.querySelector(".btn-score");
  const radioss = document.querySelectorAll(".ratings input");

  button.addEventListener("click", () => {
    //console.log(radioss[0].checked);

    let isChecked = false;

    radioss.forEach((radio) => {
      if (radio.checked) {
        const isValue = radio.value;
        console.log(`선택된 점수는 ${isValue}입니다.`);
        isChecked = true;
      }
    });

    // if (!isChecked) {
    //   console.log("점수를 선택해주세요.");
    // }

    !isChecked && console.log("점수를 선택해주세요."); //if한개만 썼을 때 참일 경우에만 실행됨
  });
};
checkScore();

//첨부파일제어
const addFile = () => {
  const file = document.querySelector(".file");
  const fileInfo = document.querySelector(".file-info");
  file.addEventListener("change", () => {
    //console.log(file.files[0].name);
    const fileName = file.files[0].name;
    const fileSize = file.files[0].size / 1024;
    console.log(fileSize);

    fileInfo.textContent = `파일이름 : ${fileName} / 파일크기 : ${fileSize.toFixed(2)}kb`;
  });
  // toFixed 소숫점 2자리까지만 보여줌
};
addFile();

//팝업제어 열고 닫고
const dialog = () => {
  const openButton = document.querySelector(".header button");
  const closeButton = document.querySelector(".dialog .close");
  const dialog = document.querySelector(".dialog");

  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
};

dialog();

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

const strong = document.querySelector(".css .item1 strong");
const item3 = document.querySelector(".css .item3");
// strong.style.CSS속성 = "값"
// strong.style.fontSize = "25px";
// strong.style.color = "orange";
strong.style.cssText = `
    font-size:10px;
    color:orange;
    text-decoration:underline;
`;

item3.style.setProperty("--primary", "green");
item3.style.setProperty("--primaryLight", "violet");

const item4 = document.querySelector(".css .item4");
const isStyle = getComputedStyle(item4).display;
console.log(isStyle);

/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */

const siblings = () => {
  const item1 = document.querySelector(".routine-list .item1");
  const item2 = document.querySelector(".routine-list .item2");

  item1.addEventListener("click", () => {
    const next = item1.nextElementSibling;
    console.log(next);
    next.classList.toggle("active");
  });

  item2.addEventListener("click", () => {
    const prev = item2.previousElementSibling;
    console.log(prev);
    prev.classList.toggle("active");
  });
};
// siblings();

const toggleDays = () => {
  const buttons = document.querySelectorAll(".routine-list > li > button");
  //   button.addEventListener("click", () => {
  //     const parent = button.parentElement;
  //     console.log(parent);
  //     parent.classList.toggle("active");
  //   });

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = e.currentTarget.parentElement;
      const children = e.currentTarget.children;
      console.log(children); //유사배열로 나타남. html리스트로. n번째로 탐색

      parent.classList.toggle("active");

      if (children[1].hasAttribute("style")) {
        children[1].removeAttribute("style");
      } else {
        children[1].style.color = "yellow";
      }
    });
  });
};
toggleDays();

//closest : 주어진 CSS 선택자와 일치하는 가장 가까운(closest) 상위 조상 요소를 찾아서 반환하는데 요소 자신도 포함.
// https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-closest-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EB%B2%95/

const toggleDepth = () => {
  const buttons = document.querySelectorAll(".routine-list button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // console.log(e.currentTarget);
      const depthButton = e.currentTarget;
      if (depthButton.closest("div")) {
        depthButton.closest("li").style.border = "5px solid red";
      }
    });
  });
};
toggleDepth();

const checkDepth = () => {
  const items = document.querySelectorAll(".routine-list > li");

  items.forEach((item) => {
    const depth = item.querySelector(".detail-list");
    console.log(item.contains(depth));
    if (!item.contains(depth)) {
      const button = item.querySelector("button");
      button.setAttribute("role", "link");
      button.addEventListener("click", () => {
        window.location.href = "#page";
      });
    }
  });
};
checkDepth();

/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */

// insertAdjacentHTML() : 지정된 요소의 인접한(Adjacent) 특정 위치에 HTML 코드를 문자열로 삽입(insert)하여 새로운 DOM 요소를 생성합니다.
// createElement는 한번밖에 못 씀. 일회용
const insertDOM = () => {
  const ul = document.querySelector(".routine-list");

  // ul.insertAdjacentHTML(위치, HTML코드)
  ul.insertAdjacentHTML("beforebegin", `<h3>제목입니다</h3> <span>서브텍스트입니다</span>`);
  ul.insertAdjacentHTML("afterend", "<h3>다음 형제로 삽입합니다.</h3>");

  const li = document.createElement("li");
  li.textContent = "첫번째 자식입니다.";
  li.classList.add("fist");
  ul.prepend(li);

  const liLast = document.createElement("li");
  liLast.textContent = "마지막 자식입니다.";
  liLast.classList.add("last");
  ul.append(liLast);

  // ul.remove(); ul삭제 위에서 코드로 만든건 지워지지 않음

  // innerHTML : HTML 요소의 내부 HTML 콘텐츠를 가져오거나 설정합니다.
  // 아예 지워지고 다시 생성
  // ul.innerHTML = "<li>새롭게 생성된 DOM</li>";
  // ul.innerHTML = `
  // <li>새롭게 생성된 DOM1</li>
  // <li>새롭게 생성된 DOM2</li>
  // <li>새롭게 생성된 DOM3</li>
  // <li>새롭게 생성된 DOM4</li>
  // `;
};
insertDOM();

// html의 텍스트 제어 기능이 돔
