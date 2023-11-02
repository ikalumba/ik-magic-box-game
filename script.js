'use strict';

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
    document.querySelector('body').style.backgroundColor = '#F58A51';
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.check').disabled = true;

    setTimeout(function () {
      document.querySelector('body').style.backgroundColor = '#3EB3F2';
    }, 2000);
    // }, 2000);}

    /*
    setTimeout(function () {
      setInterval(function () {
        document.querySelector('body').style.backgroundColor = 'blue';
      }, 3000);
      setInterval(function () {
        document.querySelector('body').style.backgroundColor = 'green';
      }, 5000);
    }, 3000);
*/
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

  document.querySelector('.message').textContent =
    'Start guessing... (Pick a number between 1 - 20)';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#003559';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  clearTimeout();
  clearInterval();
});

// setInterval(function () {
//   console.log('hey');
// }, 1500);
