let coords1 = [];
let coords2 = [];

function setup() {
  createCanvas(1080, 1080, WEBGL);
  frameRate(24);
  let coordCount = 0;
  for(let x=-width*.3; x<width*.3; x+=width*.005){
      coords1[coordCount] = { x: x*.5 -width*.15, y: x };
      coords2[coordCount] = { x: -x*.5 + width*.15, y: x };
      coordCount += 1;
  }
  noStroke()
  specularColor(200, 0, 200);
  specularMaterial(0, 0, 255);
  shininess(2);
}

function draw() {
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(100, 0, 100, -dirX*2, -dirY*2, -1);
  pointLight(250, 250, 250, -100, -100, -240);
  plane(width, height);
  for(let i=0; i<coords1.length; i++){
    sphereEl(coords1[i].x, coords1[i].y, sin(frameCount)*1);
    sphereEl(coords2[i].x, coords2[i].y, cos(frameCount)*1);
  }
}

function sphereEl(x, y, z, size=100) {
  push();
  stroke(0, 0, 0);
  strokeWeight(.5);
  translate(x, y, z);
  rotateY(frameCount*.125);
  box(size);
  pop();
}