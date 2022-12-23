let res = document.getElementById('result');
let player;
let computer;
let result;

const playerText = document.querySelector('#player');
const computerText = document.querySelector('#computer');
const resultText = document.querySelector('#result');
const choiceBtn = document.querySelectorAll('.choiceBtn');

choiceBtn.forEach((button) =>
  button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player :${player}`;
    computerText.textContent = `Computer :${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  console.log(randNum);

  //   switch (randNum) {
  //     case 1:
  //       computer = 'ROCK';
  //       break;
  //     case 2:
  //       computer = 'PAPER';
  //       break;
  //     case 3:
  //       computer = 'SCRISSOR';
  //       break;
  //   }

  if (randNum == 1) {
    return (computer = 'ROCK');
  } else if (randNum == 2) {
    return (computer = 'PAPER');
  } else if (randNum == 3) {
    return (computer = 'SCRISSOR');
  }
}

function checkWinner() {
  if (player == computer) {
    res.style.color = 'blue';
    return 'Draw';
  } else if (computer == 'ROCK') {
    player == 'PAPER' ? (res.style.color = 'green') : (res.style.color = 'red');
    return player == 'PAPER' ? 'YOU WIN!' : 'YOU LOSE!';
  } else if (computer == 'PAPER') {
    player == 'SCRISSOR'
      ? (res.style.color = 'green')
      : (res.style.color = 'red');
    return player == 'SCRISSOR' ? 'YOU WIN!' : 'YOU LOSE!';
  } else if (computer == 'SCRISSOR') {
    player == 'ROCK' ? (res.style.color = 'green') : (res.style.color = 'red');
    return player == 'ROCK' ? 'YOU WIN!' : 'YOU LOSE!';
  }
}
