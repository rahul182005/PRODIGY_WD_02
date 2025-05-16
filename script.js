let [minutes, seconds, milliseconds] = [0, 0, 0];
let timerRef = document.getElementById("display");
let interval = null;
let running = false;

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    interval = setInterval(runTimer, 10);
    running = true;
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(interval);
  running = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  [minutes, seconds, milliseconds] = [0, 0, 0];
  timerRef.textContent = "00:00:00";
  running = false;
});

function runTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  let ms = String(milliseconds / 10).padStart(2, '0');

  timerRef.textContent = `${m}:${s}:${ms}`;
}
