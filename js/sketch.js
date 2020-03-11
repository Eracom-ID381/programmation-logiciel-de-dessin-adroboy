function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    noFill();
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, mouseX / 3, mouseY / 3);
        if (mouseX > width / 2) {
            stroke(255, 100, 0)
        } else {
            stroke(0, 255, 0);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function keyPressed() {
    if (keyCode === BACKSPACE) {
        background(0);
    }
}

function mouseClicked() {}