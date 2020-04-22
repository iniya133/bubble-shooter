//bubble variables
var bb;//array
var bubVel;//array
var bubSize;//size=25
//var playerColor;
//var Health;Health starts at 200

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bb.length; i++) {
        
        push();
        stroke(255);
        fill(232, 12, 55,100 )
        ellipse(bb[i].x, bb[i].y, bubSize);
        bb[i].add(bubVel[i]);//update bb locations
       
        if (dist(bb[i].x, bb[i].y, p.x, p.y) < bubSize / 2) {//bubble collisions 
            touch = true;
        }
        
        //if bubbles go out of canvas bring them from other edge
        if (bb[i].x > width + bubSize / 2) {
            bb[i].x = 0
        }
        if (bb[i].x < -bubSize / 2) {
            bb[i].x = 400
        }
        if (bb[i].y > height + bubSize / 2) {
            bb[i].y = 0
        }
        if (bb[i].y < -bubSize / 2) {
            bb[i].y = 400
        }
        pop();
    }
    
    //action for collisions
    if (touch == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }
}