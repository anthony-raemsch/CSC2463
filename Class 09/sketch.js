let sounds = new Tone.Players
({
  'popcorn' : "assets/popcorn.mp3",
  'water' : "assets/water.mp3"
});

let delAmt = new Tone.FeedbackDelay("8n", 0.5);
let distAmt = new Tone.Distortion(0.5);

let button1, button2;
let delaySlider, fbSlider, distSlider;

sounds.connect(delAmt);
delAmt.connect(distAmt);
delAmt.toDestination();

function setup()
{
  createCanvas(2519, 1338);

  button1 = createButton('Popcorn Maker');
  button1.position(85, 150);
  button1.mousePressed(() => sounds.player('popcorn').start());

  button2 = createButton('Water Trickle');
  button2.position(205, 150);
  button2.mousePressed(() => sounds.player('water').start());

  delaySlider = createSlider(0, 1, 0, 0.05);
  delaySlider.position(120, 200);
  delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());

  fbSlider = createSlider(0, 0.9, 0, 0.05);
  fbSlider.position(120, 250);
  fbSlider.mouseMoved(() => delAmt.feedback.value = fbSlider.value());

  distSlider = createSlider(0, 0.9, 0, 0.05);
  distSlider.position(120, 300);
  distSlider.mouseMoved(() => distAmt.distortion = distSlider.value());
}

function draw()
{
  background(172);
}