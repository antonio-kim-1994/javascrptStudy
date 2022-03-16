const clockTitle = document.querySelector(".js-clock");

function happyXmas() {
  const xMas = new Date(2022, 11, 25); //Date에서 현지 시간 기준 월(0–11)을 반환
  const date = new Date();
  const waitingTime = xMas.getTime() - date.getTime();
  const watingDay = String(
    Math.floor(waitingTime / (1000 * 60 * 60 * 24))
  ).padStart(3, "0"); 
  const watingHours = String(
    Math.floor((waitingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const watingMinutes = String(
    Math.floor((waitingTime % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const watingSeconds = String(
    Math.floor((waitingTime % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  clockTitle.innerText = `${watingDay}d ${watingHours}h ${watingMinutes}m ${watingSeconds}s`;
}

happyXmas();
setInterval(happyXmas, 1000);