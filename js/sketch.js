let mode = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {

    noFill();
    if (mouseIsPressed) {
        // dessine quelque chose de différent selon le mode actif
        if (mode == 0) {
            ellipse(mouseX, mouseY, mouseX / 3, mouseY / 3);
            if (mouseX > width / 2) {
                stroke(255, 100, 0)
            } else {
                stroke(0, 255, 0)
            }
        } else if (mode == 1) {
            rect(mouseX, mouseY, mouseX / 3, mouseY / 3);
            if (mouseX > width / 2) {
                stroke(150, 150, 0)
            } else {
                stroke(0, 0, 225)
            }

        } else if (mode == 2) {
            triangle(mouseX + 30, mouseY - 30, mouseX + 30, mouseY + 30, mouseX - 30, mouseY + 30);
            if (mouseX > width / 2) {
                stroke(125, 0, 125)
            } else {
                stroke(0, 100, 255)
            }

        }
    }
    // if (mouseIsPressed) {
    //     ellipse(mouseX, mouseY, mouseX / 3, mouseY / 3);
    //     if (mouseX > width / 2) {
    //         stroke(255, 100, 0);
    //     }
    // } else if (mode === 1) {
    //     rect(mouseX, mouseY, mouseX / 3, mouseY / 3)
    // } else if (mode === 2) {}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}



function keyPressed() {
    if (keyCode === BACKSPACE) {
        background(0);
    }

    // switch de mode selon la touche appuyée.
    if (key == "1") {
        mode = 0;
    }
    if (key == "2") {
        mode = 1;
    }
    if (key == "3") {
        mode = 2;
    }
}

function mouseClicked() {}