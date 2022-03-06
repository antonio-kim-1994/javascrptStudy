/* 
promt : 함수는 사용자에게 메세지를 띄워주는 함수
 - 현재는 대부분 사용하지 않는 오래된 함수
 - html, css 적용이 안되고, 일부 브라우저는 호환하지 않는다.
 - 사용자가 값을 입력할 때까지 코드가 멈춰있다.
*/


// function은 내부에서부터 외부까지 실행된다.
// parseInt : 입력된 문자형식의 숫자를 int 형태로 바꿔준다.
// = : value를 할당
const age = parseInt(prompt("How old are you?"));


// console.log(age);
// console.log(typeof age);
// console.log(typeof parseInt(age))
// console.log(isNaN(age));

/*
if(condition) {
    // condition === true
} else {
    // condition === false
}
*/

// == : 변수의 값(value)만을 기준으로 비교
// ex) 0 == false : true
// === : 변수의 값(value)뿐만 아니라 변수 유형(자료형)도 비교
// ex) 0 === false : false

if(isNaN(age) || age < 0) {
    console.log("please write a real positive number.");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if(age > 50 && age <= 80){
    console.log("You should exercise.");
} else if (age > 80 && age < 100){
    console.log("You can do whatever you want.");
} else if (age === 100){
    console.log("wow you are wise.")
}