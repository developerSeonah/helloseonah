
const menus = [
    {
        title: "상품 목록",
        toggle: false 
    },{
        title: "회원 목록",
        isToggled: true
    },{
        title: "결제 관리",
        isToggled: false
    }
]

const everyToggledMenus = menus.every((menu) => menu.isToggled)
console.log(everyToggledMenus) //false

const someToggledEmnu = menus.some((menu) => menu.isToggled)
console.log(someToggledEmnu) //true

const sortArr = [5,3,1,2,4]
sortArr.sort()
console.log(sortArr)

const sortArr2 = [1,10,2,3,5]
sortArr2.sort()
console.log(sortArr2) //[ 1, 10, 2, 3, 5 ]
// 유니코드로 계산 - 전 세계의 모든 문자와 숫자에 대해 코드로 기준하는 일돈의 국제 표준
// => 다른 코드로 계산되는 구나 그래서 결과 값이 다르구나 -> 그럼 어떻게? 

sortArr2.sort((a,b) => a - b)
console.log(sortArr2)