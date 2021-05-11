let d;
const pixelSize = 54/4;
const r = 200;
const rs = 100;

function preload() {
  d = loadImage('./D.png');
}

function setup() {
  createCanvas(1080, 1080);
  frameRate(6);
  cursor('./azero.png');
}

function draw() {
  background(0);

  let fVal = map(mouseY, 0, height, 0.1, 0.9)

  translate(0, -height*.06)
  for (let x=0; x<height; x+=pixelSize) {
		for (let y=0; y<width; y+=pixelSize) {
			fill(d.get(x, y));
			noStroke();
			rect(
        x + (width - d.width)*.5 + noise(random(-r, r)*rs)*5,
        y + (height - d.height)*.5 + noise(random(-r, r))*rs,
        pixelSize, pixelSize
      )
		}
	}
  filter(THRESHOLD, fVal);
}