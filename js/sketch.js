function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    fill(255);
    if (mouseIsPressed) {
        ellipse(width / 2, height / 2, mouseX, mouseY);
    } else if (mouseX >= 100 && mouseX < 300) {
        fill(200, 0, 0);
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