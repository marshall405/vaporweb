// CANVAS

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const square = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    speed: 5,
    draw: function () {
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
canvas.addEventListener("focus", addKeydownEvent)
canvas.focus()
canvas.addEventListener('blur', () => canvas.removeEventListener("keydown", keydownEvent))
function addKeydownEvent() {
    canvas.addEventListener('keydown', keydownEvent)
}
function keydownEvent(e) {
    switch (e.key) {
        case ("ArrowRight"):
            e.preventDefault();
            if (square.x > canvas.width) {
                square.x = -square.w
            }
            square.x += square.speed
            break;
        case "ArrowLeft":
            e.preventDefault();
            if (square.x + square.w < 0) {
                square.x = canvas.width
            }
            square.x -= square.speed;
            break;
        case "ArrowUp":
            e.preventDefault();
            if (square.y < 0) {
                square.y = canvas.height
            }
            square.y -= square.speed;
            break;
        case "ArrowDown":
            e.preventDefault();
            if (square.y > canvas.height) {
                square.y = -square.h
            }
            square.y += square.speed;
            break;
        case " ":
            e.preventDefault();
            square.w = (Math.random() * 150) + 10;
            square.h = (Math.random() * 150) + 10;
        default:
            break;
    }
}
let count = 0;
let frequency = 1;
function drawSquare() {
    colorChange()
    square.draw()
    requestAnimationFrame(drawSquare)
}

document.getElementById('clearCanvas').addEventListener('click', clearCanvas)

function colorChange() {
    if (count == frequency) {
        ctx.fillStyle = `rgb(${(Math.random() * 255)},105,180)`
        count = 0;
    }
    count++;
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.focus()
}

canvas.addEventListener('click', e => {
    square.x = e.offsetX;
    square.y = e.offsetY;
})

freqSlider.oninput = function () {
    const adjustedValue = this.value * 1.98;
    this.style.background = 'linear-gradient(to right, indigo 0%, purple ' + adjustedValue + '%, violet ' + this.value + '%, skyblue 100%)'
};

freqSlider.addEventListener('change', e => {
    frequency = parseInt(e.target.value);
    count = 0;
    canvas.focus()
})

speedSlider.oninput = function () {
    const adjustedValue = this.value * 1.98;
    this.style.background = 'linear-gradient(to right, indigo 0%, purple ' + adjustedValue + '%, violet ' + this.value + '%, skyblue 100%)'
};

speedSlider.addEventListener('change', e => {
    square.speed = parseInt(e.target.value)
    canvas.focus()
})

drawSquare()

// END OF CANVAS