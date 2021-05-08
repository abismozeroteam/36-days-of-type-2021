// Script possible thanks to Roni Kaufman https://ronikaufman.github.io

let six;

function setup() {
  createCanvas(1080, 1080);
  noFill();
  strokeCap(ROUND);
  strokeWeight(9);
}

function draw() {
  background(0);
  translate(sin(frameCount*.025)*10 + 30, cos(frameCount*.025)*10)
	let offset = (frameCount/80)%1;
	for (let i = 1+offset; i <= 42+offset; i++) {
    if (floor(i) === 1) {
      stroke(0, 0, offset*255);
    } else if (floor(i) == 42) {
      stroke(0, 0, 255, 255-offset*255);
    } else {
      stroke(0, 0, 255);
    }
		let size = 4*i;
		let noisiness = 30*sqrt(i);
		let k = sqrt(i)/10;
		let t = frameCount/300 - i/50;
  	blob(size, width*.5, height*.59, k, t, noisiness);
    if (floor(i) === 1) {
      stroke(offset*255, 0, 0);
    } else if (floor(i) == 42) {
      stroke(255, 0, 0, 255-offset*255);
    } else {
      stroke(255, 0, 0);
    }
    halfBlob(size, width*.5, height*.5, k, t, noisiness);
    if (floor(i) === 1) {
      stroke(255, 0, offset*255);
    } else if (floor(i) == 42) {
      stroke(255, 0, 255, 255-offset*255);
    } else {
      stroke(255, 0, 255);
    }
    sixBlob(size, width*.5, height*.5, k*.9, t, noisiness);
    if (floor(i) === 1) {
      stroke(0, offset*255, 255);
    } else if (floor(i) == 42) {
      stroke(0, 255, 255, 255-offset*255);
    } else {
      stroke(0, 255, 255);
    }
    fullBlob(size, width*.5, height*.6, k, t, noisiness);
	}
}

function sixBlob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = PI*1.3 / 30;
  for (let theta = HALF_PI*.8; theta <= PI*1.6 + 3 * angleStep; theta += angleStep) {
		let r1 = cos(theta)+1;
		let r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta) * 1.3;
    let y = yCenter + r * sin(theta) * 1.6;
    curveVertex(x, y);
  }
  endShape();
}

function halfBlob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = PI*1.3 / 30;
  for (let theta = QUARTER_PI; theta <= PI*1.5 + 3 * angleStep; theta += angleStep) {
		let r1 = cos(theta)+1;
		let r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta) * 1.3;
    let y = yCenter + r * sin(theta) * 1.6;
    curveVertex(x, y);
  }
  endShape();
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = TWO_PI / 30;
  for (let theta = PI*1.5; theta <= TWO_PI*1.3 + 3 * angleStep; theta += angleStep) {
		let r1 = cos(theta)+1;
		let r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta)*1.2;
    curveVertex(x, y);
  }
  endShape();
}

function fullBlob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = TWO_PI / 30;
  for (let theta = 0; theta <= TWO_PI + 3 * angleStep; theta += angleStep) {
		let r1 = cos(theta)+1;
		let r2 = sin(theta)+1;
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta)*1.2;
    curveVertex(x, y);
  }
  endShape();
}