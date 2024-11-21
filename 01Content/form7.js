const email = () => {
  const emailSelect = document.querySelector(".email-select");
  const domainInput = document.querySelector(".domain");

  emailSelect.addEventListener("change", (e) => {
    if (emailSelect.value === "") {
      domainInput.removeAttribute("readonly");
      domainInput.value = null;
    } else {
      domainInput.value = e.target.value;
    }
  });
};

email();

// else {
//   domainInput.value = e.target.value;
// }

// console.log(emailSelect.value);
