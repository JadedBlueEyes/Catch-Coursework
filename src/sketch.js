/*

P5 is being used.

p5 calls preload as the page loads,
setup once when the page loads,
and draw once every frame.

*/

// Global variables

let score;
let lives;
/**
 * @type { "running" | "gameOver"}
 */
let state;
let fallingObjects;
let fallingObjectSpawnTimeout;

let player;
let stars;

let fallingObjectImage;
let spaceshipImage;

const starCount = 256;

function resetGame() {
    score = 0;
    lives = 5;
    state = "running"
    fallingObjects = [];
    fallingObjectSpawnTimeout = Date.now() + 100 + random(0, 500);
    // the "100 +" adds a minimun spawn time of 100ms so they dont spawn straight after each other
}

function preload() {
    // load assets for main game - fuel, spaceship pngs
    fallingObjectImage = loadImage("assets/fuel.png");
    spaceshipImage = loadImage("assets/spaceship.png");
}

function setup() {
    createCanvas(800, 600);

    // reset all game values to defaults
    resetGame();

    // initialise star array
    stars = new Array();

    // populate star array
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star(Math.random() * width, Math.random() * height));
    }

    player = new Player(spaceshipImage);
}

function draw() {
    // the following code is just for me to test - ben

    // main game-loop
    // 1) process input
    // 2) update objects
    stars.forEach(star => {
        star.update();
    });

    player.update();

    if (state === "running") {
        if (fallingObjectSpawnTimeout <= Date.now()) {
            fallingObjects.push(new FallingObject(Math.random() * (width - objectFallingSize * 2) + objectFallingSize, fallingObjectImage))
            fallingObjectSpawnTimeout = Date.now() + random(1500, 5000);
        }

        // Update falling objects
        fallingObjects = fallingObjects.filter((object) => {
            object.update()
            // If offscreen, remove a live, check for 0 lives, die.
            if (object.y > height + objectFallingSize) {
                lives -= 1;
                if (lives < 0) {
                    state = "gameOver"
                }
                return false;
            }
            return true;
        })
    }


    // 3) draw objects
    background("#2d2d2d");

    stars.forEach(star => {
        star.draw();
    });

    fallingObjects.forEach((object) => {
        object.draw()
    })

    player.draw();



    // draw score
    if (state === "running") {
        push();

        textAlign(LEFT, TOP);
        textSize(20);
        strokeWeight(1.5);
        fill("#5050FF");
        text("Score: " + score, 15, 15)
        text("Lives: " + lives, 15, 40)

        pop()
    }

    // draw death screen
    if (state === "gameOver") {
        push();

        textAlign(CENTER, CENTER);
        textSize(32);
        strokeWeight(2);
        fill("#FF5050");
        text("YOU DIED!", width / 2, height / 3)


        textAlign(CENTER, BOTTOM);
        textSize(24);
        strokeWeight(2);
        fill("#50F050");
        text("Score: " + score, width / 2, height / 2)

        pop()

    }

}
