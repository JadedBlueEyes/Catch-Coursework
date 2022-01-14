const playerSize = 48;
const playerSpeed = 5;

class Player {
    constructor(sprite) {
        this.position = { x: width / 2, y: height - 80 };
        this.sprite = sprite;
        this.tilt = false;
    }

    update() {
        this.tilt = false;

        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // keycode 65 = "a"
            // prevent player crossing left side of screen
            if (this.position.x - playerSize / 2 > playerSpeed) {
                this.position.x -= playerSpeed;
                this.tilt = true;
            }
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // keycode 68 = "d"
            // prevent player crossing right side of screen
            if (this.position.x + playerSize / 2 < width - playerSpeed) {
                this.position.x += playerSpeed;
                this.tilt = true;
            }
        }
    }

    draw() {
        push();

        imageMode(CENTER);
        image(this.sprite, this.position.x, this.position.y, playerSize - (this.tilt ? playerSize / 4 : 0), playerSize);

        pop();
    }
}