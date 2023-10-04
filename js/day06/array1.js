const posts = [{
    id: 1,
    title : "title-1",
    content : "content-1",
    isLiked : false    
},{
    id: 2,
    title: "title-2",
    content: "content-2",
    isLiked : false
}]

const findPost = posts.find((post) => post.id === 2);
findPost.isLiked = true,
console.log(posts) 

// const deletPost = posts.fillter((post) => post.id !== 1)
// console.log(deletPost);

const numArr = [1,2,3,4,5,6,7,8,9,10]
const reduceResult = numArr.reduce((sum, n) => {
    console.log(sum) // 0 ~ 45 마지막은 그 다음이 없기 때문에 45에서 끝남
    return sum + n
},0)
console.log(reduceResult) //55

// reduce((누적값, 현재요소)=>{})
// sum 의 기본값은 첫번째 요소인 1이며 n의 기본 값은 다음 요소인 2부터 시작
// sum에도 기본 값을 줄 수 있음 기본 값이 들어가면 sum은 기본값부터 시작, n은 첫번째 요소인 1부터 시작

// function reduce(callback) {
//     let sum
//     sum = callback()
//     callback()
// } 

//reduce 딥다이브 예제

var res = [1,2,3].reduce(function(acc, cur){
    return acc + cur;
},0);
console.log(res);

//reduce 짝수 예제
const evenArr2 = [1,2,3,4,5]
const result = evenArr2.reduce((sum, num)=>{
    if(num % 2 === 0) return sum + num
    else return sum
},0)
console.log(result)

//reduce 는 리턴하는 값이 sum에 들어간다.

// sum의 기본 값이 n이 있으면
// sum -> 기본값
// n -> 첫 번째 요소

// sum의 기본값이 없으면
// sum -> 첫번째 요소
// n -> 다음 요소

// 지금까지  return된 값과 현재 요소의 연산 결과를 다음 sum


