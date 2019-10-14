const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

Sizing();

function Sizing() {
    width = window.innerWidth;
    heigth = window.innerHeight;

    halfX = width/2;
    halfY = heigth/2;

    canvas.height = height;
    canvas.width = width;
}