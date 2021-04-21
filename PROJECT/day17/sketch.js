let img; 

function setup() {
  createCanvas(1080, 1080);
  img = loadImage('qPhoto.jpg')
}

function draw() {
  background(0);
  image(img, 0, 0);
}