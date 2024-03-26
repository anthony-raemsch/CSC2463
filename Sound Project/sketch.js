let colorSpectrum, selectedColor, sizeOfSquare, drawing, dex, i, sine, melody, nature;

let sequence = [['A4', 'A4', 'A4'], 'A4', 'F4', 'G4', ['A4', 'G4'], 'A4'];

nature = new Tone.Players
({
    'nature' : 'assets/nature.mp3'
});

sine = new Tone.Synth({
    oscillator:
    {
        type: "sine"
    }
}).toDestination;

melody = new Tone.Sequence(function (time, note)
{
    sine.triggerAttackRelease(note, 0.8);
}, sequence, "8n");

Tone.Transport.start();
Tone.Transport.bpm.value = 60;

function setup()
{
    createCanvas(2519, 1339);
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
        strokeWeight(10);
        stroke(color(selectedColor));
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function mousePressed()
{
    if (mouseX > sizeOfSquare && mouseX < width && mouseY > 0 && mouseY < height)
    {
        drawing = true;
    }

    if (mouseX > 10 && mouseX < sizeOfSquare + 10 && mouseY > 0 && mouseY < colorSpectrum.length * sizeOfSquare)
    {
        drawing = false;
        dex = Math.floor(mouseY / sizeOfSquare);
        selectedColor = colorSpectrum[dex];
        Tone.start();
        melody.start();
    }

    nature.player('nature').start();
}

function mouseReleased()
{
    drawing = false;
    nature.player('nature').stop();
}

function colorPalleteDrew()
{
    for (i = 0; i < colorSpectrum.length; i++)
    {
        fill(color(colorSpectrum[i]));
        rect(10, i * sizeOfSquare, sizeOfSquare, sizeOfSquare);
    }
}