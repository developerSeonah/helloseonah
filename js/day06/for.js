
const arr = [0,1,2,3]
for(let i =0; i<arr.length; i+=2){
    console.log(arr[i])
}

arr.forEach((el, index, origin) => {
    console.log(el, index, origin)
    //bacend data fetching

})
// 순서 보장, 모든 요소를 순회, index 를 사용할 수 있음

for (let el of arr) {
    console.log(el) //0,1,2,3
}
//순서 보장x, 모든 요소를 순회, 요소의 값만 가지고 올 수 있음
//배열의 모든 요소의 값만 필요할 때

const seonah = { 
    age: 30,
    height:160
}

for (let key in seonah) {
    console.log(key)
    console.log(seonah[key])
}
// 객체를 반복, 순서가 보장되지 않는다

Object.keys(seonah) //[age,height]
Object.valus(seonah) // [20,190]
Object.entries(seonah) //[[age,30],[height,160]]
Object.entries(seonah).forEach()

for(let[key, value] of Object.entries(seonah)){
    console.log(key, value)
}
