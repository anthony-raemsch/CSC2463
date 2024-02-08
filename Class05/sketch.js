function draw()
{
  background(lastAttempt);

  if (gameOver)
  {
    gameDone();
  }

  else
  {
    playing();
  }
}

let fail;

function gameDone()
{
  text("Time's Up!", 100, 100);
  text("Score: " + score, 100, 150);
  text("Press Space to Play Again.", 100, 200);
}

let gameFont;
let gameOver = false;

function keyTyped()
{
  if (key === ' ')
  {
    if (gameOver)
    {
      timeRemaining = 15;
      score = 0;
      gameOver = false;
    }

    else
    {
      if (rotation >= 345 || rotation <= 15)
      {
        score++;
        lastAttempt = success;
      }

      else
      {
        score--;
        lastAttempt = fail;
      }
    }
  }
}

let lastAttempt;
let mike;
let normal;

function playing()
{
  push();
    translate(width / 2, height / 2);
    rotate(rotation += speed);
    image(mike, 0, 0, mike.width / 3, mike.height / 3);
  pop();

  if (rotation >= 360)
  {
    rotation = 0;
  }

  textSize(16);
  text("Score: " + score, 20, 20);
  text("Time: " + ceil(timeRemaining), width - 150, 20);

  timeRemaining -= deltaTime / 1000;

  if (timeRemaining < 0)
  {
    lastAttempt = normal;
    gameOver = true;
  }
}

function preload()
{
  mike = loadImage("assets/mike.png");
  gameFont = loadFont("assets/PressStart2P-Regular.ttf");
}

let rotation = 0;
let score = 0;

function setup()
{
  createCanvas(2519, 1338);
  imageMode(CENTER);
  angleMode(DEGREES);

  success = color('green');
  fail = color('red');
  normal = color('black');
  lastAttempt = normal;

  textFont(gameFont);
}

let speed = 3;
let success;
let timeRemaining = 15;