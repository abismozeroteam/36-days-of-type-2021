let e;
let speed = .01;
const es = 100;
let x, y, z;

// Number.prototype.pad = function(size) {
//   let s = String(this);
//   while (s.length < (size || 2)) {s = "0" + s;}
//   return s;
// }

class ThreeDE {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.f = color(random(100), random(100, 255), random(100, 255));
    this.ranMaterial = Math.floor(random(4));
  }

  show(fc) {
    rotateZ(180);
    shininess(random(1));
    push();
      if (this.ranMaterial === 0) {
        rotateX(90);
        specularMaterial(random(20));
      } else if  (this.ranMaterial === 1) {
        specularMaterial(random(200, 255));
      } else if (this.ranMaterial === 2) {
        specularMaterial(random(255));
      } else {
        specularMaterial(random(10));
      }

      specularColor(random(255));
      pointLight(random(200, 255), random(200, 255), random(10), random(-100, 100), random(-100, 100), random(-100, width));
      fill(this.f)
      translate(this.x, this.y, this.z);
      rotateX(fc)
      rotateY(fc)
      model(e);
    pop();
  }

}

let esArray = [];

function preload() {
  e = loadModel('./E.obj', true);
}

function setup() {

  createCanvas(1080, 1080, WEBGL);
  frameRate(24)
  noStroke();

  for (let i=0; i<es; i++){
    esArray[i] = new ThreeDE( random(width), random(height), random(-width*2, width*2));
  }

  perspective(PI / -2.0, width / height, 0.1, -50);

}

function draw() {
 
  push();
    shininess(random(2));
    specularMaterial(random(200, 255), random(200, 255), 0);
    translate(0, 0, -1080*3)
    scale(12);
    specularColor(random(255), random(200, 255), random(100));
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -10);
    plane(width, height, 10);
  pop();

  for (let i=0; i<es; i++) {
    esArray[i].show(frameCount/12);
  }
  
  // if (frameCount < 76 ) {
  //   save( "day5_" + frameCount.pad(2) + ".png");
  // }
}