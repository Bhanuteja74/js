function repeat(string, times) {
  if (times === 1) {
    return string;
  }

  return string + repeat(string, times - 1);
}

function cellBorder(string) {
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

function border(number) {
  if (number === 1) {
    return ' ┏────' + repeat('┯────', 9) + '┓\n | 🏁';
  }
  if (number === 100) {
    return ' | 🏆 | \n ┗────' + repeat('┷────', 9) + '┛';
  }
  if (number % 10 === 0) {
    return ' | ' + number + ' |\n ┣' + repeat('────┿', 9) + '────┫\n';
  }
  return number < 10 ? cellBorder('0' + number) : cellBorder(number);
}

function specialBorder(number, special) {
  if (number === 1) {
    return ' ┏────' + repeat('┯────', 9) + '┓\n' + cellBorder(special);
  }
  if (number === 100) {
    return cellBorder(special) + ' | \n ┗────' + repeat('┷────', 9) + '┛';
  }
  if (number % 10 === 0) {
    return cellBorder(special) + ' |\n ┣' + repeat('────┿', 9) + '────┫\n';
  }
  return cellBorder(special);
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
  return border(number);
}

function map(player1, player2) {
  console.clear();
  let boxStr = '';
  for (let i = 1; i < 101; i++) {
    boxStr = boxStr + box(i, player1, player2);
  }
  return boxStr;
}

function turnDice() {
  return Math.ceil(Math.random() * 12);
}

function startGame(player1, player2, turn) {
  if (player1 > 99) {
    return 'Player-1 win';
  }

  if (player2 > 99) {
    return 'Player-2 win';
  }

  if (turn) {
    console.log('Player-01 Turn\n');
    prompt('Press Enter for Roll the DICE');
    player1 += turnDice();
  } else {
    console.log('Player-02 Turn\n');
    prompt('Press Enter for Roll the DICE');
    player2 += turnDice();
  }

  console.log(map(player1, player2));
  console.log('Player-01:', player1);
  console.log('Player-02:', player2);
  return startGame(player1, player2, !turn);
}

console.log(startGame(0, 0, true));
