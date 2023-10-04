
/*

삼항 조건 연산자 ternary operator

조건식의 평가 결과에 따란 반환할 값을 결정

조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

조건식은 불리언 타입의 값으로 평가될 표현식

*/

var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);


//if else 문 
var ifElse = 2, result;
if (ifElse % 2) result = '홀수';
else            result = '짝수';

console.log(result);

// if...else문은 값처럼 사용 불가능
// 표현식이 아닌 문

var y = 10;

// var result = if(y % 2) {result = '홀수';} else {result = '짝수';};
//SyntaxError

//삼항 조건 연산자 표현식은 값처럼 사용 가능 

//삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문

var z = 10;

var result = z % 2 ? '홀수' : '짝수';
console.log(result);


/*

논리 연산자 logical operator
우항과 좌항의 피연산자(부정 논리 연산자의 경우 우항의 피연산자)를 논리 연산

||
논리합 or

&&
논리곱 and

!
부정 not

*/

/*

드 모르간의 법칙

!( x || y) === (!x && !y)
!( x && y) === (!x || !y)

*/

/*
쉼표 연산자
쉼표 (,) 연산자는 왼쪽 피연산자부터 차례대로 피연자를 평가하고 
마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환
*/

var x,y,z;

x=1, y=2, z=3; //3

/*

그룹 연산자

*/

10 * 2 + 3; //23
10 (2 + 3); //50

/*

typeof 연산자
피연산자의 데이터 타입을 문자열로 반환

string
number
boolean
undefined
symbol
object
function

*/

typeof null; //object

/*

연산자의 부수효과

할당 연산자 = 
증가 감소 연산자 ++ --
delet 연산자
*/










