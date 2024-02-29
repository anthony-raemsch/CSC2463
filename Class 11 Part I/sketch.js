let synth = new Tone.PolySynth(Tone.Synth);
let synth2 = new Tone.PolySynth(Tone.DuoSynth);
let bend = new Tone.PitchShift();
let mySelect;

bend.pitch = 0;
synth1.connect(bend);
bend.toDestination();

synth2.connect(bend);
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

  mySelect = createSelect();
  mySelect.position(100, 100);
  mySelect.option('Simple Synth');
  mySelect.option('Duo Synth');
  mySelect.selected('Simple Synth');

  pitchSlider = createSlider(-12, 12, 0, 0.1); //pitch down -12, pitch up 12, starting point is 0
  pitchSlider.position (120, 200);
  pitchSlider.mouseMoved(()=> bend.pitch = pitchSlider.value());
}

function keyPressed()
{
  if (mySelect.selected() === 'Simple Synth')
  {
    let playNotes = notes[key];
  }
}

function draw()
{
  background(100, 220, 150);
  text ('play A-K for synth', 140, 180)
}