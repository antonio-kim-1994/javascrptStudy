// object : property를 가진 데이터

const player = {
    // property
    name: "inki",
    points: 10,
    handsome: false,
    fat: "a little bit",
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = true;
// const 함수는 전체를 하나의 값으로 업데이트 할 때 에러가 발생한다.
// 예시 : const player = false;  => 이는 objects를 boolean으로 바꾸기 때문에 에러가 발생한다.
// const 안의 property를 바꿀 때는 에러가 발생하지 않는다.
console.log(player);

// object는 push를 사용하지 않고도 내용을 추가할 수 있다.
player.lastName = "Kim";
player.points = player.points + 10;
console.log(player);