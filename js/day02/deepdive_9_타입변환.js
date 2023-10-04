
/* 

타입 변환과 단축 평가

자바스크립트의 모드 값은 타입이 있다.

값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다

개발자가 의도적으로 값의 타입을 변환하는 것을
명시적 타입 변환 explicit coercion
타입 캐스팅 type casting

개발자의 의도와는 상관없이 표현식을 평가하는 도중에
자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환
암묵적 타입 변환 implicit coercion
타입 강제 변환 type conercion

*/

//명시적 타입 변환 타입 캐스팅
var x = 10;

var str = x.toString();
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10

// 암묵적 타입 변환 타입 강제 변환
var x = 10;

var str = x + '';




