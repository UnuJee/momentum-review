const clockContainer = document.querySelector(".js-clock-container");
const clockTitle = clockContainer.querySelector(".js-clock-title");

function getTimes() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const getClockTitle = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle.innerText = getClockTitle;
}

function init() {
  getTimes();
  setInterval(getTimes, 1000);
}

init();
