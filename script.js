const startingMinutes = 5;
let time = startingMinutes * 60;
setInterval(updateCountdown, 1000);
const countdownElemnt = document.getElementById("Countdown");
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if(minutes)

  countdownElemnt.innerHTML = `${minutes}:${seconds}`;
  time--;
}

