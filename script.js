const christmas = "25 December 2023";

function countdown() {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const daysEl = (document.getElementById("days").innerHTML = days);
  const hoursEl = (document.getElementById("hours").innerHTML = hours);
  const minsEl = (document.getElementById("mins").innerHTML = mins);
  const secondsEl = (document.getElementById("seconds").innerHTML = seconds);
}

// initital call
countdown();
setInterval(countdown, 1000);
