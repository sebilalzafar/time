const timeArea = document.querySelector(".time");

const timePeriod = document.querySelector(".time-per");

const tik = () => {
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const ampm = hours >= 12 ? "pm" : "am";

  const time = `${hours}:${minutes}:${seconds}`;

  timeArea.innerHTML = time;
  timePeriod.innerHTML = ampm;

  setTimeout(tik, 1000);
};

tik();