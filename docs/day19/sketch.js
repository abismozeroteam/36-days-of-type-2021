let thickness, angle;
const exp = 30;
const divs = 4;
const radius = 260;

function setup() {
  createCanvas(1080, 1080);
  frameRate(12);
  thickness = width*0.04;
  angleMode(DEGREES);
  blendMode(SCREEN);
  
}

function draw() {
  background(0);
  let c = 0
  let tpoints = tpPts();
  let bpoints = btPts();
  for (const myPoint of tpoints) {
      angle = frameCount;
      let num = floor(random(1, 3));
      push();
          translate(myPoint[0] + random(-exp, exp), myPoint[1] + random(-exp, exp))
          shape(num, angle);
      pop();
  }
  for (const myPoint of bpoints) {
    angle = frameCount;
    let num = floor(random(1, 3));
    push();
        translate(myPoint[0] + random(-exp, exp), myPoint[1] + random(-exp, exp))
        shape(num, angle);
    pop();
  }
}

function btPts() {
    let points = []
    let x, y;
    for (let i=-130; i<210; i+=divs/4) {
      x = radius * cos(noise(i)*i) + (width/2);
      y = radius*.8 * sin(noise(i)*i) + (height*.7);
      points.push([x, y]);
    }    
    return points
}
function tpPts() {
  let points = []
  let x, y;
  for (let i=-340; i<-180; i+=divs/4) {
    x = radius * cos(noise(i)*i) + (width/2);
    y = radius*.8 * sin(noise(i)*i) + (height*.3);
    points.push([x, y]);
  }    
  return points
}
    
function shape(num, angle) {
    fill(random(200, 255), random(0, 255), random(0, 255), 3);
    if (num === 1) {
      push();
      rotate(angle);
      rect(-thickness/2, -thickness/2, thickness, thickness);
      pop();
    }      
    if (num === 2) {
      push();
      rotate(angle);
      ellipse(-thickness/2, -thickness/2, thickness);
      pop();
    }     
    if (num == 3) {
      push();
      rotate(angle);
      triangle(
          -thickness/2, -thickness/2,
          thickness/2, -thickness/2,
          0, sqrt(3*thickness)/2 + (thickness/2)
      );
      pop();
    }
}