// Home Page Timer and Button Functions by Seymour Eduria

// Variables to store HTML Elements (Local Variables)
let pomBtnEl = document.getElementById("pomodoroBtn");
let shortBtnEl = document.getElementById("shortBreakBtn");
let stopBtnEl = document.getElementById("stopBtn1");
let startBtnEl = document.getElementById("startBtn1")
let resetBtnEl = document.getElementById("resetBtn1");
let bigHdEl = document.getElementById("bigHeading");
let countdown = document.getElementById("timer");
    // The start Minute is 25 minutes and the time is 25 * 60 which is getting the seconds 
let startMinute = 25;
let time = startMinute * 60;

// Global Variables - var is used so that var can be reassigned and redeclared throughout the whole document
var setCountdown
var seconds
var minutes
var updateCountdown


// Event Listener - Once the buttons are clicked then the functions run
startBtnEl.addEventListener("click", startCountdown)
resetBtnEl.addEventListener("click", resetCountdown, startCountdown)
stopBtnEl.addEventListener("click", pauseTimer)


// TIMER FUNCTIONS By: Seymour Eduria
// Start Countdown - This function starts the timer
function startCountdown () {
    function updateCountdown() {

        // This part of the function says that if the time is less than or equal to 0 then the timer would stop by clearing or pausing the interval
        if (time <= 0) {
            clearInterval(setCountdown)
        }
        // To get the minutes time (25 * 60) is divided by 60 in order to get the number 25 and the Math.floor rounds down the number as the timer starts going
        minutes = Math.floor(time/60);
        // The percentage gets us the remainder of time as it is divided to 60
        seconds = time % 60; 
        // The Question mark adds the 0 if the statement is true. So when the minutes are less than 10 then a string of 0 will be added to the minutes
        // Same thing applies with the seconds
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds; 
        countdown.innerText = minutes + ":" + seconds;
        time--;
    }

    // This part udates the countdown and the Countdown is updated every 1000 ms or 1 sec
    updateCountdown ()
    setCountdown = setInterval (updateCountdown, 1000);

}

// Stop Countdown - This function pauses the timer by clearing or stoping the interval of the setInterval in the startCountdown function
function pauseTimer() {
    clearInterval(setCountdown)
}

// This function basically refreshes/reloads the page in order for the timer to be reset
function resetCountdown() {
    location.reload()
}