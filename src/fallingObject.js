const objectFallingSpeed = 1.25;
const objectFallingSize = 64;


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

        fill("red")

        image(this.sprite, this.x,this.y, objectFallingSize, objectFallingSize)

        pop();
    }
}