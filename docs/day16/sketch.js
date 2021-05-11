let banana;
let z = 0;
let speed = 4;

function preload() {
  banana = loadModel('./platano.obj');
}

function setup() {
  createCanvas(1080, 1080, WEBGL);
  frameRate(12);
  noStroke();
  
}

function draw() {
  background(50, 0, 0);
  orbitControl();
  push();
    scale(25);
    rotateX(-16);
    translate(0, -15 + sin(frameCount)*-10, z);
    emissiveMaterial(255, 255, 0)
    model(banana);
  pop();
  z += speed;
  if (z > 40 || z < 0) {
    speed *= -1;
  }
}