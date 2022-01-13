

/**
 * Class used for drawing text
 */
export default class Text {
    /**
     * @param {String} text Text to display
     * @param {Number} x x-coords (top left)
     * @param {Number} y y-coords (top left)
     * @param {any} vAlign How the text is positioned vertically
     * @param {any} hAlign How the text is positioned horizontally
     * @param {any} colour Colour of the text
     * @param {Number} [size] Size of the text
     */
    constructor(text, x, y, vAlign, hAlign, colour = "#FFFFFF", size) {
        this.text = text;
        this.position = {x: x, y: y};
        this.positioning = {v: vAlign, h: hAlign};
        this.colour = colour;
        this.size = size;
    }

    /**
     * Draw onto given p5.js object
     * @param {any} p p5.js
     */
    draw (p = window) {
        p.textAlign(this.positioning.h, this.positioning.v);

        p.fill(this.colour);
        
        p.textSize(this.size);
        p.strokeWeight(0.5);

        p.text(this.text, this.position.x, this.position.y)
    }
}