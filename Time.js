let timer = document.querySelector('.Timer');
let startBtn = document.querySelector('.bstartBtn')
let resetBtn = document.querySelector('.pauseBtn')

console.log(timer)
console.log(startBtn)
console.log(resetBtn)

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    reutrn`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
  });

setInterval(() => {
  let a =  document.querySelector('h1')
  a.innerHTML = updateTime();
}, 1000);