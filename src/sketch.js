import Game from "./Game.js";
import Menu from "./Menu.js";

const s = p => {
    let game;
    let menu;
    let state; // "MainMenu", "Game", "DeathMenu", "Scoreboard"

    p.setup = () => {
        p.createCanvas(800, 600);
        menu = new Menu(p.width, p.height, 0, 0);
    };

    p.draw = () => {
        // Draw everything
        menu.draw(p)

        // update
        menu.update()
    };

    p.mousePressed = () => {
        let x = p.mouseX;
        let y = p.mouseY;
        console.log("click")
        menu?.onClick(x, y)
    }
};

let _ = new p5(s);