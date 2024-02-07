let colorSpectrum;
let selectedColor;
let sizeOfSquare;
let drawing;
let previousX;
let previousY;
let dex;
let i;

function setup()
{
    createCanvas(2400, 1700);
    colorPalleteDrew();
}

    colorSpectrum = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#800080', '#A52A2A', '#FFFFFF', '#000000'];
    selectedColor = colorSpectrum[0];
    sizeOfSquare = 35;
    drawing = false;

function draw()
{
    if (drawing)
    {
        strokeWeight(5);
        stroke(color(selectedColor));
        line(previousX, previousY, mouseX, mouseY);
    }
}

function mouseClicked()
{
    if (mouseX > 10 && mouseX < sizeOfSquare + 10 && mouseY > 0 && mouseY < colorSpectrum.length * sizeOfSquare)
    {
        dex = Math.floor(mouseY / sizeOfSquare);
        selectedColor = colorSpectrum[dex];
    }
}

function mousePressed()
{
    if (mouseX > sizeOfSquare && mouseX < width && mouseY > 0 && mouseY < height)
    {
        drawing = true;
        previousX = mouseX;
        previousY = mouseY;
    }
}

function releaseMouse()
{
    drawing = false;
}

function colorPalleteDrew()
{
    for (i = 0; i < colorSpectrum.length; i++)
    {
        fill(color(colorSpectrum[i]));
        rect(10, i * sizeOfSquare, sizeOfSquare, sizeOfSquare);
    }
}