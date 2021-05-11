// Script possible thanks to Roni Kaufman https://ronikaufman.github.io

let time1 = 0;
let time2 = 0;
const timeDecrease = .1;

function setup() {
  createCanvas(1080, 1080);
  noStroke();
}

function draw() {
  background(0, 0, 100);
  push();
  blendMode(ADD);
  drawingContext.shadowColor = 'FF0066';
  drawingContext.shadowBlur = 50;
  fill(255, 0, random(255));
  blob(width*.1, width*.5 + noise(time2*timeDecrease), height*.28 + noise(time2*timeDecrease + 2), noise(100), time2);
  blob(width*.12, width*.5 + noise(time2*timeDecrease), height*.64 + noise(time2*timeDecrease + 1), noise(200), time2*1.5);
  pop();
  time2 += 0.01;
  push();
  blendMode(ADD);
  drawingContext.shadowColor = '00FFFF';
  drawingContext.shadowBlur = 20;
  fill(0, 255, 255);
  blob(width*.1, width*.5 + noise(time1*timeDecrease), height*.28 + noise(time1*timeDecrease + 2), noise(100), time1);
  blob(width*.12, width*.5 + noise(time1*timeDecrease), height*.64 + noise(time1*timeDecrease + 1), noise(200), time1*1.5);
  pop();
  time1 += 0.2;
}

function blob(size, xCenter, yCenter, noiseVariations, time) {
  beginShape();
  for (let theta = 0; theta < 2 * PI; theta += 0.1) {
    let r1, r2;
    if (theta < PI/2) {
      r1 = cos(theta);
      r2 = 1;
    } else if (theta < PI) {
      r1 = 0;
      r2 = sin(theta);
    } else if (theta < 3 * PI/2) {
      r1 = sin(theta);
      r2 = 0;
    } else {
      r1 = 1;
      r2 = cos(theta);
    }
    let r = size + noise(noiseVariations * r1, noiseVariations * r2, time) * 0.8 * size;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    ellipse(x, y, size*1.2, size);
  }
  endShape();
}