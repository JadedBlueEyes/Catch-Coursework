// import Game from "./Game.js";
import Game from "./Ball.js";
import MainMenu from "./MainMenu.js";

const s = p => {
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

    p.setup = () => {
        p.createCanvas(800, 600);
        mainMenu = new MainMenu(p.width, p.height, 0, 0, stateManager);
        state = "MainMenu"
    };

    p.draw = () => {
        p.clear()

        switch (state) {
            case "MainMenu":
                mainMenu.draw(p)

                mainMenu.update()
                break;
            
            case "Game":
                game.draw(p)

                game.update(p.width, p.height)
            default:
                break;
        }
    };

    p.mousePressed = () => {
        let x = p.mouseX;
        let y = p.mouseY;
        // console.log("click")
        mainMenu?.onClick(x, y)
    }
};

let _ = new p5(s);