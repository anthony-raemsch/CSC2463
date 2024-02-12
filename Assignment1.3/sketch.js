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

  if (green.x + green.width / 4 > width)
  {
    walkLeft();
  }

  else if (green.x - green.width / 4 < 0)
  {
    walkRight();
  }

  if (ninja.x + ninja.width / 4 > width)
  {
    walkLeft();
  }

  else if (ninja.x - ninja.width / 4 < 0)
  {
    walkRight();
  }

  if (spelunky.x + spelunky.width / 4 > width)
  {
    walkLeft();
  }

  else if (spelunky.x - spelunky.width / 4 < 0)
  {
    walkRight();
  }
}

let green;
let ninja;

function preload()
{
  green = new Sprite(200, 200, 80, 80);
  green.spriteSheet = 'assets/green.png';
  green.anis.frameDelay = 8;
  green.addAnis(animations);
  green.changeAni('stand');

  ninja = new Sprite(200, 200, 80, 80);
  ninja.spriteSheet = 'assets/ninja.png';
  ninja.anis.frameDelay = 8;
  ninja.addAnis(animations);
  ninja.changeAni('stand');

  spelunky = new Sprite(200, 200, 80, 80);
  spelunky.spriteSheet = 'assets/spelunky.png';
  spelunky.anis.frameDelay = 8;
  spelunky.addAnis(animations);
  spelunky.changeAni('stand');
}

function setup()
{
  createCanvas(2519, 1338);
}

let spelunky;

function stop()
{
  green.changeAni('stand');
  green.vel.x = 0;
  green.vel.y = 0;

  ninja.changeAni('stand');
  ninja.vel.x = 0;
  ninja.vel.y = 0;

  spelunky.changeAni('stand');
  spelunky.vel.x = 0;
  spelunky.vel.y = 0;
}

function walkDown()
{
  green.changeAni('walkDown');
  green.vel.y = 1;
  green.vel.x = 0;

  ninja.changeAni('walkDown');
  ninja.vel.y = 1;
  ninja.vel.x = 0;

  spelunky.changeAni('walkDown');
  spelunky.vel.y = 1;
  spelunky.vel.x = 0;
}

function walkLeft()
{
  green.changeAni('walkRight');
  green.vel.x = -1;
  green.scale.x = -1;
  green.vel.y = 0;

  ninja.changeAni('walkRight');
  ninja.vel.x = -1;
  ninja.scale.x = -1;
  ninja.vel.y = 0;

  spelunky.changeAni('walkRight');
  spelunky.vel.x = -1;
  spelunky.scale.x = -1;
  spelunky.vel.y = 0;
}

function walkRight()
{
  green.changeAni('walkRight');
  green.vel.x = 1;  
  green.scale.x = 1;
  green.vel.y = 0;

  ninja.changeAni('walkRight');
  ninja.vel.x = 1;  
  ninja.scale.x = 1;
  ninja.vel.y = 0;

  spelunky.changeAni('walkRight');
  spelunky.vel.x = 1;  
  spelunky.scale.x = 1;
  spelunky.vel.y = 0;
}

function walkUp()
{
  green.changeAni('walkUp');
  green.vel.y = -1;
  green.vel.x = 0;

  ninja.changeAni('walkUp');
  ninja.vel.y = -1;
  ninja.vel.x = 0;

  spelunky.changeAni('walkUp');
  spelunky.vel.y = -1;
  spelunky.vel.x = 0;
}