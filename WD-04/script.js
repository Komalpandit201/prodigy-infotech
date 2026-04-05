let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
    let h = hours.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startStop() {
    if (timer !== null) return;
    timer = setInterval(stopwatch, 1000);
}

function pauseStop() {
    clearInterval(timer);
    timer = null;
}

function resetStop() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (timer === null) return;

    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
}

updateDisplay();