function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    fill(255);
    if (mouseIsPressed) {
        ellipse(width / 2, height / 2, mouseX, mouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function mouseClicked() {}