function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(220);
  noStroke();
  fill('black');
  circle(100, 300, 100);

  stroke(0);
  strokeWeight(2);
  fill('yellow');
  arc(300, 300, 200, 200, - 3 * PI / 4, 3 * PI / 4, PIE);

  fill(0, 100, 50, 0.5);
  beginShape();
    vertex(450, 200);
    vertex(500, 50);
    vertex(550, 200);
  endShape(CLOSE);
}