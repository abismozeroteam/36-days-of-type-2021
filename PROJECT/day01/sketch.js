let aRender;

function preload() {
  aRender = loadImage('aRender.png');
}

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(0);
  tint(random(255), map(mouseX, 0, 255, 0, width), map(mouseY, 0, 255, 0, height)); 
  image(aRender, 0, 0);
}

function mousePressed() {
  saveFrames('day1', 'png', 1, 24);
}