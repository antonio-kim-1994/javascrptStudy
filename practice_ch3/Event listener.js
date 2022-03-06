//document.getElementById("String") : html element를 id로 찾는다.
//querySelector : element를 css 방식으로 검색

/*
<< 같은 코드 >>
const id = document.getElementById("hello");
const id = document.querySelector("#hello");
*/

// hello 클래스 안의 h1을 가져온다.
const h1 = document.querySelector("div.hello:first-child h1");

const hellos = document.getElementsByClassName("hello");

console.dir(h1);
console.log(hellos);

// js로 css 바꾸기
// htmlElement.javascriptElement.subElement
h1.style.color = "orange";

// js로 html 바꾸기
function handleTitleClick(){
    console.log("h1 was clicked ! ");
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here !";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is leave !";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Copier !");
}

function handleWindowOffLine() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD !")
}

// html dir에서 on이 붙은 Element들이 이벤트다.
// htmlElement.javascriptElement
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnline);