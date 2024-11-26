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

function checkWin(playerselects) {
  for (let index = 0; index < 8; index++) {
    if (isSubset(playerselects, winnings(index))) {
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
  const choice = +prompt('Enter Valid choice:');
  if (choice > 0 && choice < 10) {
    return choice + '';
  }

  console.log('Please Enter Valid Number between 1 to 10.');
  return getPlayerChoice();
}

function getChoice(firstPlayerselects, secondPlayerselects, turn) {
  const playerChoice = getPlayerChoice();
  if (isSubset(firstPlayerselects, playerChoice) || isSubset(secondPlayerselects, playerChoice)) {
    console.log('Choice already selected. Please selected Again.');
    getChoice(firstPlayerselects, secondPlayerselects, turn);
  }

  return playerChoice;
}

function winMessage(firstPlayer, secondPlayer, turn) {
  const wonPlayer = turn ? firstPlayer : secondPlayer;
  const lossPlayer = !turn ? firstPlayer : secondPlayer;

  console.log('Congratualations! ', wonPlayer, 'You won the game');
  console.log('Better luck next time! ', lossPlayer);
}

function drawMessage() {
  console.log('GAME DRAW');
}

function gameDraw(firstPlayerselects, secondPlayerselects) {
  return firstPlayerselects.length + secondPlayerselects.length > 8;
}

function gameOver(firstPlayer, secondPlayer, firstPlayerselects, secondPlayerselects, playerWon, turn) {
  if (playerWon) {
    winMessage(firstPlayer, secondPlayer, turn);
  }

  const isGameDraw = gameDraw(firstPlayerselects, secondPlayerselects);
  if (isGameDraw) {
    drawMessage();
  }

  return playerWon || isGameDraw;
}

function displayselects(firstPlayer, secondPlayer, firstPlayerselects, secondPlayerselects) {
  console.log(firstPlayer, ': selects:', firstPlayerselects);
  console.log(secondPlayer, ': selects:', secondPlayerselects + '\n');
}


function startGame(firstPlayer, secondPlayer) {
  let firstPlayerselects = '';
  let secondPlayerselects = '';
  let turn = true;
  let isGameOver = false;

  while (!isGameOver) {
    const choice = getChoice(firstPlayerselects, secondPlayerselects, turn);
    let playerWon = false;

    if (turn) {
      firstPlayerselects += choice;
      playerWon = checkWin(firstPlayerselects);
    } else {
      secondPlayerselects += choice;
      playerWon = checkWin(secondPlayerselects);
    }

    isGameOver = gameOver(
      firstPlayer,
      secondPlayer,
      firstPlayerselects,
      secondPlayerselects,
      playerWon,
      turn
    );


    displayselects(firstPlayer, secondPlayer, firstPlayerselects, secondPlayerselects);
    turn = !turn;
  }
}

function getFirstPlayerDetailes() {
  return prompt('Enter first player name:');
}

function getSecondPlayerDetailes() {
  return prompt('Enter second player name:');
  return 'raj';
}

function welcomeMessage() {
  console.log('Welcome To Tic-Tac-Toe');
}

function start() {
  welcomeMessage();
  const firstPlayer = getFirstPlayerDetailes();
  const secondPlayer = getSecondPlayerDetailes();
  startGame(firstPlayer, secondPlayer);

  console.log('Thankyou for Playing');
}

start();
