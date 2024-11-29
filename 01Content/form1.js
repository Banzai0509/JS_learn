const loginForm = () => {
  window.onload = function () {
    const delButton = document.querySelectorAll("form button");

    delButton.forEach((e) => {
      //console.log(e);

      const classCheck = e.classList.contains("btn-del");
      //console.log(classCheck);
      e.classList.remove("btn-del");
    });
  };

  const inputBox = document.querySelectorAll("form input");
  const delBtn = document.querySelectorAll("form button");

  inputBox.forEach((e) => {
    e.addEventListener("keypress", (e) => {
      console.log("안녕");
      e.target.nextElementSibling.classList.add("btn-del");
      console.log(e.target.nextElementSibling); // nextElementSibling 클릭한 인풋박스의 다음 형제를 찾음
      e.target.nextElementSibling.addEventListener("click", () => {
        e.target.value = null;
        e.target.focus();
      });
    });
  });

  const inputEmail = document.getElementById("txt1_1");
  const inputPw = document.getElementById("txt1_2");
  const loginBtn = document.getElementById("btn-submit");

  loginBtn.addEventListener("click", () => {
    if (inputEmail.value === "") {
      alert("이메일을 입력하세요.");
    } else if (inputPw.value === "") {
      alert("패스워드를 입력하세요.");
    }
  });
};

loginForm();
