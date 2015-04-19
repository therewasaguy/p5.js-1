/* 
Draw with the mouse on the screen, click the 'animate' button and watch circles emerging from the depth.
*/

var b1;
var b2;
var d = 0;
var count;
var p = [];
var c;

function setup() {
    var c = createCanvas(1280, 720);
    c.position(0, 0);
    b1 = createButton('Reset');
    b1.mousePressed(reset);
    b1.position(c.width + 10, 12);
    b2 = createButton('Animate!');
    b2.mousePressed(startAnimation);
    b2.position(c.width + 10, 40);
    b3 = createButton('Save Image');
    b3.position(c.width + 10, 68);
    b3.mousePressed(saveImage);
    colorMode(HSB, 255);
    background(0, 200, 255);
    noStroke();
    cursor(CROSS);
}

function draw() {
    if (d === 0) {
        if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
            if (mouseIsPressed) {
                textOn = false;
                c = color(255, random(255), random(255));
                append(p, new Particle(mouseX, mouseY, random(25, 100), random(255)));
            }
        }
        for (var i=0; i<p.length; i++) {
            p[i].show();
        }
    }
    if (d === 1) {
        if (count < p.length) {
            for (var i=0; i<count; i++) {
                drawParticles(p[i]);
            }
            count ++;
        }
        else {
            for (var i=0; i<p.length; i++) {
                drawParticles(p[i]);
            }
        }
    }
}

function drawParticles(pi) {
    pi.show();
    var g = createVector(random(-.02, .02), random(-.02, .02));
    pi.applyForce(g);
    pi.shrink();
    pi.update();
    pi.edges();
}

function reset() {
    p = [];
    d = 0;
    background(0, 200, 255);
}

function startAnimation() {
    background(0);
    count = 0;
    d = 1;
    for (var i=0; i<p.length; i++) {
        p[i].resetParticle();
    }
}

function saveImage() {
    save('myFile.png');
}
