function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('blue');

  stroke(255);
  strokeWeight(3);
  fill('green');
  circle(200, 200, 200);

  stroke(255);
  strokeWeight(4);
  fill('red');
  beginShape();
    vertex(200, 100);
    vertex(150, 175);
    vertex(100, 175);
    vertex(150, 220);
    vertex(125, 275);
    vertex(200, 240);
    vertex(275, 275);
    vertex(250, 220);
    vertex(300, 175);
    vertex(250, 175);
  endShape(CLOSE);
}