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

function board(player1, player2) {
  let boxStr = '';

  for (let boxIndex = 1; boxIndex < 101; boxIndex++) {
    boxStr = boxStr + box(boxIndex, player1, player2);
  }
  return boxStr;
}

function turnDice() {
  return Math.ceil(Math.random() * 12);
}

function getSnakeLadder(position) {
  switch (position) {
    case 4: return 56;
    case 12: return 50;
    case 14: return 55;
    case 22: return 58;
    case 41: return 79;
    case 54: return 88;

    case 96: return 42;
    case 94: return 71;
    case 75: return 32;
    case 48: return 16;
    case 37: return 3;
    case 28: return 10;
    default: return 0;
  }
}

function getPosition(playerName, dicedPlayer, unDicedPlayer, turn) {
  const diceValue = turnDice();// display the player name to show there turn
  console.log('Dice Value:', diceValue);
  dicedPlayer += diceValue;
  const isSnakeBite = isSnake(dicedPlayer);
  const isLadderClimb = isLadder(dicedPlayer);

  if (isSnakeBite) {
    console.log('Ooops!', playerName, '! Snake Bites');
  }

  if (isLadderClimb) {
    console.log('Hurry!', playerName, '! Climbed ladder');
  }

  if (isLadderClimb || isSnakeBite) {
    dicedPlayer = getSnakeLadder(dicedPlayer);
  }
  if (turn) {
    console.log(board(dicedPlayer, unDicedPlayer));
  } else {
    console.log(board(unDicedPlayer, dicedPlayer));
  }

  return dicedPlayer;
}

function startGame(player01Pos, player02Pos, turn, player01Name, player02Name) {
  if (player01Pos > 99) {
    return player01Name + ' Win';
  }

  if (player02Pos > 99) {
    return player02Name + ' Win';
  }

  if (turn) {
    console.log(player01Name, 'Turn\n');
    prompt('Press Enter for Roll the DICE');
    console.clear();
    player01Pos = getPosition(player01Name, player01Pos, player02Pos, turn);
  } else {
    console.log(player02Name, 'Turn\n');
    prompt('Press Enter for Roll the DICE');
    console.clear();
    player02Pos = getPosition(player02Name, player02Pos, player01Pos, turn);
  }
  console.log(player01Name, ':', player01Pos);
  console.log(player02Name, ':', player02Pos);

  return startGame(player01Pos, player02Pos, !turn, player01Name, player02Name);
}

console.log(startGame(0, 0, true, 'Ramu', 'Raghu'));
