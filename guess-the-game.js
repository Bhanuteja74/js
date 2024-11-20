function getChances(mode) {
  if (mode === 1) {
    return 8;
  }
  return mode === 2 ? 6 : 4;
}

function displayPrompt(numToGuess, gussedNumber) {
  if (gussedNumber < numToGuess) {
    return 'Your Number is  LESSERTHAN the NUMBER';
  }
  return 'Your Number is GREATERTHAN the NUMBER';
}


function playGame() {
  console.log('\nEasy Mode   ->1\nMedian Mode ->2\nHard Mode   ->3');
  const mode = +prompt('Select Mode Number:');
  const chances = getChances(mode);
  const numToGuess = Math.floor(Math.random() * 100);
  console.log('Yeah you have', chances, 'chances.');

  for (let chanceCount = 0; chanceCount < chances; chanceCount++) {
    const gussedNumber = +prompt('Guess the Number:');
    const isGuessed = gussedNumber === numToGuess;

    if (isGuessed) {
      console.log('Hurryyyyy 👏👏🎉🎉🎉 YOU GUESSED the number ');
      break;
    }
    console.log(displayPrompt(numToGuess, gussedNumber));
  }

  console.log('The Number is:', numToGuess);
}

function readyGame() {
  playGame();

  if (confirm('You want to Play Again')) {
    readyGame();
  }
}

function startGame() {
  console.log('\n🙏 Welcome To The Game 🙏 --> GUESS THE NUMBER');
  console.log('👉 Number is between 1 to 100.');
  const isReady = confirm('Are you Ready');

  if (isReady) {
    readyGame();
  }

  console.log('Thank You for Visiting Game.\n   Have a 🥚🥚🥚 DAY.');
}

startGame();
