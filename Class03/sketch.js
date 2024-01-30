let purple;
let gold;
let x;
let y;
let size;

function setup()
{
  createCanvas(400, 400);
  purple = color('#461D7C');
  gold = color('#FDD023');
  x = width / 2;
  y = height / 2;
}

function draw()
{
  background(220);

  if (mouseIsPressed)
  {
    if (mouseX >= x)
    {
      fill(purple);
      stroke(gold);

      x += mouseX - pmouseX;
      y += mouseY - pmouseY;
    }
  }

  else
  {
    fill(gold);
    stroke(0);
  }

  square(x, y, 100);
}
