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

// js로 html 바꾸기
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}


// html dir에서 on이 붙은 Element들이 이벤트다.
// htmlElement.javascriptElement
h1.addEventListener("click", handleTitleClick);