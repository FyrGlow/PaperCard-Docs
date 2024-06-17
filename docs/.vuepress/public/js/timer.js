const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

let startTime = Date.now();

function updateTime() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / MILLISECONDS_PER_SECOND) % SECONDS_PER_MINUTE;
    let minutes = Math.floor(elapsedTime / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)) % MINUTES_PER_HOUR;
    let hours = Math.floor(elapsedTime / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) % HOURS_PER_DAY;

    document.getElementById('elapsed-hours').innerText = hours;
    document.getElementById('elapsed-minutes').innerText = minutes;
    document.getElementById('elapsed-seconds').innerText = seconds;
}

setInterval(updateTime, MILLISECONDS_PER_SECOND);

window.onload = function() {
    document.getElementById('time-tracker').classList.add('active');
};
