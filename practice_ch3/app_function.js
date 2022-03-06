// function

// argument(인수) : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.

function sayHello (nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("InKi", 29);
sayHello("test1", 23);
sayHello("test2", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
    console.log(firstNumber + secondNumber);
}

function devide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

plus(1, 2);
devide(10,5);

const player = {
    name: "inki",
    sayHello: function (otherPersonsName) {
        console.log("Hello! " + otherPersonsName + " nice to meet you !");
    },
};

console.log(player.name);
player.sayHello(player.name);
player.sayHello("test");

const calculator = {
    plus: function (a, b) {
        console.log(a+b);
    },
    devide: function (a, b) {
        console.log(a / b);
    },
    minus: function (a, b) {
        console.log(a - b);
    }
}

calculator.plus(1, 2);
calculator.devide(252, 12);
calculator.minus(100, 10);