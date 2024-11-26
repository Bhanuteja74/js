function winnings(index) {
  switch (index) {
    case 0: return '123';
    case 1: return '456';
    case 2: return '789';
    case 3: return '147';
    case 4: return '258';
    case 5: return '369';
    case 6: return '357';
    case 7: return '159';
  }
}

function checkWin(playerMoves) {
  for (let index = 0; index < 8; index++) {
    if (isSubset(playerMoves, winnings(index))) {
      return true;
    }
  }

  return false;
}

function charPresent(string, char) {
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (string[stringIndex] === char) {
      return true;
    }
  }

  return false;
}

function isSubset(mainSet, subSet) {
  for (let subSetIndex = 0; subSetIndex < subSet.length; subSetIndex++) {
    if (!charPresent(mainSet, subSet[subSetIndex])) {
      return false;
    }
  }

  return true;
}

function getPlayerChoice() {
  const choice = prompt('Enter choice:');
  return choice;
}

function getChoice(firstPlayerMoves, secondPlayerMoves, turn) {
  const playerChoice = getPlayerChoice();
  if (isSubset(firstPlayerMoves, playerChoice) || isSubset(secondPlayerMoves, playerChoice)) {
    console.log('Invalid');
    getChoice(firstPlayerMoves, secondPlayerMoves, turn);
  }

  return playerChoice;
}

function getFirstPlayerDetailes() {
  return prompt('Enter first player name:');
}

function getSecondPlayerDetailes() {
  return prompt('Enter second player name:');
  return 'raj';
}

function startGame() {
  let firstPlayerMoves = '';
  let secondPlayerMoves = '';
  let turn = true;
  let isGameOver = false;

  while (!isGameOver) {
    const choice = getChoice(firstPlayerMoves, secondPlayerMoves, turn);
    let playerWon = false;

    if (turn) {
      firstPlayerMoves += choice;
      playerWon = checkWin(firstPlayerMoves);
    } else {
      secondPlayerMoves += choice;
      playerWon = checkWin(secondPlayerMoves);
    }
    
    turn = !turn;
    isGameOver = playerWon;
  }
}

function start() {
  // welcomeMessage();
  const firstPlayer = getFirstPlayerDetailes();
  const secondPlayer = getSecondPlayerDetailes();
  startGame(firstPlayer, secondPlayer);
}

start();
