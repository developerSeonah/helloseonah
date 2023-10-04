
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
