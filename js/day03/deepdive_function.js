
/*

12장

함수

프로그래밍 언어의 함수는
일련의 과정을 문 statement으로 구현하고 코드 블록으로 감싸서
하나의 실행 단위로 정의한 것

매개 변수 prameter
함수 내부로 입력을 전달 받는 변수

인수 argument
입력

반환값 return value
출력

함수이름
여러 개 존재할 수 있으므로 특정함수를 구별하기 위해 식별자

*/

//함수 정의
function add(x,y) {
    return x + y;
}

/*
함수 정의 만으로 실행 안됨
입력
즉 인수를 매개변수를 통해 함수에 전달하면서 
함수의 실행을 명시적으로 지시
=> 함수 호출 function call / invoke
*/

//함수 호출
var result = add(2,4);
console.log(result);

/*

함수 리터럴

리터럴은 값을 생성하기 위한 표기법
함수 리터럴도 평가되어 값을 생성
값은 객체
따라서 함수는 객체

일반 객체는 호출할 수 없지만 함수는 호출 가능
함수 객체만의 고유한 프로퍼티 갖는다

*/


/*

함수 정의
함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들
그리고 반환할 값을 지정하는 것

*/

//함수 선언문
function add(x,y) {
    return x + y;
}

//함수 표현식
var add = function(x,y){
    return x+y;

};

    // 기명 함수
        //이름 지어주고 컴퓨터에게 기억시킨 것
    function printHello(){
        console.log("hello");
    }
    //익명함수
        //재사용 될 필요가 없는 함수, 콜백함수 즉시 실행함수
    function(){
        return x + y;
    }
        //익명함수는 재사용 가능성이 없고 혼자서 실행할 수 없기 때문에
        //다른 함수에 의해 실행되거나 즉시 실행함수로서 사용
    helloFunction(function(){})

//function 생성자 함수
var add = new Function('x','y','return x+y');

//화살표 함수
var add = (x,y) => x+y;

//함수 선언문
function add (x,y){
    return x+y;
}

function foo () {console.log('foo');}
foo();

//그룹 연산자() 내에 함수 리터럴은 표현식으로 해석
// 익명함수 가능
(function bar() {console.log('bar');});
bar();


/*

값의 성질을 갖는 객체 = 일급 객체

즉 함수를 값처럼 자유롭게 사용할 수 있다

*/

var add = function foo(x,y){
    return x + y;
}
console.log(add(2,5));
console.



// 문 statement
function add {
  return x + y;   
}

// 표현식 expression
var add =  funtion foo(){
    retrun x +y ;
};

//기명 함수

//익명함수
(function(){})

// 함수 정의

// 선언문
// 표현식
// function 생성자
// 화살표