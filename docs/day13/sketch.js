let pxNum = 11;
let pixels = [];
let pixelSize;
let mpxs = [];

class Pixel {
  constructor (x, y, size) {
    this.x = x;
    this.y = y;
    this.s = size;
    this.inPlace = false;
  }
  show () {
    push();
      fill(255);
      rect(this.x, this.y, this.s);
    pop();
  }
  ranDisp () {
    if (!this.inPlace) {
      if (this.x > width - this.s) {
        this.x -= pixelSize;
      } else if (this.x < pixelSize) {
        this.x += this.s;
      } else {
        this.x += Math.round(random(-1, 1)) * this.s;
      }
      if (this.y > height - this.s) {
        this.y -= pixelSize;
      } else if (this.y < pixelSize) {
        this.y += this.s;
      } else {
        this.y += Math.round(random(-1, 1)) * this.s;
      }
    }
  }
  isInPlace () {
    this.inPlace = true;
  }
}

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  frameRate(12);
  pixelSize = width/pxNum;
  for(let i=0; i<100; i++) {
    const randomX = random(width);
    const randomY = random(height);
    pixels[i] = new Pixel(randomX - (randomX % pixelSize), randomY - (randomY % pixelSize), pixelSize);
  }
  const stem = 7;
  for (let i=0; i<stem; i++) {
    mpxs.push([pixelSize*2, pixelSize*2 + pixelSize*i]);
    mpxs.push([pixelSize*8, pixelSize*2 + pixelSize*i]);
    if (i < 1) {
      mpxs.push([pixelSize*3, pixelSize*3 + pixelSize*i]);
      mpxs.push([pixelSize*7, pixelSize*3 + pixelSize*i]);
    } else if (i < 3) {
      mpxs.push([pixelSize*4, pixelSize*3 + pixelSize*i]);
      mpxs.push([pixelSize*6, pixelSize*3 + pixelSize*i]);
    } else if (i > 4) {
      mpxs.push([pixelSize*5, pixelSize*1 + pixelSize*i]);
    }
  }
}

function draw() {
  background(0);
  for (let i=0; i<pixels.length; i++) {
    for (coord of mpxs) {
      if (pixels[i].x <= coord[0] + 1 && pixels[i].x >= coord[0] - 1 && pixels[i].y <= coord[1] + 1 && pixels[i].y >= coord[1] - 1) {
        pixels[i].isInPlace();
      }
    }
  }
  for (pixel of pixels) {
    pixel.show();
    pixel.ranDisp();
  }
}