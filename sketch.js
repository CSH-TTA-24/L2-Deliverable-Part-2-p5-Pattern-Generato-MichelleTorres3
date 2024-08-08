function setup() {
  createCanvas(500, 500);
  background(220, 220, 220);
}

function draw() {
  line(100, 250, mouseX, mouseY)
}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
    fill(r,g,b)
  clear()
   background(220, 220, 220);
}

