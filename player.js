var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    fill(playerColor);//white
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    //flame stuff
    fill(boostColor)//green
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);//size=10
    pop();
    
    fill(255);
    text(Health, p.x - 10, p.y + 25)//Health starts with 200

    fill(255);
    text(Score, 375, 375);//starts with zero
    
    boostColor = color(0)
        //move and rotate player 

    // if (keyIsDown(LEFT_ARROW)) {
         heading = 25;
    // }
    // if (keyIsDown(RIGHT_ARROW)) {
    //     heading += 6;
    // }
    
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));//heading is 0,
        pVel.add(force.mult(0.2));//player velocity starts with zero
        boostColor = color(0, 255, 0);
    }

    //contain player
    if (p.x > 400) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 400
    }
    if (p.y > 400) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 400
    }

    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    
    

}