let side;

function setup() {
  createCanvas(1080, 1080);
  frameRate(12);
  side = width;
}

function draw() {
  background(0);
  fill(0);
  rect(0, 0, side, side);
  push();
    translate(width/2, height/2);
    rotate(frameCount/4);
    spiral();
  pop();
}

function lsOfPoints() {
    let pointsC = []
    for (let i=0; i<width*2; i++) {
        let t = i / 20 * PI;
        let x = (1 + 3 * t) * cos(t);
        let y = (1 + 5 * t) * sin(t);
        let s = sin(i)*20;
        pointsC.push([x, y, s]);
    }
    return pointsC;
}

function spiral() {
    noFill();
    strokeCap(ROUND);
    const points = lsOfPoints();
    push();
      stroke(255);
      beginShape();
        for (p of points) {
          strokeWeight(p[2]);
          vertex(p[0], p[1]);
        }
      endShape();
    pop();
}