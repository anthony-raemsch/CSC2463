let animations =
{
  stand: {row: 0, frames: 1},
  walkRight: {row: 0, col: 1, frames: 8},
  walkUp: {row: 5, frames: 6},
  walkDown: {row: 5, col: 6, frames: 6}
};

function draw()
{
  background(0);

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
}

function keyTypedOld()
{
  switch(key)
  {
    case 'd':
      walkRight();
      break;

    case 'a':
      walkLeft();
      break;

    case 'w':
      walkUp();
      break;

    case 's':
      walkDown();
      break;
  }
}

function preload()
{
  robot = new Sprite(200, 200, 80, 80);
  robot.spriteSheet = 'assets/robot.png';
  robot.anis.frameDelay = 8;
  robot.addAnis(animations);
  robot.changeAni('stand');
}

let robot;

function setup()
{
  createCanvas(400, 400);
}

function stop()
{
  robot.vel.x = 0;
  robot.vel.y = 0;
  robot.changeAni('stand');
}

function walkDown()
{
  robot.changeAni('walkDown');
  robot.vel.y = 1;
  robot.vel.x = 0;
}

function walkLeft()
{
  robot.changeAni('walkRight');
  robot.vel.x = -1;
  robot.scale.x = -1;
  robot.vel.y = 0;
}

function walkRight()
{
  robot.changeAni('walkRight');
  robot.vel.x = 1;  
  robot.scale.x = 1;
  robot.vel.y = 0;
}

function walkUp()
{
  robot.changeAni('walkUp');
  robot.vel.y = -1;
  robot.vel.x = 0;
}