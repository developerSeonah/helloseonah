const menus = [
    {   
        title: "상품 목록",
        isToggled: false
    },{
        title: "회원 목록",
        isToggled:  true
    },{
        title: "결제 관리",
        isToggled: false
    }
]

const everyToggledMenus = menus.every((menu) => menu.isToggled);
console.log(everyToggledMenus);
 
const someToggledMenu = menus.some((menu)=> menu.isToggled);
console.log(someToggledMenu);

const sortArr = [5,3,2,1,4];
sortArr.sort();
console.log(sortArr);

// 딥다이브예제
const fruits = ['banana','orange','apple'];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// 딥다이브 예제 - 정렬순서를 정의하는 비교함수를 인수로 전달
const points = [-40,-100,1,-5,2,25,10];

points.sort((a,b) => a - b);
console.log(points);

console.log(points[0],points[points.length - 1]);

points.sort((a,b)=> b - a );
console.log(points);
