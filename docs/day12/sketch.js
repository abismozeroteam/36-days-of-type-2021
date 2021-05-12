let elle;

function preload() {
    elle = createVideo(['./LRender.mp4']);
}

function setup(){
    createCanvas(1080, 1080);
    elle.play();
    elle.loop();
    elle.volume(0);
    elle.hide(); 
}

function draw() {
    background(0);
    image(elle, 0, 0);
}



