let synth = new touchEnded.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

bend.pitch = 0;
synth.connect(bend);
bend.toDestination();

let notes =
{
  'a' : 'C4',
  'w' : 'C#4',
  's' : 'D4',
  'e' : 'D#4',
  'd' : 'E4',
  'f' : 'F4',
  't' : 'F#4',
  'g' : 'G4',
  'y' : 'G#4',
  'h' : 'A4',
  'u' : 'A#4',
  'j' : 'B4',
  'k' : 'C5'
}

function setup()
{
  createCanvas(400, 400);

  pitchSlider = createSlider(-12, 12, 0, 0.1);
  pitchSlider.position(120, 200);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());
}

function draw()
{
  background(220);
  text('Play A-K for synth', 200, 200);
}

function keyPressed()
{
  let playNotes = notes[key];
  synth.triggerAttack(playNotes, 0.2);
}

function keyReleased()
{
  let playNotes = notes(key);
  synth.triggerRelease(playNotes, '+0.03');
}