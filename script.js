'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
///////////////////
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';

    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
*/
/*
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
// });

//Challenge
/*
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

///////////////////////////////////
// REDO

let score = 20;
let highScore = 0;

let magicNumber = Math.trunc(Math.random() * 20 + 1);
console.log(magicNumber);

document.querySelector('.check').addEventListener('click', function () {
  // let message = document.querySelector('.message').textContent;
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum);

  // When someone wins
  if (guessNum === magicNumber) {
    document.querySelector('.message').textContent =
      'Congratulations!! You win🎉';
    document.querySelector('.number').textContent = magicNumber;
    document.querySelector('body').style.backgroundColor = 'yellow';
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.check').disabled = true;

    // When the guess is higher than the magic number
  } else if (guessNum > magicNumber) {
    document.querySelector('.message').textContent = '😱 Too high';
    score -= 1;

    // When the guess is less than the magic number
  } else if (guessNum < magicNumber && guessNum > 0) {
    document.querySelector('.message').textContent = '😥 Too low';
    score -= 1;
  }

  //  When no number is input
  // if()

  if (!guessNum) {
    document.querySelector('.message').textContent = '🙅🏾‍♂️ No number!';
    score = score;
  }

  if (score === 0) return;

  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  console.log(magicNumber);

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#003559';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
