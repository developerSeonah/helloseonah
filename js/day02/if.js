
let num = 0;
let answer;

if(num > 0) {
    answer = "양수";
} else {
    answer = "음수";
}
console.log(answer);

//만약에
if (num > 0) {
    answer = "양수";
} 
//아니면 만약에
else if(num < 0) {
    answer = "음수";
} else {
    answer = "0";
}

console.log(answer); //0