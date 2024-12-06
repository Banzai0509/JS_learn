fetch("https://koreanjson.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    console.log("첫번째 출력");
    console.log("두번째 출력");
    console.log("세번째 출력");
  });
