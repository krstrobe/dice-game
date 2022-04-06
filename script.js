'use strict';

let currentPlayer = 'Player 1';

let totalScore = 0;
let totalScore2 = 0;

let currentScore = 0;
let currentScore2 = 0;

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (currentPlayer === 'Player 1') {
    totalScore = totalScore + currentScore;
    document.getElementById('score--0').textContent = totalScore;
    document.querySelector('.current-score').textContent = 0;
    switchPlayer();
    currentScore = 0;
  } else if (currentPlayer === 'Player 2') {
    totalScore2 = totalScore2 + currentScore2;
    document.getElementById('score--1').textContent = totalScore2;
    document.getElementById('current--1').textContent = 0;
    switchPlayer();
    currentScore2 = 0;
  }
});

document.querySelector('.btn--new').addEventListener('click', reset);

function reset() {
  currentPlayer = 'Player 1';
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.getElementById('score--0').textContent = 0;
  document.querySelector('.current-score').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;
}

function switchPlayer() {
  if (currentPlayer === 'Player 1') {
    currentPlayer = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else if (currentPlayer === 'Player 2') {
    currentPlayer = 'Player 1';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  let roll = Math.trunc(Math.random() * 6 + 1);

  if (currentPlayer === 'Player 1') {
    if (roll === 1) {
      document.querySelector('.dice').src = 'dice-1.png';
      switchPlayer();
      currentScore = 0;
    } else if (roll === 2) {
      document.querySelector('.dice').src = 'dice-2.png';
      currentScore = currentScore + 2;
    } else if (roll === 3) {
      document.querySelector('.dice').src = 'dice-3.png';
      currentScore = currentScore + 3;
    } else if (roll === 4) {
      document.querySelector('.dice').src = 'dice-4.png';
      currentScore = currentScore + 4;
    } else if (roll === 5) {
      document.querySelector('.dice').src = 'dice-5.png';
      currentScore = currentScore + 5;
    } else if (roll === 6) {
      document.querySelector('.dice').src = 'dice-6.png';
      currentScore = currentScore + 6;
    }

    document.getElementById('current--0').textContent = currentScore;
  } else if (currentPlayer === 'Player 2') {
    if (roll === 1) {
      document.querySelector('.dice').src = 'dice-1.png';
      switchPlayer();
      currentScore2 = 0;
    } else if (roll === 2) {
      document.querySelector('.dice').src = 'dice-2.png';
      currentScore2 = currentScore2 + 2;
    } else if (roll === 3) {
      document.querySelector('.dice').src = 'dice-3.png';
      currentScore2 = currentScore2 + 3;
    } else if (roll === 4) {
      document.querySelector('.dice').src = 'dice-4.png';
      currentScore2 = currentScore2 + 4;
    } else if (roll === 5) {
      document.querySelector('.dice').src = 'dice-5.png';
      currentScore2 = currentScore2 + 5;
    } else if (roll === 6) {
      document.querySelector('.dice').src = 'dice-6.png';
      currentScore2 = currentScore2 + 6;
    }
    document.getElementById('current--1').textContent = currentScore2;
  }
});
