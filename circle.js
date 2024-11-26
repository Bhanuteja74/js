const WIDTH = 100;
const HEIGHT = 50;
const RADIUS = 20;


function wait(seconds) {
  for (let s = 0; s < seconds * 100; s++) {
    for (let ms = 0; ms < s * 50000; ms++) { }
  }
}

function randomInt(start, end) {
  return start + Math.floor(Math.random() * (end - start));
}

function repeat(string, times) {
  let repeatString = '';
  for (let count = 0; count < times; count++) {
    repeatString += string;
  }
  return repeatString;
  // if (times === 0) {
  //   return '';
  // }

  // return string + repeat(string, times - 1);
}

function slice(string, start, end) {
  let slicedStr = '';
  for (let index = start; index < end; index++) {
    slicedStr += string[index];
  }

  return slicedStr;
}

function putScreen(screen) {
  for (let y = 0; y < HEIGHT; y++) {
    const x = y * WIDTH;
    console.log(slice(screen, x, x + WIDTH));
  }
}

function updateScreen(screen, x, y, char) {
  const updatePos = (y * WIDTH) + x;
  const fisrtHalfScreen = slice(screen, 0, updatePos);
  const secondHalfScreen = slice(screen, updatePos + 1, WIDTH * HEIGHT);

  return fisrtHalfScreen + char + secondHalfScreen;
}

function xCordinator(radians, waveLength, dist) {
  return dist + Math.floor(2 * RADIUS * Math.sin(radians * waveLength));
}
function yCordinator(radians, waveLength, dist) {
  return dist - Math.floor(RADIUS * Math.cos(radians * waveLength));
}

function anime() {
  let screen = repeat('_', WIDTH * HEIGHT);
  console.log(screen);

  for (let index = 0; index < 31.5; index += .1) {
    console.clear();
    const x = xCordinator(index, .2, WIDTH / 2);
    const y = yCordinator(index, .2, HEIGHT / 2);

    screen = updateScreen(screen, x, y, 'X');
    putScreen(screen);
    wait(.5);
  }
}

anime();
