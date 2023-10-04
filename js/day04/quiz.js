
const drinkSol = 300;
const drinkVita = 500;
const drinkCola = 1000;

var charges =  function charges(coin,product){
    if(coin = 300 && product = "drinkSol") {
        coin - drinkSol;
    }
    if (coin = 500 && product = "drinkVita"){
        coin - drinkVita;
    }
    if (coin = 1000 && product = "drinkCola") {
        coin - drinkCola;
    }
}

function bendingMachine (coin,product) {

    console.log("자판기가 가동되었습니다.")
        
    if(coin = drinkSol && coin = drinkVita && coin = drinkCola){
        console.log(charges(coin,product),product);
    } else if (coin = 0) {
        console.log(product);
    } else if(coin < drinkSol || coin < drinkVita || coin < drinkCola) {
        console.log("금액이 부족합니다");
    }  else if (coin < 300 ){
        console.log("금액을 잘못 투입하셨습니다. 금액 반환");
    } else {
        console.log("존재하지 않는 상품입니다.");
    }

}

bendingMachine ("1200", "drinkCola");
