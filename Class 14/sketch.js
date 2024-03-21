let player = new Tone.Player('assets/popcorn.mp3').toDestination();
player.loop = true;
player.playbackRate = 1;
player.reverse = false;

function mousePressed()
{
    player.start();
}

function mouseReleased()
{
    player.stop();
}

function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    background(150, 220, 210);
    text('Hold mouse down for loop', width / 4, height / 4);
}