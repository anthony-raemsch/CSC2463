class Color
{
    constructor (x, y, diameter, fill)
    {
        this.fill = fill;
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }

    contains(x, y)
    {
        insideX = x >= this.x && x <= this.x + 50;
        insideY = y >= this.y && y <= this.y + 50;

        return insideX && insideY;
    }

    draw()
    {
        fill(this.fill);
        square(this.x, this.y, this.diameter);
    }
}

let colorPallete;

function draw()
{
    background(255);

    for (i = 0; i < colorPallete.length; i++)
    {
        colorPallete[i].draw();
    }

    beginShape();
        for (var i in points)
        {
            var one_point = points[i];
            curveVertex(one_point.x, one_point.y);
        }
    endShape();
}

let insideX;
let insideY;
let isInColor;

function mouseDragged()
{
    var one_point = {};
    one_point.x = pmouseX;
    one_point.y = pmouseY;

    points.push(one_point);
}

function mousePressed()
{
    isInColor = false;

    for (i = 0; i < colorPallete.length; i++)
    {
        if (colorPallete[i].contains(mouseX, mouseY))
        {
            selectedColor = colorPallete[i].fill;
            isInColor = true;
        }
    }
}

let points;
let selectedColor;

function setup()
{
    createCanvas(2515, 1337);

    colorPallete =
    [
        new Color(0, 0, 50, color('red')),
        new Color(0, 50, 50, color('orange')),
        new Color(0, 100, 50, color('yellow')),
        new Color(0, 150, 50, color('green')),
        new Color(0, 200, 50, color('cyan')),
        new Color(0, 250, 50, color('blue')),
        new Color(0, 300, 50, color('magenta')),
        new Color(0, 350, 50, color('brown')),
        new Color(0, 400, 50, color('white')),
        new Color(0, 450, 50, color('black'))
    ];

    points = [];
}

let x;
let y;