let e;

function preload() {
  e = loadModel('./E.obj', true);
}

function setup() {
  createCanvas(1080, 1080, WEBGL);
}

function draw() {
  background(0);
  model(e);
}