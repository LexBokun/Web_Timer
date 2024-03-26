// Time.js

const timerDisplay = document.querySelector('#timer h1');
const startPauseBtn = document.querySelector('.startPauseBtn');
const resetBtn = document.querySelector('.resetBtn');

let startTime;  // Store start time for accurate calculations
let totalElapsedTime = 0;  // Track total elapsed time
let elapsedTime = 0;  // Track elapsed time for current session
let intervalId;  // Hold interval ID for clear functionality
let isRunning = false; // Flag to track timer state (running/paused)

// Update timer display function
function updateTimerDisplay() {
  const totalSeconds = Math.floor((totalElapsedTime + elapsedTime) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:` +
                             `${minutes.toString().padStart(2, '0')}:` +
                             `${seconds.toString().padStart(2, '0')}`
}

// Start/Pause timer function
function toggleTimer() {
  if (isRunning) {
    totalElapsedTime += elapsedTime; // Add current session time to total time
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
  } else {
    startTime = Date.now();
    intervalId = setInterval(() => {
      elapsedTime = Date.now() - startTime; // Calculate elapsed time in milliseconds
      updateTimerDisplay();
    }, 1000); // Update every second
    isRunning = true;
  }

  
  // Update button states based on timer running state
  setTimeout(function() {
    startPauseBtn.textContent = isRunning ? "СТОП" : "СТАРТ";
  },70)
}

// Reset timer function
function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  totalElapsedTime = 0;
  elapsedTime = 0;
  updateTimerDisplay();
  isRunning = false;
  // Update button states
  startPauseBtn.textContent = "СТАРТ";
  startPauseBtn.disabled = false; // Enable start button
}

// Button event listeners
startPauseBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial setup when the script is loaded
updateTimerDisplay(); // Display initial time (00:00:00)
resetTimer(); // Reset timer to initial state
