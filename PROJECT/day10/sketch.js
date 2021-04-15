let jRender;

function preload() {
  jRender = loadImage('./jRender.jpg');
}

function setup() {
  createCanvas(1080, 1080);
}

function draw() {
  background(0);
  image(jRender, 0, 0);
}