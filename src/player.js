const playerSize = 48;

class Player {
    constructor(sprite) {
        this.position = { x: width / 2, y: height - 80 };
        this.sprite = sprite;
    }

    update() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // keycode 65 = "a"
            this.position.x -= 2;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // keycode 68 = "d"
            this.position.x += 2;
        }
    }

    draw() {
        push();

        imageMode(CENTER);
        image(this.sprite, this.position.x, this.position.y, playerSize, playerSize);

        pop();
    }
}