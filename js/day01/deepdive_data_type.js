
/* 

ES6 - 7개의 데이터 타입 제공

<원시 타입 primitive type>
숫자 number type
    숫자 정수 실수 구분 없이 하나의 숫자 타입만 존재
문자열 string type
    문자열
불리언 boolean type
    논리적 참true 거짓 false
undefined type
    var 키워드로 선언된 변수에 암묵적으로 할당되는 값
null type
    값이 없다는 것을 의도적으로 명시할 때 사용하는 값
심벌 symbol type
    ES6에서 추가된 7번째 타입

<객체 타입 object / reference type>
객체, 함수, 배열

*/

/*

숫자 타입

자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고
모든 수를 실수로 처리

*/

/*

문자열 타입

작은 따옴표 ''
큰 따옴표 ""
백틱 ``

템플릿 리터럴

var template = `Template literal`
console.log(template);

    멀티라인 문자열
    줄바꿈 허용 모든 공백도 적용    
*/
var str = `Hello
    world.`;

var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>
`
console.log(template);

/*
    표현식 삽입
*/

var first = 'soenah';
var last = 'park';

console.log(`My name is ${first} ${last}`);

console.log(`1 + 2 = ${1+2}`);

    // 불리언 타입

var foo = true;
console.log(foo);

foo = false;
console.log(foo);

/*

undefined

var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화

개발자가 의도적으로 할당하기 위한 값이 아니라 
자바스크립트 엔진이 
변수를 초기화할 때 사용하는 값

*/

/*

null

변수에 값이 없다는 것을 의도적으로 명시 할때 사용
의도적 부재  intentinal absence

*/

/*

심벌 symbol
변경 불가능한 원사 타입의 값
심벌 값은 다른 값과 중복되지 않는 유일 무이한 값
이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용

심벌은 함수를 호출해 생성
생성된 심벌 값은 외부에 노출되지 않으며, 다른 값과 절대 중복되지 않는 유일무이한 값

*/

var key = Symbol('key');
console.log(typeof key);

var obj = {};

obj[key] = 'value';
console.log(obj[key]);



























