import Text from "./Text.js";

export default class MainMenu {
    constructor(w, h, x, y, cb) {
        this.gameNameText = new Text("Matrix Catch", x + (w/2), y + (h/4), undefined, undefined, "center_center", [255], 30)
        this.playText = new Text("Play!", x + (w/2), y + (h/2), 24*5, 24*1.5, "center_center", [255], 24)
        // this.scoreboardText = new Text("Scoreboard!", x + (w/2), y + ((h/4)*3), 24*10, 24*1.5, "center_center", [255], 24)

        this.cb = cb || ( (x) => { console.log(x) } )
    }

    onClick(x, y) {
        // console.log("menu click")
        if (this.playText.pointWithin(x, y)) {
            this.cb("play")
        }

    }

    update () {

    }

    /**
     * @param {any} p p5.js
     */
    draw (p) {
        this.gameNameText.draw(p)
        this.playText.draw(p)
    }
}