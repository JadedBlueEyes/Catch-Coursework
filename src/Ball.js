export default class Ball {
    constructor(x, y, radius, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    draw (p) {
        p.color(255);
        p.ellipse(this.x, this.y, this.diameter, this.diameter)
    }

    update (w, h) {
        this.x += this.velocityX
        this.y += this.velocityY
        this.bounce(w, h)
    }

    bounce (w, h) {
        if ((this.x - this.radius <= 0) | (this.x + this.radius >= w)) {
            console.log("bounce x")
            this.velocityX *= -1;
        }

        if ((this.y - this.radius <= 0) | (this.y + this.radius >= h)) {
            console.log("bounce y")
            this.velocityY *= -1;
        }
    }
}