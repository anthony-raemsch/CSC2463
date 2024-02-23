let sounds = Tone.Players
({
  'birb' : "assets/birb.mp3",
  'cat' : "assets/cat.mp3",
  'guinea-pig' : "assets/guinea-pig.mp3",
  'horse' : "assets/horse.mp3"
});

let delAmt = new Tone.FeedbackDelay("8n", 0.5);
let distAmt = new Tone.Distortion(0.5);

let button1, button2, button3, button4, delaySlider;

sounds.connect(delAmt);
delAmt.connect(distAmt);
delAmt.toDestination();

function setup()
{
  createCanvas(2519, 1338);

  button1 = createButton('Bird Singing');
  button1.position(85, 150);
  button1.mousePressed(() => sounds.player('birb').start());

  button2 = createButton('Cat Meowing');
  button2.position(85, 150);
  button2.mousePressed(() => sounds.player('cat').start());

  button3 = createButton('Pig snorting');
  button3.position(85, 150);
  button3.mousePressed(() => sounds.player('guinea-pig').start());

  button4 = createButton('Horse Sniffing');
  button4.position(85, 150);
  button4.mousePressed(() => sounds.player('horse').start());

  delaySlider = createSlider(0, 1, 0, 0.05);
  delaySlider.position(120, 200);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());

  distSlider = createSlider(0, 0.9, 0, 0.05);
  distSlider.position(120, 300);
  distSlider.mouseMoved(() => distAmt.distortion = distSlider.value());
}

function draw()
{
  background(0);
}
