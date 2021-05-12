
let h, w, stColor;
let m = .1;
let r = 20;

function setup() {
  createCanvas(1080, 1080);
  noFill();
  setAttributes('antialias', true);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  w = width;
  h = height;
  background(0);
  frameRate(12);
  stColor = ['#000000', '#FFFFFF'];
  blendMode(DIFFERENCE);
}

function draw() {
  translate(random(-r, r), random(-r, r));
  stroke(random(stColor));
  strokeWeight(random(width*.5));
  beginShape();
    //Bar
    vertex(w*m*5.5, h*m*5.5);
    bezierVertex(w*m*8, h*m*5.5, w*m*8, h*m*5.5, w*m*9, h*m*5.5);
    //Curve
    bezierVertex(w*m*9, h*m*8.3, w*m*6.5, h*m*9, w*m*5.1, h*m*9);
    bezierVertex(w*m*2.5, h*m*9, w*m, h*m*7, w*m, h*m*4.9);
    bezierVertex(w*m, h*m*2.7, w*m*2.5, h*m, w*m*5.1, h*m);
    bezierVertex(w*m*6.2, h*m*1, w*m*7.7, h*m*1.4, w*m*8.8, h*m*2.9);
  endShape();

  // if (frameCount <= 24*5 ) {
  //   save(`day7_${pad(frameCount, 3)}.png`);
  // }
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}