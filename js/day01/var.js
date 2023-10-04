console.log(a); //undefined
var a = 5;
console.log(a); //5

let c = 5;
console.log(c); //5
c = 7; // => 재할당에 해당
console.log(c); //7    -> let은 재할당 가능. 변할수있는 성질 있음

//중복과 재할당?
//선언과 할당을 명확히 구분
//중북 선언이라는것은 let c =5, let c =7
//재할당은 let c=5, c=7 로 바꾼거
