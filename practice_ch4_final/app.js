/*
// html에서 처리가 가능하다.
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

//<><><><><><><><><><><><>

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // string 이 반복될 때 변수 생성

//DB username을 저장하는 변수
const savedUsername = localStorage.getItem(USERNAME_KEY);

const link = document.querySelector("a");

//<><><><><><><><><><><><>

// 유저 이름을 저장하고, 반환하는 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 하는 기본동작을 방지한다.

    loginForm.classList.add(HIDDEN_CLASSNAME); // 입력창 숨기기
    const username = loginInput.value; // 사용자 입력값 저장
    localStorage.setItem(USERNAME_KEY, username); // localstorage에 사용자명 저장

    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`; // 유저 이름 저장하고, 반환

    // greeting.classList.remove(HIDDEN_CLASSNAME); // 클래스명 삭제
    paintGreeting(username);
}

// DB username을 호출하고, "hidden" 클래스를 지우는 함수
function paintGreeting(username) {
    greeting.innerText = `Hello ! ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick);
*/

//<><><><><><><><><><><><>

// 브라우저가 onLoginSubmit 함수 실행
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
    // user의 정보가 있을 경우 showing form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // user의 정보가 있을 경우 form 대신 greeting
    paintGreeting(savedUsername);
}
