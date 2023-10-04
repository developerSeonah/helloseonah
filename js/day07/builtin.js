

const str = 'hello';
str.charAt(4) //0
str.concat("마이멜로디") //hello 마이멜로디
str.indexOf('e') //1
str.at()

const date = new Date();
console.log(date)
console.log(date.getFullYear()) //2023
console.log(date.getMonth()) //0~11 (월)
console.log(date.getDate()) //23 (일)
console.log(date.getDay()) //6 (0:일요일 , 6:토요일)(요일)

//주의 2023-09-23T02:45:41.438Z html 로 입력 이 불가능
// string , number으로 변경

date.toString() //문자열
date.toDateString() // 시분초를 생략

console.log(date.toString()) //현재 위치 시간
console.log(date.toISOString()) // utc-0
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())

const thisYear = date.getFullyear() //2023
date.setFullYear(thisYear - 1) //2023-1
console.log(date.getFullYear()) //2022 
// date 객체의 날짜 끼리의 연산도 가능하다.

