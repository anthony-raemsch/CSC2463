let soundFX, button1, button2, button3, button4, pitchSlider;

let sounds = new Tone.Players
({
  'birb' : 'assets/brib.mp3',
  'cat' : 'assets/cat.mp3',
  'guinea pig' : 'assets/guinea-pig.mp3',
  'horse' : 'assets/horse.mp3'
});

let shift = new Tone.PitchShift();

shift.pitch = 0;
let soundNames = ['birb', 'cat', 'guinea pig', 'horse'];
let buttons = [];
sounds.connect(shift);
shift.toDestination();

function setup()
{
  createCanvas(2519, 1338);

  textAlign(CENTER);
  fill(0);

  soundNames.forEach((names, index) =>
  {
    buttons[index] = createButton(names);
    buttons[index].position(120, 100 + index * 50);
    buttons[index].mousePressed(() => sounds.player(names).start());
  })

  pitchSlider = createSlider(-12, 12, 0, 0.1);
  pitchSlider.position(300, 200);
  text("Pitch Slider", 300, 185);
  pitchSlider.mouseMoved(() => shift.pitch = pitchSlider.value());
}

function draw()
{
  background(255);
}