const toDoForm = document.getElementById("todo-form");
//ID:todo-form 내에서 input element찾기
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);