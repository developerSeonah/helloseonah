
//자바스크립트의 빌트인 객체 - > 내장객체
// Object , 빌트인 객체

const seonah = { 
    age: 30,
    height: 160,
    hobby: '코딩'
}

// seonah property(key, value)
// 객체의 key, values를 따로 확인할 때 사용
console.log(Object.values(seonah));
console.log(Object.keys(seonah));
console.log(Object.entries(seonah)[0][0]);
//다차원 배열 형태로 반환
//배열 안에 요소로 배열이 존재
