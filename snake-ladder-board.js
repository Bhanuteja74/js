function repeat(string, times) {
  if (times === 1) {
    return string;
  }

  return string + repeat(string, times - 1);
}

function verticalBorder(string) {
  return ' | ' + string;
}

function isSnake(number) {
  const isSnakeFound = number === 28 || number === 37 || number === 48;
  return isSnakeFound || number === 75 || number === 94 || number === 96;
}

function isLadder(number) {
  const isLadderFound = number === 4 || number === 12 || number === 14;
  return isLadderFound || number === 22 || number === 41 || number === 54;
}

function horizontalBorder(number) {
  if (number === 1) {
    return ' ┏────' + repeat('┯────', 9) + '┓\n | 🏁';
  }
  if (number === 100) {
    return ' | 🏆 | \n ┗────' + repeat('┷────', 9) + '┛';
  }
  if (number % 10 === 0) {
    return ' | ' + number + ' |\n ┣' + repeat('────┿', 9) + '────┫\n';
  }
  return number < 10 ? verticalBorder('0' + number) : verticalBorder(number);
}

function specialBorder(number, special) {
  if (number === 1) {
    return ' ┏────' + repeat('┯────', 9) + '┓\n' + verticalBorder(special);
  }
  if (number === 100) {
    return verticalBorder(special) + ' | \n ┗────' + repeat('┷────', 9) + '┛';
  }
  if (number % 10 === 0) {
    return verticalBorder(special) + ' |\n ┣' + repeat('────┿', 9) + '────┫\n';
  }
  return verticalBorder(special);
}

function box(number, player1, player2) {
  if (number === player1) {
    return specialBorder(number, '⛹️‍♂️ ');
  }
  if (number === player2) {
    return specialBorder(number, '⛹🏿 ');
  }
  if (isSnake(number)) {
    return specialBorder(number, '🐍');
  }
  if (isLadder(number)) {
    return specialBorder(number, '🪜');
  }
  return horizontalBorder(number);
}

let b = '';
for (let i = 1; i < 101; i++) {
  b = b + box(i, 2, 4);
}
console.log(b);
