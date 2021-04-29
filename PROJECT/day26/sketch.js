let letra; 
function preload() {
    letra = createVideo(['./zRender.mp4']);
}

function setup(){
    createCanvas(1080, 1080);
    letra.play();
    letra.loop();
    letra.volume(0);
    letra.hide();
}

function draw() {
    background(0);
    image(letra, 0, 0);
}
