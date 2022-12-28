let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const buttonStart = document.querySelector(".start")

function start() {
    increase()
    interval = setInterval(increase, 1000)
    buttonStart.setAttribute("disabled", "true")
    buttonStart.innerText = `reiniciar`
}

function pause() {
    clearInterval(interval)
    buttonStart.removeAttribute("disabled")
}

function stop() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval)
    document.querySelector("#time").innerText = `00:00:00`
    buttonStart.removeAttribute("disabled")
    buttonStart.innerText = `iniciar`
}

function format(time) {
    if(time<10) {
        return `0${time}`
    }
    
    return time
}

function increase() {
    seconds++

    if (seconds === 60) {
        minutes++;
        seconds = 0;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    document.querySelector("#time").innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`
}
