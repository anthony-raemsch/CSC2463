function setup()
{
  createCanvas(400, 400);

  let button1 = createButton('Popcorn Maker');
  button1.position(85, 150);
  button1.mousePressed(() => soundFX.player('popcorn').start());

  let button2 = createButton('Water Fall');
  button2.position(205, 150);
  button2.mousePressed(() => soundFX.player('water').start());
}

function draw()
{
  background(220);
  // text('Press Q or W for sound!', 120, 150);
}

function preload()
{
  let soundFX = new Tone.Players
  ({
    popcorn: "assets/popcorn.mp3",
    water: "assets/water.mp3"
  }).toDestination(); // tells your audio to go to your speakers
}

// function keyPressed()
// {
//   if (keyCode === 'q')
//   {
//     soundFX.player("popcorn").start();
//   }

//   else if (key === 'w')
//   {
//     soundFX.player("water").start();
//   }
// }