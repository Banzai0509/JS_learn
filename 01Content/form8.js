// 전체동의 상태에 따라서 밑에 체크박스의 상태도 바뀜
// 전체동의 체크가 됐으면 true, 전체동의 체크 안됐으면 false
const checkAll = () => {
  const All = document.querySelector("#chk3_1");
  const checkEls = document.querySelectorAll(".check-wrap input");

  //   All.addEventListener("click", () => {
  //     checkEls.forEach((checkEl) => {
  //       console.log(checkEl.checked);

  //       if (checkEl.checked) {
  //         checkEl.checked = false;
  //       } else {
  //         checkEl.checked = true;
  //       }
  //     });
  //   });

  All.addEventListener("click", (e) => {
    const checkAll = e.target;
    console.log(checkAll.checked);

    checkEls.forEach((checkEl) => {
      checkEl.checked = checkAll.checked;
    });
  });
};
checkAll();

// preventDefault : submit 버튼 클릭시 새로고침되는걸 막음. 폼은 원래 새로고침이 됨.
const handleSubmit = () => {
  const form = document.querySelector("form");
  const checkEls = document.querySelectorAll(".check-wrap input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isChecked = true; // ischecked라는 변수에 true를 할당

    checkEls.forEach((checkEl) => {
      // 체크유무판단 - checked
      console.log(checkEl.checked);

      if (!checkEl.checked) {
        // 경우 1
        // 만약에 check가 됐으면 true가 찍힘
        // true는 !(부정연산자) 때문에 false반전됨
        // if는 true에서만 작동하기 때문에 아래 코드가 실행안됨

        // 경우 2
        // 만약에 check가 안됐다면 false가 찍힘
        // false는 !때문에 true로 반전됨
        // if는 true에서만 작동하기 때문에 아래 코드가 실행
        isChecked = false;
      }
    });

    // 에러를 한 군데에 몰아둠
    if (isChecked) {
      console.log("모두체크됨");
    } else {
      console.log("모두 체크해주세요.");
    }
  });
};

handleSubmit();
