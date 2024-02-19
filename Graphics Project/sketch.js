function setup()
{
  createCanvas(2519, 1338);
}

function draw()
{
  background(255);
}

function preload()
{
  roundBug = new Sprite(200, 200, 80, 80);
  roundBug.spriteSheet = 'assets/Round Bug.png';
  roundBug.anis.frameDelay = 8;
}

let animations;
let roundBug;