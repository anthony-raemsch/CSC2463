function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background('white');

  noStroke();
  circle(100, 50, 100);
  fill(240, 100, 100, 0.5);

  noStroke();
  circle(60, 100, 100);
  fill(120, 100, 100, 0.5);

  noStroke();
  circle(140, 100, 100);
  fill(0, 100, 100, 0.5);
}