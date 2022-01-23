const elCheck = document.querySelector('.check');
const elMessage = document.querySelector('.message');
const elNumber = document.querySelector('.number');
const elScore = document.querySelector('.score');
const elAgainBtn = document.querySelector('.again');
const elHighScore = document.querySelector('.highscore')

let elBody = document.querySelector('body')

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  elMessage.textContent = message
}


elCheck.addEventListener('click', () => { 
  let guessNum = Number(document.querySelector('.guess').value);

  // when user do not enter a number 
  if (!guessNum) {
    displayMessage('⛔️ No need enter number');
  }
  // when user find right number
  else if (guessNum === secretNumber) {
    displayMessage('🎉 Correct Number!')

    elBody.style.backgroundColor = '#60b347';
    elNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = highScore;
    }
    elNumber.textContent = guessNum;
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      elScore.textContent = score
    } else {
      displayMessage('💥 You lost the game!');
      elScore.textContent = 0;
    }
  }
})

// When Clicked Again Button
elAgainBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('start guessing');
  elScore.textContent = score;
  elNumber.textContent = '?';
  document.querySelector('.guess').value = '';

  elBody.style.backgroundColor = '#222';
  elNumber.style.width = '15rem';
})
