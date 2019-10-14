let halfX; let halfY; let width; let height;

const lines = [];
const linesNumber = 4;

const vertices = 100;
const radius = 200;
const color = red;

for (let i = 0; i < vertices; i++) {
    const point = {
        x: Math.cos(i/vertices * Math.PI*2),
        y: Math.sin(i/vertices * Math.PI*2),

    };
    lines.push(points);
};

console.log(lines);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

Sizing();

function update() {

}

function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle(color);

    for (let i = 0; i < vertices; i++) {
        ctx.beginPath();
        ctx.moveTo();

        ctx.stroke();
    }

}


function raf() {

    update();
    render();
    window.requestAnimationFrame(raf);
}

raf();

function Sizing() {
    width = window.innerWidth;
    heigth = window.innerHeight;

    halfX = width/2;
    halfY = heigth/2;

    canvas.height = height;
    canvas.width = width;
};