const bannerSet = {
  title1: "선물하기",
  description1: "편의점·마트·와인\n상품선물",
  title2: "매장찾기",
  description2: "근처 매장 찾기",
  title3: "택배발송",
  description3: "택배 접수 및 조회",
  title4: "이벤트",
  description4: "혜택이 와르르~",
};

const { title1, description1, title2, description2, title3, description3, title4, description4 } = bannerSet;

// console.log(bannerSet);

const banner = () => {
  const liSet = document.querySelectorAll(".service-list li");
  const classSet = ["ico1", "ico2", "ico3", "ico4"];

  liSet.forEach((e, index) => {
    console.log(e, index);

    e.innerHTML = `
        <a href="">
          <strong class="title">"${title1}"</strong>
          <p class="description">"${description1}"</p>
        </a>
    `;
    if (classSet[index]) {
      //배열의 범위 내인지 확인함
      e.classList.add(classSet[index]);
    }
  });
};
banner();
