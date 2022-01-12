import "./vendor/p5.js"

import Game from "./Game.js";
// import Game from "./Ball.js";
import MainMenu from "./MainMenu.js";

// const s = p => {
let game;
let mainMenu;

/**
 * @type {"MainMenu"|"Game"|"DeathMenu"|"Scoreboard"}
 */
let state;

let stateManager =
    (e) => {
        if (e === "play") {
            state = "Game"
            game = new Game(200, 200, 20, 4, 2);
        }
    }

window.setup = () => {
    window.createCanvas(800, 600);
    mainMenu = new MainMenu(window.width, window.height, 0, 0, stateManager);
    state = "MainMenu";

    // updateStepper()
};

window.draw = () => {
    window.clear()

    switch (state) {
        case "MainMenu":
            mainMenu.draw(window)

            // mainMenu.update()
            break;

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
    let x = window.mouseX;
    let y = window.mouseY;
    // console.log("click")
    mainMenu?.onClick(x, y)
}
// };

// let _ = new p5(s);