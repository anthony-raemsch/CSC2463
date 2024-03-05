let noise = new Tone.Noise("black");
let filter = new Tone.Filter(100, "bandpass");

noise.coonect(filter);
filter.toDestination();

function keyPressed()
{
  if (key === 'q')
  {
    noise.start();
    filter.frequency.rampTo(10000, 10);
  }

  else if (key === 'w')
  {
    noise.stop();
    filter.frequency.value = 100;
  }
}

function setup()
{
  createCanvas(400, 400);

  filterSlider = createSlider(100, 10000, 100, 0.1);
  filterSlider.position(100, 200);
  filterSlider.mouseMoved(() =>
  {
    filter.frequency.value = filterSlider.value();
  });
}

function draw()
{
  background(255);
  text("Press Q to start and W to stop", 100, 100);
  text("Use slider for filter", 100, 175);
}