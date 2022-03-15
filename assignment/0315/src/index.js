const rangeNumInput = document.querySelector("#rangeNum input");
const rangeForm = document.querySelector("#rangeNum");
const inputNumInput = document.querySelector("#guessNum input");
const inputForm = document.querySelector("#guessNum");
const guessForm = document.querySelector("#guessing");
const guess = document.querySelector("#guessing span:first-child");
const message = document.querySelector("#guessing span:last-child");

let rangeNum = "";
function rangeSubmit(event) {
  event.preventDefault();
  rangeNum = parseInt(rangeNumInput.value, 10);
}

let guessNum = "";
function inputSubmit(event) {
  event.preventDefault();
  guessNum = parseInt(inputNumInput.value, 10);

  const computerNumber = Math.ceil(Math.random() * rangeNum);
  guess.innerText =
    "You chose: " + guessNum + ", the machine chose: " + computerNumber + ".";
  guessForm.classList.remove("hidden");
  if (guessNum === computerNumber) {
    message.innerText = "You won !";
    alert("You won !!!");
  } else {
    message.innerText = "You lost !";
  }
}

rangeForm.addEventListener("submit", rangeSubmit);
inputForm.addEventListener("submit", inputSubmit);