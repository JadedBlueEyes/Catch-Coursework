// height / Falling object speed  cannot be below width / player speed
// or it can become impossible for the player to reach the fuel in time
const objectFallingSpeed = 3.5;
const objectFallingSize = 48;


class FallingObject {
    constructor(x, sprite) {
        this.position = new Vector2(
            x, -objectFallingSize
        );
        this.sprite = sprite;
    }

    update() {
        this.position.y += objectFallingSpeed;
    }

    draw() {
        push();

        image(this.sprite, this.position.x, this.position.y, objectFallingSize, objectFallingSize)

        pop();
    }
}