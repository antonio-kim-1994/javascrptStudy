// const : 상수 선언에 사용, 값을 업데이트 할 수 없다.
// let : 변수 선언에 사용, 변수를 새로 생성할 때 사용한다.
// var : var는 선언된 값 모두 업데이트 할 수 있다.(사용하지 않는다.)
// null은 변수 안에 값이 없다는 것을 확실히 하기 위해 사용한다.
// undefined 변수는 메모리 공간은 할당되어 있지만 값이 없다.

// array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
console.log(daysOfWeek[5]);

// add array
daysOfWeek.push("sun");

console.log(daysOfWeek);