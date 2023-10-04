

const arr = ["김성용","짱구","마이멜로디"]
arr.push("해피캣")
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift("쿠로미")
console.log(arr)
arr.shift()
console.log(arr)

//만약에 arr에 크로미가 없으면 실행시켜라
// 부정연산자를 통해 쿠로미가 없으면 false -> true로 바꾸어서 조건문 실행 
if(!arr.includes('크로미')){
    arr.push('크로미')
}
console.log(arr)
console.log(arr.indexOf('마이멜로디'))
console.log(arr.indexOf('선아'))
if(arr.indexOf('쿠로미')<0){
    arr.push('쿠로미')
}

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = arr1.concat(arr2)

console.log(arr3)

//slice,splice,split,join

const apart = ["짱구","오수","신혼부부","훈이","스폰지밥","징징이"];
// apart.slice(start,end)
// start -> index, end -> index + 1
const arr4 = apart.slice(3,5);
// end 는 생략이 가능하며 end가 없을 경우 마지막까지 모두 가지고 옵니다
// start부터 마지막 인덱스까지
console.log(arr4);
const arr5 = apart.slice(-3,-1)
// -를 붙이면 마지막 인덱스부터 -1 로 계산
// es2020 apart[apart.length-1] -> apart.at(-1)
console.log(arr5);
console.log(arr.at(-1));
console.log(arr5[arr5.length-1]);


// apart.splice(start, count, item)
                //index, 숫자, 대체 아이템
// apart.splice(3,2)
apart.splice(3,2,'배고파요','졸려요','추워요')
console.log(apart)

const phone = '010-1234-1234'
phone.split('')
console.log(phone.split(''))
const splitPhone = phone.split('-');
console.log(phone.split('-'));

const hashedPhone = splitPhone[0] + '****' + splitPhone[2];
console.log(hashedPhone);

splitPhone[1] = '****'; //['010','****','1234']
console.log(splitPhone.join('-'));


















