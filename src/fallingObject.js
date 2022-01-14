const objectFallingSpeed = 5;
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