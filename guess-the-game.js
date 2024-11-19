function getChances(mode) {
  const chances = mode === 1 ? 4 : 6;
  return mode === 2 ? chances : 8;
}

function displayPrompt(gussedNumber) {
  if (gussedNumber < num) {
    return 'Your Number is LESSERTHAN the NUMBER';
  }
  return 'Your Number is GREATERTHAN the NUMBER';
}

console.log('\n🙏 Welcome To The Game 🙏 --> GUESS THE NUMBER');
console.log('👉 Number is between 1 and 100.');
console.log('\nEasy Mode(8)  ->1\nMedian Mode(6) ->2\nHard Mode(4)   ->3')

const mode = +prompt('Select Mode Number:');
const chances = getChances(mode);
const num = Math.floor(Math.random() * 100);

for (let chanceCount = 0; chanceCount < chances; chanceCount++) {
  const gussedNumber = +prompt('Guess the Number:');

  if (gussedNumber === num) {
    console.log('Hurryyyyy 👏👏🎉🎉🎉 YOU GUESSED the number ');
    break;
  }
  console.log(displayPrompt(gussedNumber));
}

console.log('The Number is:', num);
