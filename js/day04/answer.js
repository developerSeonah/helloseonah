

/*
1. 출력값을 먼저 생각해야한다.
2. 설계하기 - low level에서 생각하기 구글링 가능
          - 무작정 코딩 하기 말기  
3. 회고 하고 내가 왜 이와 같은 내용을 사고 하지 못했을까? 고민 해보고 약점을 극복

출력값
--공통--
console.log("자판기가 가동되었습니다"); -- 무조건 실행

-- 성공 --
console.log(product) -- 만약에 coin === price
console.log(product, price - coin) -- 만약에 price < coin

-- 실패 --
conosole.log(존재하지 않는 상품입니다) -- 만약에 product in menu, !price
// 객체의 값이 있는지 없는지 검사하기 위해서 특정 키의 값이 있는지 확인하거나 
// in으로 찾을 수 있다.    


console.log(금액이 부족합니다) -- 만약에 price > coin 
console.log(금액을 잘못 투입하셨습니다.) -- 만약에 coin < 300

ex)Math.min.Object.values() - 빌트 인 객체

입력값
coin, 상품명
price -> 상품에 맞는 가격 / 특정한 집단에서 특정 키를 갖고 있는 값을 구한다.
            ------ 객체

    const menu = {
        솔의눈 : 300,
        비타500 : 500,
        콜라 : 1000
    }
    
    menu[product] ===> price

*/

const menu = {
    솔의눈 : 300,
    비타500 : 500,
    콜라 : 1000
}

function 자판기(coin, product){
    console.log("자판기가 가동되었습니다.");

    const price = menu[product];
    const charge = coin - price ;

    if(!price) return console.log("존재하지 않는 상품입니다");
    if(price > coin) return console.log("금액이 부족합니다");
    if(coin < 300) return console.log("금액을 잘못 투입하셨습니다.",coin);

    if(coin - price === 0 ) return console.log(product);
    console.log(product, charge);
}

자판기(10000,"콜라");