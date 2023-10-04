
/*

제어문 control flow statement
조건에 따라 코드 블록을 실행(조건문)하거나
반복 실행(반복문)할 때 사용

*/


/*

블록문 block statement / compound statement

0개 이상의 문을 중괄호로 묶은 것으로 
코드 블록 또는 블록

블록문 하나의 실행단위로 취급

*/

/*

조건문 conditional statement
조건식 coonditional expression

조건문
주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정

if...else문
switch문

*/


/*

if...else 문은 주어진 조건식의 평가 결과
논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정

*/

//문이 하나뿐이라면 중괄호를 생략할 수 있다
var num = 2;
var kind;

if(num > 0)       kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영' ;

console.log(kind); // 양수

// 대부분의 if...else문은 삼항 조건 연산자로 바꿔 쓸 수 있음

var x = 2;
var result;

if(x % 2) {
    result = '홀수';
} else{
    result = '짝수';
}

console.log(result);

//삼항 조건 연산자로 바꾸면

var result = x % 2 ? '홀수' : '짝수';
console.log(result);

//경우의 수가 세가지 일때
// 양수 음수 영

var num = 2;

var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);

// *** 삼항 조건 연산자는 값으로 평가되는 표현식!!!
// 변수에 할당이 가능
// if...else문은 표현식이 아닌 문!!!
// 변수 할당 불가능

/*
조건에 따라 내용이 복잡할 시
if...else
변수에 할당 경우는
삼항 조건 연산자
*/

/*

switch문
주어진 표현식을 평가하여 
그 값과 일치하는 표현식을 갖는 case문으로 실행 흐름을 옮긴다

if...else 
논리적으로 참 거짓 실행할 코드 블록 결정
switch
다양한 상황 case 에 따라 실행할 코드 블록을 결정

*/

var year = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invaild month');
}   

console.log(days);

let month = 2;

switch (month) {
    case 1:
        console.log("1월");
        break;
    case 2:
        console.log("2월");
        break;
        //탈출문, 대신 return을 사용할 수 도 있음, 그러나 단순 종료를 위해서는
        //break
    case 3:
        console.log("3월");
        break;
    case 4:
        console.log("4월");
        break;
    default:
        console.log("잘못입력하였습니다.")
}

/* 

반복문 loop statement
조건식의 평가 결과가 참인 경우 코드 블록이 실행
조건식을 다시 평가하여 참이면 다시 실행 거깃일 때까지 반복

for문
while문
do...while문

*/

/*

for 문
조건식이 거짓으로 평가될 때까지 코드블록을 반복 실행

매우 중요 
많은 연습을 통해 확실히 이해해야함
*/

for (var i = 0; i < 2; i++) {
    console.log(i); // 0 1
}

// i iteration

for (var i =  1; i >= 0; i--) {
    console.log(i);
} 

// 무한 루프 코드
// 어떤 식도 선언하지 않으면 무한루프
for(;;){ ... }

// 두개의 주사위를 던졌을 때 두눈의 합이 6이 되는 모든 경우

for(var i = 1; i<=6; i++) {
    for(var j = 1; j <= 6; j++){
        if(i+j === 6) console.log(`[${i},${j}]`);
    }
}


/* 
while문
주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행

for 문은 반복 횟수가 명확할 때 주로 사용 
while문은 반복 횟수가 불명확할 때 사용





*/



