const shapeSize = 162;
const d = 10;
let lp = true;

Number.prototype.pad = function(size) {
  let s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  frameRate(24);
}

function draw() {
  const sDist = shapeSize/10;
  let contourx = width*.7;
  let barx = width*.6;
  let contoury = height*.25;
  let contourd = frameCount/12;

  background(0);

  fv = 0
  while (contourx > width*.4) {
    contourx -= sDist;
    if (barx > width*.45) {
      barx -= sDist;
    }
    shape(contourx, contoury, fv, contourd);
    shape(barx, height*.6, fv, contourd);
    fv += 1
  }
  while (contoury < height*1.1) {
    contoury += sDist;
    shape(contourx, contoury, fv, contourd);
    fv += 1
  }

  // if (frameCount <= 76 ) {
  //   save(`day6_${frameCount.pad(2)}.png`);
  // }

  // if (!lp) {
  //   noLoop();
  // }
}

function shape(xt, yt, fv, deg, density=d, size=shapeSize) {
  let fillVar = fv;
  push(); 
    translate(xt, yt);
    rotate(deg)
    for (let x=0; x < density; x++) {
      for (let y=0; y < density; y++) {
        f = 255;
        if (fillVar%2 === 0) {
          f = 0;
        }
        fill(f);
        rect(x*(size/density), y*(size/density), size/density);
        fillVar += 1;
      }
      fillVar += 1;
    }
  pop();

}

// function mousePressed() {
//   lp = true;
//   loop();
// }

// function mouseReleased() {
//   lp = false;
// }