import * as THREE from 'three';
let OrbitControls = require('three-orbit-controls')(THREE);

let camera, controls, scene, renderer;
let particles;


let mouseX = 0;
let mouseY = 0;

let halfX = window.innerWidth/2;
let halfY = window.innerHeight/2;


function getCanvas() {
  let canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;

  let ctx = canvas.getContext('2d');

  let gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0.3, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.6, 'rgba(177,16,46,0.8)');
  gradient.addColorStop(1, 'rgba(177,16,46,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,32,32);

  return canvas;
}

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({alpha: true});

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerWidth);

  let container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001, 5000
  );
  camera.position.set( 0, 0, 1500 );


  controls = new OrbitControls(camera, renderer.domElement);

  let material = new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(getCanvas())
  });


  particles = new THREE.Group();
  scene.add(particles);


  for (let i = 0; i < 1000; i++) {
    let particle = new THREE.Sprite(material);

    particle.position.x = (2*Math.random() - 1)*1000;
    particle.position.y = (2*Math.random() - 1)*1000;
    particle.position.z = (2*Math.random() - 1)*1000;

    particle.scale.x = particle.scale.y = 5 + 5*Math.random();

    particles.add(particle);
  }

  

  resize();

 
}

window.addEventListener('resize', resize); 
function resize() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  renderer.setSize( w, h );
  camera.aspect = w / h;




  camera.updateProjectionMatrix();
}

let time = 0;



function onMouseMove(event) {
  mouseX = event.clientX - halfX;
  mouseY = event.clientY - halfY;
}
document.addEventListener('mousemove',onMouseMove);



function animate() {
  time = time+0.05;

  particles.rotation.x += 0.0002;
  particles.rotation.y += 0.0002;


  camera.position.x += (mouseX/3 - camera.position.x)*0.02;
  camera.position.y += (-mouseY/3 - camera.position.y)*0.02;


  
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}


init();
animate();






