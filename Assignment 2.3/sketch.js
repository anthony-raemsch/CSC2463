let firetruck;

let soundFX = new Tone.FMSynth().toDestination();

function setup()
{
  createCanvas(2519, 1339);
}

function draw()
{
  if(mouseIsPressed === true)
  {
    background(firetruck);
    soundFX.triggerAttack("F#4", '4n');
  }

  else if (mouseIsPressed === false)
  {
    soundFX.triggerRelease();
    background(40, 106, 58);
    text('Press Mouse', width / 2, height / 3);
  }
}

function preload()
{
  firetruck = loadImage('assets/fire truck.jpg');
}