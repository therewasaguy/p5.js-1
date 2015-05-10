function peload() {
    h1 = loadStrings("data/hands01Transform01.txt");
    h2 = loadStrings("data/hands01Transform01.txt");
    console.log("preload");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(255);
    noStroke();
    fill(255);
    blendMode(DIFFERENCE);
    rectMode(CENTER);
    textAlign(CENTER);
    p = [];
}

function draw() {
    if (mouseIsPressed) {
        append(p, new Particle(mouseX, mouseY));
    }
    for (var i = 0; i < p.length; i++) {
        addFriction(p[i]);
        addNoise(p[i]);
        p[i].update();
        p[i].show();
    }
}

function killParticle(particle) {
    if (particle.r < 1) {
        var k = p.indexOf(particle);
        p.splice(k, 1);
    }
}

function addFriction(particle) {
    var f = particle.vel.copy();
    f.normalize();
    f.mult(-1);
    f.mult(0.5);
    particle.applyForce(f);
}

function addNoise(particle) {
    var n = createVector(random(-1, 1), random(-1, 1));
    particle.applyForce(n);
}

function addGravity(particle) {
    var g = createVector(0, 1);
    particle.applyForce(g);
}

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(25);
    this.loc = createVector(this.x, this.y);
    this.vel = createVector(mouseX, mouseY).sub(createVector(pmouseX, pmouseY));
    this.acc = createVector(0, 0);
    this.b = 255;
    this.t = String([0,1,2,3,4,5,6,7,8,9][int(random(10))]);

    this.show = function() {
        fill(color(255, random(155), random(255)));
        noStroke();
        rect(this.loc.x, this.loc.y, this.r, this.r);
    };

    this.update = function() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
        if (this.r > 0) {
            this.r /= 1.1;
        }
    };

    this.applyForce = function(f) {
        this.acc.add(f);
    };
}
