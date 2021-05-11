class GradEl {
  constructor(x, y, size, bg) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.bg = bg;
  }
  show(angle) {
    push();
      translate(this.x, this.y);
      rotate(angle);
      image(this.bg, -this.size*.5, -this.size*.5, this.size, this.size);
    pop();
  }
}

let grad1, grad2;
let gap = 60;
let density = -1;
const frPrSecnd = 12;
const gradSize = 180;

function preload() {
  grad1 = loadImage('grad1.png');
  grad2 = loadImage('grad2.png');
}

function setup() {
  createCanvas(1080, 1080);
  frameRate(frPrSecnd);
  angleMode(RADIANS);
}

function draw() {
  background(0);
  let bar = [];
  let stem = [];
  let currRect = 0;
  for (let x=width*.3; x<width*.7; x+=gap) {
    bar[currRect] = new GradEl(x, height*.25, gradSize, grad1);
    stem[currRect] = new GradEl(width*.5, x+gradSize*.5, gradSize, grad2);
    currRect++;
  }
  let phase = 2 * PI * (frameCount%frPrSecnd)/frPrSecnd;
  let stAn = PI*.4 * sin(phase);
  let enAn = PI*.6 * sin(phase + 0.5 * PI);
  for (let i=0; i<stem.length; i++) {
    let f = i/stem.length;
    angle = stAn + f * (enAn - stAn);
    stem[i].show(angle);
    bar[i].show(angle);
  }
  gap += density;
  if (gap >= 60 || gap <= 1) {
    density *= -1;
  }
}