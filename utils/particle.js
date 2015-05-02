function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.loc = createVector(this.x, this.y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector(0, 0);

    this.show = function() {
        noStroke();
        fill(255)
        ellipse(this.loc.x, this.loc.y, 10, 10)
    };

    this.update = function() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
    };

    this.applyForce = function(f) {
        this.f = f;
        this.acc.add(f);
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
    };
}
