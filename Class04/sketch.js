let face;
let face2;
let selectedColor;
let faces;

function setup()
{
  createCanvas(725, 750);

  selectedColor = color('white');

  faces = [new Face(200, 200, color('orange')), new Face(50, 50, color('black')), new Face(100, 250, color('purple')), new Face(300, 450, color('yellow'))];
}

function draw()
{
  background(220);
  
  for (let i = 0; i < faces.length; i++)
  {
    faces[i].draw();
  }

  fill(selectedColor);
  circle(width - 30, 30, 20);
}

function mousePressed()
{

  let isInFace = false;

  for (let i = 0; i < faces.length; i++)
  {
    if (faces[i].contains(mouseX, mouseY))
    {
      selectedColor = faces[i].fill;
      isInFace = true;
    }
  }

  if (!isInFace)
  {
    selectedColor = color('white');
  }
}

class Face
{
  constructor(x, y, fill)
  {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }

  draw()
  {
    noStroke();
    fill(this.fill);
    square(this.x, this.y, 100);
    
    fill(255);
    circle(this.x + 20, this.y + 20, 10);
    circle(this.x + 80, this.y + 20, 10);

    stroke(255);
    line(this.x + 20, this.y + 50, this.x + 80, this.y + 50);
  }

  contains(x, y)
  {
    let insideX = x >= this.x && x <= this.x + 100;
    let insideY = y >= this.y && y <= this.y + 100;
    
    return insideX && insideY;
  }
}