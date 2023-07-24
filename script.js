const winter = "23 Dec 2023";
const daysEl = document.getElementById("days"),
  hoursEl = document.getElementById("hours"),
  minEl = document.getElementById("mins"),
  secEl = document.getElementById("seconds");
function countDown() {
  const winterDate = new Date(winter);
  const currentDate = new Date();
  console.log(currentDate.getHours());
  const totalSeconds = (winterDate - currentDate) / 1000;
  console.log(totalSeconds);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(minutes);
  secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
