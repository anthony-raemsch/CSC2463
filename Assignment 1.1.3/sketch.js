function setup() {
  createCanvas(400, 200);
}

function draw() {
  background('black');

  stroke(0);
  strokeWeight(2);
  fill('yellow');
  arc(70, 100, 150, 150, - 3 * PI / 4, 3 * PI / 4, PIE);

  stroke(0);
  strokeWeight(2);
  fill('red');
  arc(250, 175, 200, 300, -PI, 0, CHORD);

  noStroke();
  fill('white');
  circle(215, 100, 50);
  circle(290, 100, 50);

  noStroke();
  fill('blue');
  circle(215, 100, 25);
  circle(290, 100, 25);
}