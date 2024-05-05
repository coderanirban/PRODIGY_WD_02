let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").innerHTML = "Start";
        isRunning = false;
    } else {
        startTime = new Date().getTime();
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").innerHTML = "Stop";
        isRunning = true;
    }
}

function lapReset() {
    if (isRunning) {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;
        displayLap(elapsedTime);
        startTime = currentTime;
    } else {
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("laps").innerHTML = "";
        lapCount = 1;
    }
}

function updateDisplay() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    document.getElementById("display").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}

function displayLap(elapsedTime) {
    let lapsList = document.getElementById("laps");
    let lapItem = document.createElement("li");
    lapItem.innerText = "Lap " + lapCount + ": " + formatTime(Math.floor(elapsedTime / 1000));
    lapsList.appendChild(lapItem);
    lapCount++;
}
