const shapes = 10;
const size = 90;
const fSpeed = 24;

function setup() {
  createCanvas(1080, 1080);
  angleMode(DEGREES);
  frameRate(fSpeed);
  noFill();
  noLoop();
}

function draw() {

  background(0);
  let aVar = 0;
  for (let i=height*.1; i<height*.7; i+=(height*.6)/shapes) {
      gradient(width/2, i, size*4, size, color(255, 255, 255), color(0, 0, 255), lerp(0, 360, fSpeed%frameCount) + frameCount*fSpeed/2);
      aVar += 10;
  }
  // if (frameCount < 24) {
  //   save(`day9_${pad(frameCount, 3)}.png`);
  // }
}

function gradient(x, y, w, h, inner, outer, d) {
  const hw = w/2;
  const reps = 12;
  for (let i=0; i<w; i+=reps) {
    const step = i / w;
    for (let j=0; j<h; j+=reps) {
      const colour = lerpColor(inner, outer, step);
      push();
        stroke(colour);
        strokeCap(ROUND);
        strokeWeight(reps*8);
        translate(x -hw + i, y + h/2 + j);
        rotate(d);
        line(0, 0, 0, h); 
      pop();    
    }
  }
}

function mouseClicked() {
  noLoop();
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}