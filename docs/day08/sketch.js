let stripe, offset, fv;
const s = 2;

function setup() {
  createCanvas(1080, 1080);
  stripe = width/100;
  offset = 0;
  noStroke();
  frameRate(12);
}

function draw() {

  background(0);

  for (let i=-stripe; i < width; i+=stripe*2) {
    if (i < width*.25) {
      fv = lerp(0, 255, i/(width*.25));
    } else if (i > width*.75) {
      fv -= 255*(stripe/(width*.25));
    } 
    push();
      fill(255, 255, 255, fv)
      rect(i + offset, 0, stripe, height);
    pop();
    push();
      fill(0)
      rect(width*.3 - stripe, 0, width*.4 + stripe, height);
    pop();
  }

  for (let i=0; i < width; i+=stripe*2) {
    if (i < width*.45) {
      fv = lerp(0, 255, i/(width*.45));
    } else if (i > width*.55) {
      fv -= 255*(stripe/(width*.45));
    } 
    push();
    fill(255, 255, 255, fv)
    rect(width*.3, i + offset, width*.4 - stripe, stripe);
    pop();
  }

  if (offset > stripe*2) {
    offset = 0;
  }
  offset += s;

  // if (frameCount < 24 ) {
  //   save(`day8_${pad(frameCount, 2)}.png`);
  // }
  
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}