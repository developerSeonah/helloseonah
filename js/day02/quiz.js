

var name = "seonah";
var korean = 80;
var math = 70;
var english = 100; 
var social = 100;
var mean = (korean + math + english + social)/4;
var credit;

if (mean >= 90) { 
    credit = "A";
} else if (90 < mean >= 80) {
    credit = "B";
} else if (80 < mean >= 70 ) {
    credit = "0"; 
} else {
    credit = "F";
}
console.log(`${name}님의 이번학기 성적은 ${credit}학점 입니다.`);

// 설계하는 방법

// 입력 -> 연산 -> 출력

// 최종적으로 완벽한 마지막 출력 먼저 생각하고 입력과 연산 과정을 짜야한다
// 무엇을 구현해야하는지 정확히 알아야한다.
// 가고자 하는 목표를 정확하게 설계를 세워야한다.
// 데이터를 어떻게 가공할 건지에 대한 흐름 파악
