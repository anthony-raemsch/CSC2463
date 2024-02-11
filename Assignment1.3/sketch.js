let animations =
{
  stand: {row: 0, frames: 1},
  walkRight: {row: 0, col: 1, frames: 8},
  walkUp: {row: 5, frames: 6},
  walkDown: {row: 5, col: 6, frames: 6}
}

function draw()
{
  background(255);

  if (kb.pressing('d'))
  {
    walkRight();
  }

  else if (kb.pressing('a'))
  {
    walkLeft();
  }

  else if (kb.pressing('w'))
  {
    walkUp();
  }

  else if (kb.pressing('s'))
  {
    walkDown();
  }

  else
  {
    stop();
  }

  if (sprite.x + sprite.width / 4 > width)
  {
    walkLeft();
  }

  else if (sprite.x - sprite.width / 4 < 0)
  {
    walkRight();
  }
}

let green;
// let ninja;

function preload()
{
  green = new Sprite(200, 200, 80, 80);
  green.spriteSheet = 'assets/green.png';
  green.anis.frameDelay = 8;
  green.addAnis(animations);
  green.changeAni('stand');

  // ninja = new Sprite(200, 200, 80, 80);
  // ninja.spriteSheet = 'assets/ninja.png';
  // ninja.anis.frameDelay = 8;
  // ninja.addAnis(animations);
  // ninja.changeAni('stand');

  // spelunky = new Sprite(200, 200, 80, 80);
  // spelunky.spriteSheet = 'assets/spelunky.png';
  // spelunky.anis.frameDelay = 8;
  // spelunky.addAnis(animations);
  // spelunky.changeAni('stand');
}

function setup()
{
  createCanvas(2519, 1338);
}

// let spelunky;

function stop()
{
  green.vel.x = 0;
  green.vel.y = 0;
  green.changeAni('stand');
}

function walkDown()
{
  green.changeAni('walkDown');
  green.vel.y = 1;
  green.vel.x = 0;
}

function walkLeft()
{
  green.changeAni('walkRight');
  green.vel.x = -1;
  green.scale.x = -1;
  green.vel.y = 0;
}

function walkRight()
{
  green.changeAni('walkRight');
  green.vel.x = 1;  
  green.scale.x = 1;
  green.vel.y = 0;
}

function walkUp()
{
  green.changeAni('walkUp');
  green.vel.y = -1;
  green.vel.x = 0;
}