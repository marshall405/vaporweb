// CANVAS

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const square = {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
    draw: function () {
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ("ArrowRight"):
            square.x += 5;
            break;
        case "ArrowLeft":
            square.x -= 5;
            break;
        case "ArrowUp":
            square.y -= 5;
            break;
        case "ArrowDown":
            square.y += 5;
            break;
        case " ":
            square.w = (Math.random() * 150) + 10;
            square.h = (Math.random() * 150) + 10;
        default:
            break;
    }
})

let count = 0;
let frequency = 1;
function drawSquare() {
    if (count == frequency) {
        ctx.fillStyle = `rgb(${(Math.random() * 255)},105,180)`
        count = 0;
    }
    count++;
    square.draw()
    requestAnimationFrame(drawSquare)
}

document.getElementById('clearCanvas').addEventListener('click', clearCanvas)

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('click', e => {
    square.x = e.offsetX;
    square.y = e.offsetY;
})

slider.addEventListener('change', e => {

    frequency = parseInt(e.target.value);
    count = 0;
})


drawSquare()

// END OF CANVAS