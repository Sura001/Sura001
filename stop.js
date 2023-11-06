let timer;
let isRunning =0;
let seconds = 0;
let laps = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopButton").textContent = "Start";
        isRunning=false;
    } else if(isRunning=true){
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopButton").textContent = "Stop";     
}
}
function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById("display");
    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

function reset() {
    clearInterval(timer);
    isRunning = 0; 
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps=0;
     document.querySelector('tbody').innerText="";
     document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopButton").textContent = "Start";
}
function lap(){
    laps++;
    let lapData = "lap:" + laps;
    let time = document.querySelector('#display').innerText;

    let newRow = document.createElement('tr');
    let lap_ = document.createElement('td');
    let time_ = document.createElement('td');

    lap_.innerText = lapData;
    time_.innerText = time; 
    newRow.append(lap_, time_);
    document.querySelector('tbody').append(newRow);
}