const clock = document.querySelector("h2#clock");

// interval example
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(function, millisecond);
// setInterval(sayHello, 5000);

//setTimeout(sayHello, 5000);

getClock(); // 브라우저 로드하자마자 시간 표시
setInterval(getClock, 1000);


// padSter : 텍스트의 길이를 원하는 길이로 조정하고, 앞쪽부터 나머지 빈칸을 채워주는 함수