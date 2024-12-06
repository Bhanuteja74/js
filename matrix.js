const WIDTH = 40;
const HEIGHT = 40

function randomInt(start, end) {
  return start + Math.floor(Math.random() * (end - start));
}

function makeScreen(char) {
  const screeen = [];

  for (let y = 0; y < HEIGHT; y++) {
    const row = [];
    for (let x = 0; x < WIDTH; x++) {
      row.push(char);
    }
    screeen.push(row);
  }
  return screeen;
}

function frameToStr(screen) {
  let str = '';

  for (let index = 0; index < screen.length; index++) {
    str += screen[index].join('');
  }

  return str;
}

function putChar(char, screen, x, y) {

  screen[y][x] = Math.round(Math.random());
}

function put(frame) {
  let x = randomInt(0, WIDTH);
  let y = randomInt(0, HEIGHT);

  putChar(0, frame, x, y);

  x = randomInt(0, WIDTH);
  y = randomInt(0, HEIGHT);

  putChar(0, frame, x, y);
}

const frame = makeScreen(' ');
let frames = '';


for (let i = 0; i < 1000; i++) {
  put(frame)
  frames += frameToStr(frame);
}

console.log(WIDTH, HEIGHT);
console.log(frames);
