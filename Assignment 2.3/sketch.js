let firetruck;

let soundFX = new Tone.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();

function setup()
{
  createCanvas(2519, 1339);
}

function draw()
{
  if(mouseIsPressed === true)
  {
    background(firetruck);
  }

  else if (mouseIsPressed === false)
  {
    background(40, 106, 58);
    text('Press Mouse', width / 3, height / 3);
  }
}

function preload()
{
  firetruck = loadImage('assets/fire truck.jpg');
}

function mousePressed()
{

}

function mouseReleased()
{

}