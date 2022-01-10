import { insidePoly } from "./utils.js";

/**
 * Class used for drawing text
 */
export default class Text {
    /**
     * @param {String} text Text to display
     * @param {Number} x x-coords (top left)
     * @param {Number} y y-coords (top left)
     * @param {Number} [w] width for bounding box, not passed to p5 due to a bug in p5
     * @param {Number} [h] height for bounding box, not passed to p5 due to a bug in p5
     * @param {("top_left"|"top_center"|"top_right"|"center_left"|"center_center"|"center_right"|"bottom_left"|"bottom_center"|"bottom_right")} positioning How the text is positioned
     * @param {any} colour Colour of the text
     * @param {Number} size Size of the text
     */
    constructor(text, x, y, w, h, positioning, colour, size) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.positioning = positioning;
        this.colour = colour;
        this.size = size;
    }

    /**
     * Checks if the given point is within the text's bounding box. Requires the text to have a width and height
     * @param {Number} x point x
     * @param {Number} y point y
     */
    pointWithin(x, y) {
        let w = this.w/2;
        let h = this.h/2;
        return insidePoly(x, y, [
            [this.x-w, this.y-h], [this.x+w, this.y-h], 
            [this.x+w, this.y+h], [this.x-w, this.y+h]
        ])
    }

    /**
     * Draw onto given p5.js object
     * @param {any} p p5.js
     */
    draw (p) {
        switch (this.positioning) {
            case "top_left":
                p.textAlign(p.TOP, p.LEFT);
                break
            case "top_center":
                p.textAlign(p.TOP, p.CENTER);
                break
            case "top_right":
                p.textAlign(p.TOP, p.RIGHT);
                break
            case "center_left":
                p.textAlign(p.CENTER, p.LEFT);
                break
            case "center_center":
                p.textAlign(p.CENTER, p.CENTER);
                break
            case "center_right":
                p.textAlign(p.CENTER, p.RIGHT);
                break
            case "bottom_left":
                p.textAlign(p.BOTTOM, p.LEFT);
                break
            case "bottom_center":
                p.textAlign(p.BOTTOM, p.CENTER);
                break
            case "bottom_right":
                p.textAlign(p.BOTTOM, p.RIGHT);
                break
            default:
                break;
        }
        if (Array.isArray(this.colour)) {
            p.fill(...this.colour);
        } else {
            p.fill(this.colour);
        }
        p.textSize(this.size);
        p.strokeWeight(0.5);

        p.text(this.text, this.x, this.y)
    }
}