let zendots, zOffset;
let speed = 30;
let easing = 0.5;

function preload() {
  zendots = loadFont('./ZenDots-Regular.ttf');
}

function setup() {
  createCanvas(1080, 1080, WEBGL);
  textFont(zendots);
  textAlign(CENTER);
  zOffset = width*.1;
}

function draw() {
  background(0);
  push();
    noFill();
    stroke(255);
    strokeWeight(10);
    box(width, width, width*15);
  pop();
  push();
    textSize(900);
    for (let i=0; i<10000; i += 2000) {
      push();
        translate(0, width*.26, zOffset+i);
        rotateZ(random(-0.3, 0.2));
        fill(255);
        text('2', 0, random(-width*.03, width*.02));
      pop();
    }
  pop();
  let easeFactor = width/2;
  zOffset += lerp(speed, speed*easing, easeFactor/width);
  easeFactor += speed;
  if (zOffset > width*.1 || zOffset < -width*15) {
    speed *= -1;
  }
}