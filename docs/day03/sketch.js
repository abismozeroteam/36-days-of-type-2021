let c;
const frames = 24;

Number.prototype.pad = function(size) {
  let s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function preload() {
  c = loadModel('./C.obj', true);
}

function setup() {
  createCanvas(1080, 1080, WEBGL);
  frameRate(frames);
  noStroke();
}

function draw() {
  ambientLight(10);

  fill(255, 0, 255);
  shininess(1);
  specularMaterial(255, 0, 255);
  pointLight(255, 0, random(100, 255), 255, -1080, 500);
  plane(width, height);

  scale(2.2);
  translate(0, 0, 150);
  rotateY(frameCount/12);
  rotateZ(frameCount/12);
  shininess(1);
  specularColor(0, 255, 255);
  pointLight(0, 255, 255, 255, -500, 500);
  specularColor(255, 0, 255);
  pointLight(0, 0, 255, 0, -height*.5, height*.5);
  specularMaterial(0, 255, 255);
  noSmooth();
  push();
  stroke(0);
  strokeWeight(0.5);
  model(c);
  pop();
  if (frameCount < 76 ) {
    save( "day3_" + frameCount.pad(2) + ".png");
  }
}