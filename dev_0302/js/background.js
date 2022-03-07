const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

// floor : 소수점 내림
// Math.random() : 랜덤한 0과 1사이의 숫자 생성
const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.createElement : JS로 HTML element 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);