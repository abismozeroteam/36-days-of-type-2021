const stWght = 2;
const frames = 12;
let inc = 0;
let speed = .1;

function setup() {
  createCanvas(1080, 1080);
  frameRate(frames);
  angleMode(RADIANS);
  noFill();
  strokeWeight(stWght);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  push();
    for (let i=-width; i<width; i+=2) {
      // push();
      //   stroke(255, 0, 255);
      //   translate(i*stWght, i*stWght);
      //   line(width*.5, -height*.5, -width*.5, height*.5);  
      // pop();
      // push();
      //   stroke(0, 255, 255);
      //   translate(i*stWght, -i*stWght);
      //   line(-width*.5, -height*.5, width*.5, height*.5);
      // pop();
      push();
        stroke(255);
        rotate(frameCount*.00006);
        translate(sin(i*stWght) * width*inc, cos(i*stWght) * width*inc);
        line(-width*.5, -height*.5, width*.5, height*.5);
        line(width*.5, -height*.5, -width*.5, height*.5);
      pop();
    }
  pop();
  inc += speed;
  if(inc >= 1 || inc <= 0) {
    speed *= -1;
  }
}