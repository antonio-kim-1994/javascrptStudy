/*
// html에서 처리가 가능하다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

// 유저 이름을 저장하고, 반환
function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 하는 기본동작을 방지한다.
    const username = loginInput.value; // 사용자 입력값 저장
    loginForm.classList.add("hidden"); // 입력창 숨기기
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick);
*/

loginForm.addEventListener("submit", onLoginSubmit);

