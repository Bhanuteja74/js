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
  for (let rollingTime = 0; rollingTime < 15; rollingTime++) {
    const diceRolling = Math.ceil(Math.random() * 6);
    displayDice(diceRolling);
    wait(.9);
  }

  const diceValue = Math.ceil(Math.random() * 6);
  displayDice(diceValue);
  return diceValue;
}

turnDice();
