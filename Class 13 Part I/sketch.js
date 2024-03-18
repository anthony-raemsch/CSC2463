let mySelect;
let playNotes;

let amSynth = new Tone.AMSynth().toDestination();
amSynth.type = 'sine';
amSynth.frequency.value = 0;
amSynth.harmonicity.value = 0.9;

let fmSynth = newTone.FMSynth().toDestination();
fmSynth.type = 'sine';
fmSynth.frequency.value = 0;
fmSynth.harmonicity.value = 0.1;
fmSynth.modulationIndex = 0.9;

let notes =
{
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function setup()
{
  createCanvas(400, 400);

  mySelect = createSelect();
  mySelect.position(100, 100);
  mySelect.option('Amplitude Modulation');
  mySelect.option('Frequency Modulation');
  mySelect.selected('Amplitude Modulation');
}

function keyPressed()
{
  if (mySelect.selected() === "Amplitude Modulation")
  {
    playNotes = notes[key];
    amSynth.triggerAttackRelease(playNotes, 0.8);
  }

  else if (mySelect.selected() === "Frequency Modulation")
  {
    playNotes = notes[key];
    fmSynth.triggerAttackRelease(playNotes, 0.8);
  }
}

function draw()
{
  background(100, 220, 150);
  text('Play A - K for synth', 140, 180);
}