//document.getElementById("String") : html element를 id로 찾는다.
//querySelector : element를 css 방식으로 검색

/*
<< 같은 코드 >>
const id = document.getElementById("hello");
const id = document.querySelector("#hello");
*/

// hello 클래스 안의 h1을 가져온다.
const title = document.querySelector(".hello h1");

const hellos = document.getElementsByClassName("hello");
console.log(title);