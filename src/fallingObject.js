// height / Falling object speed  cannot be below width / player speed
// or it can become impossible for the player to reach the fuel in time
const objectFallingSpeed = 3.5;
const objectFallingSize = 48;


class FallingObject {
    constructor(x, sprite) {
        this.x = x;
        this.sprite = sprite;

        // Spawn offscreen to avoid sudden pixels
        this.y = -objectFallingSize;
    }

    update() {
        this.y += objectFallingSpeed;
    }

    draw() {
        push();

        fill("red")

        image(this.sprite, this.x, this.y, objectFallingSize, objectFallingSize)

        pop();
    }
}