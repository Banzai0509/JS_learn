const checked = () => {
  const checkBoxs = document.querySelectorAll(".wrapper input");
  const buttonReset = document.querySelector(".btn-reset");

  //   console.log(checkBoxs);

  buttonReset.addEventListener("click", () => {
    checkBoxs.forEach((checkbox) => {
      //   console.log(checkbox);
      const isChecked = checkbox.checked;
      //   console.log(isChecked);
      if (isChecked == true) {
        // console.log(isChecked);
        checkbox.checked = false;
        console.log(checkbox);
      }
    });
  });
};

checked();
