const WIDTH = 100;
const HEIGHT = 5;

const bridge = [
  '          \'x|`                     ',
  '        \'|xx| `          \'|x|.     ',
  '`   \'    |xx|    `   \'    |x|`     ',
  '============|===============|===-- ',
  '    ~~~~~|xx|~~~~~~~~~~~~~|x|~~~ ~~',
  '                                   '
];     // length is 35

// function bridge(index) {
//   switch (index) {
//     case 0: return '          \'x|`                     ';
//     case 1: return '        \'|xx| `          \'|x|.     ';
//     case 2: return '`   \'    |xx|    `   \'    |x|`     ';
//     case 3: return '============|===============|===-- ';
//     case 4: return '    ~~~~~|xx|~~~~~~~~~~~~~|x|~~~ ~~';
//     default: return '                                   ';
//   }
// }

function putObject(screen, width, heigth, object, objectLength) {
  let updatedScreen = '';

  for (let index = 0; index < heigth; index++) {
    const start = (index * width) + objectLength;
    const end = (index + 1) * width;
    updatedScreen += object[index] + slice(screen, start, end);
  }

  return updatedScreen;
}

const carParts = [
  '  _____         ',
  ' /|_||_`.__     ',
  '(   _    _ _\\   ',
  ' - (_)--(_) -\'  ',
  '                '
]; // length is 16

// function carParts(index) {
//   switch (index) {
//     case 0: return '  _____         ';//carTop
//     case 1: return ' /|_||_`.__     ';//carDoor
//     case 2: return '(   _    _ _\\   ';//carSide
//     case 3: return ' - (_)--(_) -\'  ';//carBottom
//     default: return ' - (_)--(_) -\'  ';//
//   }
// }

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

function putCar(screen, width, heigth, objectLength) {
  let updatedScreen = '';

  for (let index = 0; index < heigth; index++) {
    const start = (index * width) + objectLength;
    const end = (index + 1) * width;
    updatedScreen += carParts(index) + slice(screen, start, end);
  }

  return updatedScreen;
}

function movedScreen(screen, speed, end) {
  let frontScreen = '';
  for (let i = 0; i < speed; i++) {
    frontScreen = screen[end--] + frontScreen;
  }
  return frontScreen;
}

// moving left to right
function moveObject(screen, width, heigth, speed) {
  let movedObject = '';
  for (let y = 0; y < heigth; y++) {
    const start = y * width;
    const end = start + width - speed;

    movedObject += movedScreen(screen, speed, end) + slice(screen, start, end);
  }
  return movedObject;
}

function displayScreen(screen, width, heigth) {
  for (let y = 0; y < heigth; y++) {
    const x = y * width;
    console.log(slice(screen, x, x + width));
  }
}

function objectMotion() {
  let screen = repeat(' ', WIDTH * HEIGHT);
  let carScreen = putObject(screen, WIDTH, HEIGHT, carParts, 16);
  let bridgeScreen = putObject(screen, WIDTH, HEIGHT, bridge, 35);

  for (let i = 0; i < 50; i++) {
    console.clear();
    // bridgeScreen = moveObject(bridgeScreen, WIDTH, HEIGHT, 1);
    displayScreen(bridgeScreen, WIDTH, HEIGHT);

    carScreen = moveObject(carScreen, WIDTH, HEIGHT, 1);
    displayScreen(carScreen, WIDTH, HEIGHT);
    wait(.7);
  }
}

objectMotion()
