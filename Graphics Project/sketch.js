let spriteSheet;
let bugs = [];
let count = 40;
let timeRemaining = 30;
let speed = 1;
let kills = 0;
let bugsLeft = count;

function preload()
{
    spriteSheet = loadImage("assets/bugs.png", 200, 200);
}

function setup()
{
    createCanvas(2519, 1338);
    imageMode(CENTER);

    for(i = 0; i < count; i++)
    {
        bugs[i] = new Bug(spriteSheet, random(100, 1300), random(200, 600), speed, random([-1, 1]));
    }

}

function mousePressed()
{
    for(i = 0; i < count; i++)
    {
        bugs[i].squish();
    }
}

function draw()
{
    background(255);
    
    for(i = 0; i < count; i++)
    {
        bugs[i].draw();
    }

    textSize(50);
    text("Time Remaining: " + timeRemaining, 200, 100);

  //Starts timer after first kill
    if(kills > 0)
    {
        if(frameCount % 60 == 0 && timeRemaining > 0)
        {
            timeRemaining--;
        }
    }

    if(timeRemaining == 0 || bugsLeft == 0)
    {
        background(225, 225, 225);
        
        if(bugsLeft == 0)
        {
            textSize(100);
            text("Game Over! \n You Win!", 150, 350);
        }
        
        else
        {
            textSize(100);
            text("Game Over! \n You Lost!", 150, 350);
        }
    }

    textSize(50);
    text("Kills: " + kills, 900, 100);

}

class Bug
{
    constructor(spriteSheet, x, y, speed, move)
    {
        this.spriteSheet = spriteSheet;
        this.sx = 0;
        this.x = x;
        this.y = y;
        this.move = 0;
        this.speed = speed;
        this.move = move;
        this.facing = move;
        this.squished = false;
        this.dead = false;
    }

    draw()
    {
        push();
        translate(this.x, this.y);
        scale(this.facing, 1);
        rotate(PI / 2);

        if(this.move == 0)
        {
            image(this.spriteSheet, 0, 0, 100, 100, 30, 90, 69, 80);
        }

        else
        {
            image(this.spriteSheet, 0, 0, 100, 100, 69 * (this.sx + 1), 0, 69, 80);
        }

        if(frameCount % 5 == 0)
        {
            this.sx = (this.sx + 1) % 6;
        }

        this.x += speed * this.move;

        if(this.x < 0)
        {
        this.move = 1;
        this.facing = 1;
        }
        
        else if(this.x > width)
        {
            this.move = -1;
            this.facing = -1;
            }

        pop();
    }

    squish()
    {
        if(mouseX > this.x - 40 && mouseX < this.x + 40 && mouseY > this.y - 40 && mouseY < this.y + 40)
        {
            if(!this.dead)
            {
                kills += 1;
                bugsLeft -= 1;
                speed += 0.3;
                console.log(speed);
            }

                this.stop();
                this.squished = true;
                this.dead = true;
            }
    }

    go(direction)
    {
        this.move = direction;
        this.facing = direction;
        this.sx = 3;
    }

    stop()
    {
        this.move = 0;
    }
}