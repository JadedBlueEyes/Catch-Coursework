export default class Player {
    constructor(x, y) {
        this.position = {x: x, y: y};

    }

//window is 800x600
    update() {
        if (keyIsDown(LEFT_ARROW) && this.position.x > 0) {
            this.position.x -= 5;
        } else if (keyIsDown(RIGHT_ARROW) && this.position.x < 700) {
            this.position.x += 5;
        }
    }

    draw() {
        rect(this.position.x, this.position.y, 100, 100);
    }
}