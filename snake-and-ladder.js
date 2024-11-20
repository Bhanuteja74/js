function repeat(string, times) {
  if (times === 1) {
    return string;
  }

  return string + repeat(string, times - 1);
}


function box(number, player1, player2) {
  if (number === player1) {
    return ' | ⛹️‍♂️ ';
  }
  if (number === player2) {
    return ' | ⛹🏿 ';
  }
  if (number === 28 || number === 37 || number === 48 || number === 75 || number === 94 || number === 96) {
    return ' | 🐍';
  }
  if (number === 4 || number === 12 || number === 14 || number === 22 || number === 41 || number === 54) {
    return ' | 🪜';
  }
  if (number === 1) {
    return ' ' + repeat('─', 51) + '\n | 🏁';
  }
  if (number === 100) {
    return ' | 🏆 | \n ' + repeat('─', 51);
  }
  if (number % 10 === 0) {
    return ' | ' + number + ' |\n ' + repeat('─', 51) + '\n';
  }
  return number < 10 ? ' | 0' + number : ' | ' + number;
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
    prompt('Press Any key for Roll the DICE');
    player1 += turnDice();
  } else {
    console.log('Player-02 Turn\n');
    prompt('Press Any key for Roll the DICE');
    player2 += turnDice();
  }

  console.log(map(player1, player2));
  console.log('Player-01:', player1);
  console.log('Player-02:', player2);
  return startGame(player1, player2, !turn);
}

console.log(startGame(0, 0, true));
