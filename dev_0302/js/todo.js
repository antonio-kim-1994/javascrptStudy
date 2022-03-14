const toDoForm = document.getElementById("todo-form");
//ID:todo-form 내에서 input element찾기
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// netToDo를 localstorage에 저장하기 위한 array
let toDos = [];

const TODOS_KEY = "todos"

//JSON.stringify() : array의 item을 string으로 변환
//JSON.parse() : string을 array로 변환
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(){
    // button이 활성화 됐을 때 parentElement 정보를 통해 해당라인 삭제
    // console.dir을 통해 HTML element확인 가능
    const li = event.target.parentElement;
    // HTML element 삭제
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    // click 이벤트가 활성화될 때 function 실행
    button.addEventListener("click", deleteToDo);

    // append는 항상 마지막에 추가
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // 사용자 입력값을 저장
    const newTodo = toDoInput.value;
    // 입력창 초기화
    toDoInput.value = "";
    toDos.push(newTodo);
    console.log(toDos);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("This is the turn of", item);
}
//parsedToDos.forEach((item) => console.log("This is the turn of ", item)); 와 같다.

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // forEach : array의 각 item마다 function을 실행시키게 해준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}