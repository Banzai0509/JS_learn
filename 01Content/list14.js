const change = () => {
  const topPhoto = document.querySelector(".top-photo");
  const title = document.querySelector(".title");
  const names = document.querySelectorAll(".name");
  const photos = document.querySelectorAll(".photo");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", (e) => {
      names.forEach((name, nameIndex) => {
        if (buttonIndex === nameIndex) {
          isName = name.textContent;
          title.textContent = isName;
        }
      });
      photos.forEach((photo, photoIndex) => {
        if (buttonIndex === photoIndex) {
          isNum = photoIndex + 1;
          topPhoto.setAttribute("src", "./images/ico_product" + isNum + ".png");
        }
      });
    });
  });
};
change();

// 함수바인드를 하면 될거같긴한데ㅠ
