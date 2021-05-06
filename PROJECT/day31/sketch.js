let slope, y1, y2, x1, x2; // Slope variables
const density = 0.5;
const radius = 100;
let size = 100;
let speed = -2;

function setup() {
  createCanvas(1080, 1080);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  x1 = width*.2, x2 = width*.7, y1 = height*.7, y2 = height*.1
  slope = (y2 - y1)/(x2 - x1);
}

function draw() {
  background(0);
  for (let x=x1; x<x2; x+=density) {
    let y = slope * (x - x1) + y1
    fill(180 + (frameCount+x)%180, 100, 100);
    push();
      translate(sin(y)*radius + x2, sin(y)*radius + y);
      ellipse(0, 0, size);
    pop();
    push();
      translate(sin(y)*radius + x2, sin(y)*radius + y + y1*.85);
      ellipse(0, 0, size);
    pop();
    push();
      translate(sin(y)*radius + x, sin(y)*radius + y);
      ellipse(0, 0, size);
    pop();
    push();
      translate(sin(y)*radius + x, sin(y)*radius + y1);
      ellipse(0, 0, size);
    pop();
    push();
      translate(sin(y)*radius + x2*.7 + x, sin(y)*radius + y1);
      ellipse(0, 0, size);
    pop();
  }
  speedFactor = sin(frameCount)*50;
  size += lerp(speed, speed*.5, speedFactor/90);
  if (size < 10 || size > 100) {
    speed *= -1;
  }
}