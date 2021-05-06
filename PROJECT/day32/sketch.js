let render; 

function preload() {
  render = loadImage('./5Render.png');
}

function setup(){
  createCanvas(1080, 1080);
}

function draw() {
  background(0);
  image(render, 0, 0);
}

