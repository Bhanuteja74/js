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

function prepareCell(number, player1, player2) {
  if (number === player1) {
    return player1 === player2 ?
      specialBorder(number, '⛹️‍♂️⛹🏿') :
      specialBorder(number, '⛹️‍♂️ ');
  }
  if (number === player2) {
    return player1 === player2 ?
      specialBorder(number, '⛹️‍♂️⛹🏿') :
      specialBorder(number, '⛹🏿 ');
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
    boxStr = boxStr + prepareCell(boxIndex, player1, player2);
  }
  return boxStr;
}

function diceSix() {
  const die = '┏━━━━━━━━┓\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function diceFive() {
  const die = '┏━━━━━━━━┓\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┃   🟢   ┃\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function diceFour() {
  const die = '┏━━━━━━━━┓\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┃        ┃\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function diceThree() {
  const die = '┏━━━━━━━━┓\n' +
    '┃   🟢   ┃\n' +
    '┃        ┃\n' +
    '┃🟢    🟢┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function diceTwo() {
  const die = '┏━━━━━━━━┓\n' +
    '┃        ┃\n' +
    '┃ 🟢  🟢 ┃\n' +
    '┃        ┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function diceOne() {
  const die = '┏━━━━━━━━┓\n' +
    '┃        ┃\n' +
    '┃   🟢   ┃\n' +
    '┃        ┃\n' +
    '┗━━━━━━━━┛'
  console.log(die);
}

function displayDice(number) {
  console.clear();
  switch (number) {
    case 1: return diceOne();
    case 2: return diceTwo();
    case 3: return diceThree();
    case 4: return diceFour();
    case 5: return diceFive();
    case 6: return diceSix();
  }
}

function wait(seconds) {
  for (let s = 0; s < seconds * 100; s++) {
    for (let ms = 0; ms < s * 50000; ms++) { }
  }
}

function turnDice() {
  for (let rollingTime = 0; rollingTime < 9; rollingTime++) {
    const diceRolling = Math.ceil(Math.random() * 6);
    displayDice(diceRolling);
    wait(.9);
  }

  const diceValue = Math.ceil(Math.random() * 6);
  displayDice(diceValue);
  return diceValue;
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

function validDiceValue(dicedPlayer, diceValue) {
  return diceValue + dicedPlayer > 100 ? dicedPlayer : diceValue + dicedPlayer;
}

function newPosition(playerName, dicedPlayer) {
  const isSnakeBite = isSnake(dicedPlayer);
  const isLadderClimb = isLadder(dicedPlayer);

  if (isSnakeBite) {
    console.log('Ooops!', playerName, '! Snake Bites');
    return getSnakeLadder(dicedPlayer);
  }
  if (isLadderClimb) {
    console.log('Hurry!', playerName, '! Climbed ladder');
    return getSnakeLadder(dicedPlayer);
  }

  // console.log();
  return dicedPlayer;
}

function getPosition(playerName, dicedPlayer, unDicedPlayer, turn) {
  const diceValue = turnDice();// display the player name to show there turn
  console.log('Dice Value:', diceValue);
  dicedPlayer = validDiceValue(dicedPlayer, diceValue);
  const newPos = newPosition(playerName, dicedPlayer);

  if (turn) {
    console.log(board(newPos, unDicedPlayer));
  } else {
    console.log(board(unDicedPlayer, newPos));
  }

  return newPos;
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

function welcome() {
  console.log('welcome to the game');
  const player01Name = prompt('Enter the first player name:');
  const player02Name = prompt('Enter the second player name:');
  console.log(startGame(0, 0, true, player01Name, player02Name));
}

welcome();
