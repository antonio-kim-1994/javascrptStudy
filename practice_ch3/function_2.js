const age = 96;
const krAge = calculateKrAge(age);

function calculateKrAge(ageOfForeigner) {
    // function의 결과값을 return으로 돌려받는다.
    return ageOfForeigner + 2;
}

console.log(krAge);

const calculator = {
    plus: function (a, b) {
        return a + b; // return 한 시점에서 그 이후의 코드는 동작하지 않는다.
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a*b;
    },
    power: function (a, b) {
        return a ** b;
    },
}

const plusResult    = calculator.plus(10, 5);
const minusResult   = calculator.minus(10, 5);
const timesResult   = calculator.times(12, 11);
const powerResult   = calculator.power(2, 8);
const minusResult2  = calculator.minus(plusResult, 5);

console.log(plusResult, minusResult, timesResult, powerResult);
console.log(minusResult2);