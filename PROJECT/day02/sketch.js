let pages, page1, page2;

Number.prototype.pad = function(size) {
  let s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function preload() {
  page1 = loadImage('./BRender_1.png');
  page2 = loadImage('./BRender_2.png');
}


function setup() {
  createCanvas(1080, 1080);
  frameRate(2);
}

function draw() {
  let page;
  if (frameCount % 2 === 0) {
    page = page1;
  } else {
    page = page2;
  }
    
  background(0);
  image(page, 0, 0);

  if (frameCount <= 4 ) {
    save( "day2_" + frameCount.pad(2) + ".png");
  }
}