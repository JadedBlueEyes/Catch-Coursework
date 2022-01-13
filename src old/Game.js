import Text from "./Text.js";
import Player from "./Player.js";

export default class Game {
    constructor(deathCallback, backgroundSprite) {
        this.player = new Player(width / 2 - 50, height - 150);
        
        this.backgroundSprite = backgroundSprite;
        this.fallingObjects = new Array();
    }
    
    update () {


        // update each falling object y position
        this.fallingObjects.forEach(fallingObject => {
            fallingObject.update();
        });
        this.player.update()
    }

    draw () {
        // background?
        // falling objects

        // player
        this.player.draw();

        // ui
        // this.text.draw();
    }
}

window.preload = function() {
    spaceship = loadImage("assets/spaceship.png");
    fuel = loadImage("assets/fuel.png");
}