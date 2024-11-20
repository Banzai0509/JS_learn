const email = () => {
  const emailSelect = document.querySelectorAll(".email-select option");
  const domainInput = document.querySelector(".domain");

  //   console.log(emailSelect);
  //   console.log(domainInput);

  emailSelect.forEach((option, optionIndex) => {
    option.addEventListener("click", () => {
      const isValue = optionIndex.value;
      console.log(`선택된 점수는 ${isValue}입니다.`);
    });
  });
};

email();

// emailSelect.forEach((option, optionIndex) => {
//     option.addEventListener("click", () => {
//       const isValue = option.value;
//       console.log(`선택된 점수는 ${isValue}입니다.`);
//     });
//   });
