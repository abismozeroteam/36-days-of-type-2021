let mar; 

function preload() {
    mar = createVideo(['./0001_1.mp4']);
}

function setup(){
    createCanvas(1080, 1080);
    mar.play();
    mar.loop();
    mar.volume(0);
    mar.hide();
}

function draw() {
    background(0);
    image(mar, 0, 0);
}