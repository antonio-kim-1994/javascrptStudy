//document.getElementById("String") : html element를 id로 찾는다.
//querySelector : element를 css 방식으로 검색

/*
<< 같은 코드 >>
const id = document.getElementById("hello");
const id = document.querySelector("#hello");
*/

// hello 클래스 안의 h1을 가져온다.
const h1 = document.querySelector("div.hello:first-child h1");

/*
// h1 태그 내 일부 클래스명만 지우고, 추가하기

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
       h1.classList.remove(clickedClass);
   } else {
       h1.classList.add(clickedClass);
   }
}
*/

// 위의 코드와 같다.
// toggle은 className의 유무를 판단하고 추가하고, 제거하는 역할 수행
function handleTitleClick() {
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}

// html dir에서 on이 붙은 Element들이 이벤트다.
// htmlElement.javascriptElement
h1.addEventListener("click", handleTitleClick);