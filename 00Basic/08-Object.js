/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */

const user = {
  name: "Yamada",
  short: "저를 소개합니다.",
  information: {
    age: 31,
    city: "Tokyo",
    country: "Japan",
  },
  result: function () {},
};

user.birth = "1993.05.09";
// const fn = user.result();

// 옵셔널체이닝 (구조분해할당은 못 씀)
// console.log(user.information.image || "이미지가 없습니다"); // || 또는 or 객체 없을 때

const information = () => {
  const ul = document.querySelector(".infomation");
  //   const age = ul.children[0].querySelector("span");
  //   const city = ul.children[1].querySelector("span");
  //   const country = ul.children[2].querySelector("span");

  //   age.innerHTML = user.information.age;
  //   city.innerHTML = user.information.city;
  //   country.innerHTML = user.information.country;
  ul.innerHTML = `
        <li><span>${user.information.age || "-"}</span><strong>Age</strong></li>
        <li><span>${user.information.city || "-"}</span><strong>City</strong></li>
        <li><span>${user.information.country || "-"}</span><strong>Country</strong></li>
    `;
};

information();

// 구조분해할당

const arry = ["a", "b", "c"];
const [a, item, sol] = arry; // 빠르게 배열에 접근 가능

console.log(sol);

const obj = {
  item1: "text",
  item2: 1234,
  item3: "yamada",
};

const { item1, item2, item3 } = obj; // obj를 배열에 할당
console.log(item3);

const designClass = {
  img: "./images/002.jpg",
  title: "UX Design",
  view: 900,
  like: 4.5,
  lectures: 80,
  price: "50,000",
};

const { img, title, view, like, lectures, price } = designClass;

const classInfo = () => {
  const div = document.querySelector(".tab-content");
  div.innerHTML = `
    <div>
        <img src="${img ? img : ""}" alt="" />
        <strong class="title">${title}</strong>
        <div class="info">
        <span class="view">${view}</span>
        <span class="like">${like}</span>
        </div>
        <div class="lectures">${lectures} Lectures</div>
        <div class="price">${price}원</div>
    </div>
    `;
};
classInfo();

/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */
