let twentySecondsBtnEl = document.getElementById('twentySecondsBtn');
let thirtySecondsBtnEl = document.getElementById('thirtySecondsBtn');
let fortySecondsBtnEl = document.getElementById('fortySecondsBtn');
let oneMinuteBtnEl = document.getElementById('oneMinuteBtn');
let timerTextEl = document.getElementById('timerText');

let secondsleft = 0;
let timer;

function clearTimers(){
    clearInterval(timer);
}
function startTimer(){
    if (secondsleft > 1) {
        secondsleft = secondsleft - 1;
        timerTextEl.textContent = secondsleft + " seconds left";
    } else {
        clearTimers();
        timerTextEl.textContent = "Your moment is complete";
    }
}
function setTimer(){
    timerTextEl.textContent = secondsleft + " seconds left";
    timer = setInterval(startTimer,1000);
}

twentySecondsBtnEl.onclick = function(){
    secondsleft = 20;
    clearTimers();
    setTimer();
} 
thirtySecondsBtnEl.onclick = function(){
    secondsleft = 30;
    clearTimers();
    setTimer();
}
fortySecondsBtnEl.onclick = function(){
    secondsleft = 40;
    clearTimers();
    setTimer();
}
oneMinuteBtnEl.onclick = function(){
    secondsleft = 60;
    clearTimers();
    setTimer();
}

