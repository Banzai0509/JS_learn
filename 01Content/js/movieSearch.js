const searchResult = (keyword) => {
  //네트워크상에 있는 오픈 API를 받음. 이건 아이언맨이라는 이름이 들어간 모든 영화를 가져옴

  return fetch(`https://omdbapi.com/?apikey=ef297970&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => {
      return response.Search; //retrun시켜서 함수(searchResult) 밖으로 내보냄
    });
};

export const movieSearch = () => {
  document.querySelector(".container button").addEventListener("click", () => {
    const keyword = document.querySelector(".container input").value;
    // console.log(keyword);

    searchResult(keyword).then((data) => {
      //   console.log(data);
      const movieItem = data.map((item) => {
        return /* HTML */ `
          <li>
            <img src=${item.Poster} alt="" />
            <strong style="display: block; font-size:20px;">${item.Title}</strong>
            <div style="font-size: 14px;">개봉일 : ${item.Year}</div>
          </li>
        `;
      });
      //   console.log(movieItem);
      document.querySelector(".movie-list").innerHTML = movieItem.join("");
    });
  });
};
