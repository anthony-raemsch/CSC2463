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
    createCanvas(400, 400);

    colorPallete =
    [
        new Color(0, 0, 30, color('red')),
        new Color(0, 30, 30, color('orange')),
        new Color(0, 60, 30, color('yellow')),
        new Color(0, 90, 30, color('green')),
        new Color(0, 120, 30, color('cyan')),
        new Color(0, 150, 30, color('blue')),
        new Color(0, 180, 30, color('magenta')),
        new Color(0, 210, 30, color('brown')),
        new Color(0, 240, 30, color('white')),
        new Color(0, 270, 30, color('black'))
    ];

    points = [];
}

let x;
let y;