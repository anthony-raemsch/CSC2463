let selectedColor;
let colorPallete;

function setup()
{
    createCanvas(400, 400);

    colorPallete =
    [
        new Color(color('red')),
        new Color(color('orange')),
        new Color(color('yellow')),
        new Color(color('green')),
        new Color(color('cyan')),
        new Color(color('blue')),
        new Color(color('magenta')),
        new Color(color('brown')),
        new Color(color('white')),
        new Color(color('black'))
    ];
}

class Color
{
    constructor (fill)
    {
        this.fill = fill;
    }

    draw()
    {
        fill(this.fill);
    }
}