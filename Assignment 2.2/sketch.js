let synth = new Tone.PolySynth(Tone.Synth);
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
  'k' : 'C5',
  'o' : 'C#5',
  'l' : 'D5'
}

function setup()
{
  createCanvas(2500, 1339);

  pitchSlider = createSlider(-12, 12, 0, 0.1);
  pitchSlider.position(width / 2, height / 2);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());
}

function draw()
{
  background(212, 100, 16);
  text('Play A-L for synth', width / 2 + 15, height / 2);
}

function keyPressed()
{
  let playNotes = notes[key];
  synth.triggerAttackRelease(playNotes, "4n");
}