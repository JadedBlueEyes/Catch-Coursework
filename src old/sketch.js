import "./vendor/p5.js"

import Game from "./Game.js";
// import Game from "./Ball.js";


// const s = p => {
let game;
let mainMenu;

/**
 * @type {"Game"|"DeathMenu"}
 */
let state;

let spaceship;
let fuel;

window.preload = function() {
    spaceship = loadImage("assets/spaceship.png");
    fuel = loadImage("assets/fuel.png");
}

window.setup = function() {
    window.createCanvas(800, 600);
    game = new Game();
    state = "Game";

    // updateStepper()
};


window.draw = function() {
    window.clear()

    switch (state) {
        case "Game":
            game.draw(window)

        // game.update(p.width, p.height)
        default:
            break;
    }

    update()
};

function update () {
    switch (state) {
        case "MainMenu":
            // mainMenu.draw(p)

            mainMenu.update()
            break;

        case "Game":
            // game.draw(p)

            game.update(window.width, window.height)
        default:
            break;
    }
}


// let interval = 16; // ms
// let expected = Date.now() + interval;
// // setTimeout(updateStepper, interval);
// // 
// function updateStepper() {
//     var dt = Date.now() - expected; // the drift (positive for overshooting)
//     if (dt > interval) {
//         console.log("Game updates behind, running catchup")
//         console.log(dt, dt % interval)
//         for (let i = 0; i < (dt % interval); i++) { 
//             console.log(i+1)
//             update()
//         }
//     }

//     update()


//     expected += interval;
//     window.setTimeout(updateStepper, Math.max(0, interval - dt)); // take into account drift
// }


window.mousePressed = () => {

    game = new Game();
}