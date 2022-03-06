/*
// html에서 처리가 가능하다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


// 유저 이름을 저장하고, 반환
function onLoginSubmit(event) {
    // 브라우저가 하는 기본동작을 방지한다.
    event.preventDefault(); 
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

