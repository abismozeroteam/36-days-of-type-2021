let pg, myFont;
let boxSize;
let t = '';
const tReps = 8;


function preload() {
  myFont = loadFont('./PressStart2P-Regular.ttf')
}

function setup() {
  createCanvas(1080, 1080, WEBGL);
  pg = createGraphics(200, 200);
  pg.textSize(20);
  pg.textAlign(LEFT);
  pg.textFont(myFont);
  pg.background(255, 255, 255, 150);
  boxSize = width*.3;
  for(let l=0; l<7; l++) {
    for (let i=0; i<tReps; i++) {
      t += 'K';
    }
    t += '\n'
  }
  noFill();
  strokeWeight(10);
  frameRate(24);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  let kleur = color(map(mouseY/10, 0, 255, 0, height), 100, 100);
  stroke(kleur);
  background(kleur);
  for (let i=0; i<100; i++) {
    push();
      noStroke();
      fill(255);
      ellipse(random(-width,width), random(-height,height), random(1, 10));
    pop();
  }
  pg.fill(kleur);
  pg.text(t, 20, 40);
  texture(pg);
  scale(1.5);
  rotateX(frameCount/24);
  rotateY(frameCount/24);
  box(boxSize);
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}