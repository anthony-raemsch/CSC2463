let sine = new Tone.Synth
({
  oscillator:
  {
    type: 'sine'
  },

  envelope:
  {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.1,
  }
}).toDestination();

let square = new Tone.Synth
({
  oscillator:
  {
    type: 'square'
  },

  envelope:
  {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.1,
  }
}).toDestination();

let triangle = new Tone.Synth
({
  oscillator:
  {
    type: 'triangle'
  },

  envelope:
  {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.1,
  }
}).toDestination();

let saw = new Tone.Synth
({
  oscillator:
  {
    type: 'saw'
  },

  envelope:
  {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.1,
    release: 0.1,
  }
}).toDestination();

function setup()
{
  createCanvas(400, 400);
}

function keyPressed()
{
  if (key === 'q')
  {
    sine.TriggerAttackRelease('C4', 1);
  }

  else if (key === 'w')
  {
    square.TriggerAttackRelease('C4', 1);
  }

  else if (key === 'e')
  {
    triangle.TriggerAttackRelease('C4', 1);
  }

  else if (key === 'r')
  {
    saw.TriggerAttackRelease('C4', 1);
  }
}

function draw()
{
  background(250, 220)
}