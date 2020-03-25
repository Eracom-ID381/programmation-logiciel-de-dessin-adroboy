let mode = 0;
let tri = 90;

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
            rect(mouseX, mouseY, mouseX / 3, mouseX / 3);
            if (mouseX > width / 2) {
                stroke(250, 0, 0)
            } else {
                stroke(0, 0, 225)
            }

        } else if (mode == 2) {
            let tri = map(mouseX, 0, width, 0, 100);
            triangle(mouseX, mouseY - tri, mouseX - tri, mouseY + tri, mouseX + tri, mouseY + tri);

            if (mouseX > width / 2) {
                stroke(125, 0, 125)
            } else {
                stroke(250, 250, 0)
            }
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