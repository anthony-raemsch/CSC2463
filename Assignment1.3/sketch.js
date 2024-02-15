class Character
{
  constructor (x, y, width, height, spriteSheet, animations)
  {
    this.spelunkyCharacter = new Sprite(x, y, width, height);
    this.spelunkyCharacter.spriteSheet = spriteSheet;
    this.spelunkyCharacter.anis.frameDelay = 8;
    this.spelunkyCharacter.addAnis(animations);
    this.spelunkyCharacter.changeAni('stand');
  }

  stop()
  {
    this.spelunkyCharacter.changeAni('stand');
    this.spelunkyCharacter.vel.x = 0;
    this.spelunkyCharacter.vel.y = 0;
  }

  walkDown()
  {
    this.spelunkyCharacter.changeAni('walkDown');
    this.spelunkyCharacter.vel.y = 1;
    this.spelunkyCharacter.vel.x = 0;
  }

  walkLeft()
  {
    this.spelunkyCharacter.changeAni('walkRight');
    this.spelunkyCharacter.vel.x = -1;
    this.spelunkyCharacter.vel.y = 0;
    this.spelunkyCharacter.scale.x = -1;
  }

  walkRight()
  {
    this.spelunkyCharacter.changeAni('walkRight');
    this.spelunkyCharacter.vel.x = 1;
    this.spelunkyCharacter.vel.y = 0;
    this.spelunkyCharacter.scale.x = 1;
  }

  walkUp()
  {
    this.spelunkyCharacter.changeAni('walkUp');
    this.spelunkyCharacter.vel.x = 0;
    this.spelunkyCharacter.vel.y = -1;
  }
}

let characters = [];

function draw()
{
  background(255);

  characters.forEach((character) =>
  {
    if (kb.pressing('d'))
    {
      character.walkRight();
    }

    else if (kb.pressing('a'))
    {
      character.walkLeft();
    }

    else if (kb.pressing('w'))
    {
      character.walkUp();
    }

    else if (kb.pressing('s'))
    {
      character.walkDown();
    }

    else
    {
      character.stop();
    }

    if (character.spelunkyCharacter.x + character.spelunkyCharacter.width / 4 > width)
    {
      character.walkLeft();
    }

    else if (character.spelunkyCharacter.x - character.spelunkyCharacter.width / 4 < 0)
    {
      character.walkRight();
    }
  })
}

function preload()
{
  let animations =
  {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  }

  characters.push(new Character(100, 100, 80, 80, 'assets/green.png', animations));
  characters.push(new Character(200, 200, 80, 80, 'assets/ninja.png', animations));
  characters.push(new Character(300, 300, 80, 80, 'assets/spelunky.png', animations));
}

function setup()
{
  createCanvas(2519, 1338);
}

let spelunkyCharacter;