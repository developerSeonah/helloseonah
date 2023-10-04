
for (let i=0; i < 10; i++) {
    console.log(`현재 숫자는  $(i + 1)입니다`);
}

// i < 10 false
// i = 10 -> false, i =9; 0~9 -> 10 번 실행
// 10 번 반복 , 1~10 까지 출력


// 중첩 반복문
// 성용 고등학교 (1~3학년, 9반)

for(let i =1; i<10; i++) {
    console.log(`1학년 ${i}반`);
}
for(let i =1; i<10; i++) {
    console.log(`2학년 ${i}반`);
}
for(let i =1; i<10; i++) {
    console.log(`3학년 ${i}반`);
}
//중첩
for (let i=1; i < 4; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i}학년 ${j}반`)
    }
}
//27

// 유지 보수를 위해 동일한 코드는 줄여서 작성하도록
// 동일한 내용을 여러번 수정해야하는 비효율성이 생김
// dependency rejection



