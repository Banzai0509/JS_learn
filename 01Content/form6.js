const checkboxSet = document.querySelectorAll("input");
const submitBtn = document.querySelector("form");
const selectedCheck = document.querySelector(".selected");
const resetBtn = document.querySelector(".btn-reset");

const hashTag = () => {
  checkboxSet.forEach((check) => {
    check.addEventListener("change", () => {
      if (check.checked) {
        // 체크유무를 판단해서 체그가됐다면 아래 코드 실행
        let isValue = [check.value];
        isValue.forEach(function (index) {
          console.log(isValue);

          submitBtn.addEventListener("submit", (e) => {
            e.preventDefault(e);
            selectedCheck.innerHTML += `
            <span>${isValue}</span>
            `;
          });

          resetBtn.addEventListener("click", (e) => {
            e.preventDefault(e);
            check.checked = false;
            isValue = [];
            console.log(isValue);
            selectedCheck.innerHTML = "";
          });
        });
      }
    });

    submitBtn.addEventListener("submit", (e) => {
      e.preventDefault(e);
      if (check.checked === false) {
        let isChecked = [check];
        isChecked === null;
        console.log("체크해");
        // alert("하나 이상 체크해주세요");
        return;
      }
    });
  });
};
hashTag();
