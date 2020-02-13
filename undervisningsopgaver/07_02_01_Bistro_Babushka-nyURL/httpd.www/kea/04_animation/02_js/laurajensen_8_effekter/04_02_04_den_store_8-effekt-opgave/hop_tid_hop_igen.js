window.addEventListener("load", initialize);

let redBallContainer = document.querySelector('#red_container');
let redBallSprite = document.querySelector('#red_sprite');

function initialize() {
    redBallContainer.addEventListener('click', makeBallHop);
}

function makeBallHop() {
    redBallContainer.classList.add('hop');
    redBallContainer.addEventListener('animationend', resetBallContainerClasslist);
}

function resetBallContainerClasslist() {
    //    console.log('begin time interval');
    redBallContainer.classList.remove('hop');
    setTimeout(beginTimeInterval, 1000);
}

function beginTimeInterval() {
    console.log('test');
    redBallContainer.classList.add('hop');
}
