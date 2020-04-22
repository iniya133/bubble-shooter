function preload() {
    laserSound = loadSound('assets/laser.mp3');
  //  p = loadImage("assets/spaceship.jpg");
}

function setup() {
    createCanvas(400, 400);
    p = createVector(width / 2, height / 2);
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bubVel = [];
    bubSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bubVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(0);
   
    updatePlayer();
    updateBubbles();
    updateLasers();

}