import Ball from "./Ball.js";

const s = p => {
  let ball;

  p.setup = function() {
    p.createCanvas(400, 400);
    ball = new Ball(200, 200, 20, 4, 2);
  };

  p.draw = function() {
    // Draw everything
    p.background(55);
    ball.draw(p)
    
    // calculate updates, etc.
    ball.move(p.width, p.height)
  };
};

let canvas = new p5(s);