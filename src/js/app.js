let halfX, halfY, width, height;

let lines = [];

let linesNumber = 4;

let vertices = 100;

let radius = 200;

let color = "#390C7A";

for (let i = 0; i < linesNumber; i++) {
    lines[i] = [];
   
    for (let j = 0; j <= vertices; j++) {
        let point = {
            x: Math.cos(j/vertices * Math.PI*2),
            y: Math.sin(j/vertices * Math.PI*2),
        };
        lines[i].push(point);
    };
}

console.log(lines);

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

Sizing();

function update() {

}

function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle=color;

    for (let i = 1; i <= vertices; i++) {
        ctx.beginPath();
        ctx.moveTo(halfX + lines[i-1].x*radius,halfY + lines[i-1].y*radius);
        ctx.lineTo(halfX + lines[i].x*radius,halfY + lines[i].y*radius);

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
    height = window.innerHeight;

    halfX = width/2;
    halfY = height/2;

    canvas.height = height;
    canvas.width = width;
};