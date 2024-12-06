//export 함수를 쓰면 같은 경로에 있는 다른 js파일에서도 사용할 수 있음
export const user = () => {
  console.log("유저정보입니다.");
};

export const userInfo = () => {
  console.log("유저의 자세한 정보입니다.");
};
