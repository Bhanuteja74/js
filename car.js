
const WIDTH = 100;
const HEIGHT = 4;

function carParts(index) {
  switch (index) {
    case 0: return '  _____         ';//carTop
    case 1: return ' /|_||_`.__     ';//carDoor
    case 2: return '(   _    _ _\\   ';//carSide
    case 3: return ' - (_)--(_) -\'  ';//carBottom
    default: return '                ';//
  }
}

function wait(seconds) {
  for (let s = 0; s < seconds * 100; s++) {
    for (let ms = 0; ms < s * 50000; ms++) { }
  }
}

function repeat(string, times) {
  let repeatString = '';
  for (let count = 0; count < times; count++) {
    repeatString += string;
  }
  return repeatString;
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

function putCar(screen, objectLength) {
  let updatedScreen = '';

  for (let index = 0; index < HEIGHT; index++) {
    const start = (index * WIDTH) + objectLength;
    const end = (index + 1) * WIDTH;
    updatedScreen += carParts(index) + slice(screen, start, end);
  }

  return updatedScreen;
}

function moveObject(screen) {
  let s = '';
  for (let y = 0; y < 4; y++) {
    const start = y * WIDTH;
    const end = start + WIDTH - 1;
    s += screen[end] + slice(screen, start, end);
  }
  return s;
}

let screen = repeat('-', WIDTH * HEIGHT);
screen = putCar(screen, 16);

for (let i = 0; i < 200; i++) {
  console.clear();
  screen = moveObject(screen);
  putScreen(screen);
  wait(.7);
}
