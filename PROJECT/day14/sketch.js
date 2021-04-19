let ene;

function preload() {
    ene = createVideo(['./NRender_A.mp4']);
}

function setup(){
    createCanvas(1080, 1080);

    ene.play();
    ene.loop();
    ene.volume(0);
    ene.hide();
    
    
}

function draw() {
    background(0);
    image(ene, 0, 0);
}

