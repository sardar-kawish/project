// Clock
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;

document.getElementById('startStopwatch').addEventListener('click', function () {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        this.textContent = 'Start';
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        this.textContent = 'Stop';
    }
    stopwatchRunning = !stopwatchRunning;
});

document.getElementById('resetStopwatch').addEventListener('click', function () {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    document.getElementById('startStopwatch').textContent = 'Start';
    document.getElementById('time').textContent = '00:00:00';
});

let stopwatchSeconds = 0;

function updateStopwatch() {
    stopwatchSeconds++;
    const hours = Math.floor(stopwatchSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (stopwatchSeconds % 60).toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Alarm
document.getElementById('setAlarm').addEventListener('click', function () {
    const alarmTimeInput = document.getElementById('alarmTime').value;
    const alarmTimeArray = alarmTimeInput.split(':');
    const alarmHours = parseInt(alarmTimeArray[0], 10);
    const alarmMinutes = parseInt(alarmTimeArray[1], 10);

    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    if (alarmHours === currentHours && alarmMinutes === currentMinutes) {
        alert('Alarm! It\'s time!');
    } else {
        alert('Alarm set for ' + alarmTimeInput);
    }
});