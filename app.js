let playerScore = 0;
let computerScore = 0;
let gameChoices = ['rock', 'paper', 'scissors'];
let round = 1;
const hands = document.querySelectorAll('.hand-container__hand');
const roundSpan = document.querySelector('.scoreboard .heading-secondary span');
const userScoreDiv = document.querySelector(
  '.scoreboard__scores--user-score div'
);
const computerScoreDiv = document.querySelector(
  '.scoreboard__scores--computer-score div'
);
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.heading-primary');
let computerHand = document.querySelector(
  '.section-computer-side .hand-container__hand'
);

function computerPlay() {
  let randomNum = Math.floor(Math.random() * gameChoices.length);
  if (randomNum === 3) {
    return gameChoices[2];
  }
  return gameChoices[randomNum];
}

// Player selection
let playerSelection;
const selectionContianer = document.querySelector(
  '.section-user-side .hand-container'
);

selectionContianer.addEventListener('click', function(e) {
  if (e.target.attributes.alt) {
    if (e.target.attributes.alt.value === 'rock') {
      playerSelection = 'rock';
    } else if (e.target.attributes.alt.value === 'paper') {
      playerSelection = 'paper';
    } else if (e.target.attributes.alt.value === 'scissors') {
      playerSelection = 'scissors';
    }

    let computerSelection = computerPlay().toLowerCase();

    computerHand.attributes.src.value = `img/${computerSelection}.png`;
    if (computerHand.attributes.src.value === 'img/paper.png') {
      computerHand.style.transform = 'rotateX(180deg)';
    } else if (computerHand.attributes.src.value === 'img/rock.png') {
      computerHand.style.transform = 'rotateZ(-45deg)';
    } else if (computerHand.attributes.src.value === 'img/scissors.png') {
      computerHand.style.transform = 'rotateX(0)';
    }

    playRound(playerSelection, computerSelection);
  }
});

const playRound = function(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    roundResult.textContent = `You win round ${round}! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    ++computerScore;
    roundResult.textContent = `You lose round ${round}! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    ++computerScore;
    roundResult.textContent = `You lose round ${round}! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    ++playerScore;
    roundResult.textContent = `You win round ${round}! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    ++computerScore;
    roundResult.textContent = `You lose round ${round}! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    ++playerScore;
    roundResult.textContent = `You win round ${round}! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    roundResult.textContent = `Round ${round} is a tie!`;
  }

  // updating scoreboard

  roundSpan.textContent = `${round}`;

  userScoreDiv.textContent = `${playerScore}`;

  computerScoreDiv.textContent = `${computerScore}`;

  if (round < 5) {
    ++round;
  } else {
    roundSpan.textContent = 5;

    hands.forEach(hand => {
      hand.style.visibility = 'hidden';
    });

    if (playerScore > computerScore) {
      gameResult.textContent = 'You win! Best out of five';
    } else if (playerScore < computerScore) {
      gameResult.textContent = 'You lost! try again';
    } else {
      gameResult.textContent = "It's a tie! Have another go";
    }

    resetBtn.style.visibility = 'visible';
  }
};

const resetBtn = document.querySelector('.btn');
resetBtn.addEventListener('click', function() {
  hands.forEach(hand => {
    hand.style.visibility = 'visible';
  });
  playerScore = 0;
  computerScore = 0;
  round = 1;
  roundSpan.textContent = `${round}`;
  userScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;
  roundResult.textContent = '';
  gameResult.textContent = 'Rock Paper Scissors';
  resetBtn.style.visibility = 'hidden';
  computerHand.attributes.src.value = 'img/rock.png';
  computerHand.style.transform = 'rotateZ(-45deg)';
});
