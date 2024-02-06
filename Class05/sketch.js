function draw()
{
  background(lastAttempt);

  if(gameOver)
  {
    gameDone();
  }

  else
  {
    playing();
  }
}

function gameDone()
{
  text("Time's Up!", 100, 100);
  text("Score: " + score, 100, 150);
  text("Press Space to Play Again.", 100, 200);
}

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
let mickey;

function playing()
{
  push();
    translate(width / 2, height / 2);
    rotate(rotation+= speed);
    image(mickey, 0, 0, mickey.width / 3, mickey.height / 3);
  pop();

  if (rotation >= 360)
  {
    rotation = 0;
  }

  textSize(16);
  text("Score: " + score, 20, 20);
  text("Time: " + ceil(timeRemaining), width - 100, 20);

  timeRemaining -= deltaTime / 1000;

  if (timeRemaining < 0)
  {
    gameOver = true;
  }
}

function preload()
{
  mickey = loadImage('assets/mickey_the_mouse.jpg');
}

let rotation = 0;
let score = 0;

function setup() 
{
  createCanvas(400, 400);
  imageMode(CENTER);
  angleMode(DEGREES);

  success = color('blue');
  fail = color('red');
  normal = color('white');
  lastAttempt = normal;
}

let speed = 16;
let success, fail, normal;
let timeRemaining = 15;