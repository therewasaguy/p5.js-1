function Particle(x, y, r, b) {
    this.x = x;
    this.y = y;
    this.o = 255;
    this.backupR = r;
    this.r = r;
    this.h = 255;
    this.b = 0;
    this.loc = createVector(this.x, this.y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.show = function() {
        fill(this.h, random(255), this.b, this.o);
        ellipse(this.loc.x, this.loc.y, this.r, this.r)
    };

    this.update = function() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
    };

    this.shrink = function() {
        if (this.r > .5) {
            this.r -= .15;
            this.b += .4;
            this.o += .2;
        }
        else {
            this.r = .5;
        }
    };

    this.applyForce = function(f) {
        this.acc.add(f);
    };

    this.resetParticle = function() {
        this.loc.x = this.x
        this.loc.y = this.y
        this.r = this.backupR;
        this.o = 0;
        this.b = 0;
        this.vel.mult(0);
    };

    this.edges = function() {
        if (this.loc.x < 0) {
            this.loc.x = 0;
            this.vel.x *= -1;
        }
        if (this.loc.x > width) {
            this.loc.x = width;
            this.vel.x *= -1;
        }
        if (this.loc.y < 0) {
            this.loc.y = 0;
            this.vel.y *= -1;
        }
        if (this.loc.y > height) {
            this.loc.y = height;
            this.vel.y *= -1;
        }
    }
}
