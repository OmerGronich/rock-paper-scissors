var playerScore = 0;
var computerScore = 0;
var gameChoices = ['rock', 'paper', 'scissors'];

// Function that prints each player's score every round
var score = function() {
  return `Player score: ${playerScore}, Computer score: ${computerScore}`;
};

// Generating random computer choice
function computerPlay() {
  var randomNum = Math.floor(Math.random() * gameChoices.length);
  return gameChoices[randomNum];
}

// Game function
function game() {
  // For now hard coding 5 rounds, will change in the future
  for (var i = 1; i <= 5; i++) {
    // Validation - making sure that player picks the right choice
    const playerSelection = prompt(
      'Pick either Rock, Paper or Scissors'
    ).toLowerCase();
    const computerSelection = computerPlay().toLowerCase();

    if (gameChoices.includes(playerSelection.toLowerCase())) {
      console.log(playRound(playerSelection, computerSelection));
    } else {
      alert('Oops! You need to pick either rock, paper or scissors');
      --i; //making sure i that the round isn't skipped
    }
  }

  // The basic logic of a round
  function playRound(playerSelection, computerSelection) {
    console.log(`---Round ${i}---`);
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      ++playerScore;
      return `You win round ${i}! ${playerSelection} beats ${computerSelection}\n---${score()}---`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      ++computerScore;
      return `You lose round ${i}! ${computerSelection} beats ${playerSelection}\n---${score()}---`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      ++computerScore;
      return `You lose round ${i}! ${computerSelection} beats ${playerSelection}\n---${score()}---`;
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      ++playerScore;
      return `You win round ${i}! ${playerSelection} beats ${computerSelection}\n---${score()}---`;
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      ++computerScore;
      return `You lose round ${i}! ${computerSelection} beats ${playerSelection}\n---${score()}---`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      ++playerScore;
      return `You win round ${i}! ${playerSelection} beats ${computerSelection}\n---${score()}---`;
    } else if (playerSelection === computerSelection) {
      return `Round ${i} is a tie!\n---${score()}---`;
    }
  }

  i = --i;

  var winner =
    playerScore > computerScore
      ? `You win! Best out of ${i}`
      : playerScore === computerScore
      ? `It's a tie! No one wins.`
      : `Computer wins! Best out of ${i}`;

  return winner;
}
console.log(game());
