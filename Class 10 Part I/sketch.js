let sounds = new Tone.Players
({
  'popcorn' : "assets/popcorn.mp3",
  'water' : "assets/water.mp3"
});

let delAmt = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ['popcorn', 'water'];
let buttons;
let delaySlider;

sounds.connect(delAmt);
delAmt.connect(distAmt);
delAmt.toDestination();

function setup()
{
  createCanvas(2519, 1338);

  soundNames.forEach((names, index) => 
  {
    buttons[index] = createButton(names);
    buttons[index].position(120, 1000 + index * 50);
    buttons[index].mousePressed (() => sounds.player(names).start);
  })

  delaySlider = createSlider(0, 1, 0, 0.05);
  delaySlider.position(120, 200);
  delaySlider.mouseReleased(() => delAmt.delayTime.value = delaySlider.value());
}

function draw()
{
  background(172);
}