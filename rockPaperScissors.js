// Variables
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const div = document.querySelector('div');
const scorePara = document.createElement('p');
const msgPara = document.createElement('p');

// Score
let playerScore = 0;
let computerScore = 0;

// DOM
div.appendChild(scorePara);
div.appendChild(msgPara);
updateScore();

// Get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// Event listener
rockBtn.addEventListener('click', () => getPlayerChoice('rock'));
paperBtn.addEventListener('click', () => getPlayerChoice('paper'));
scissorsBtn.addEventListener('click', () => getPlayerChoice('scissors'));

// Get the player choice and start the game
function getPlayerChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

// Play Round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        msgPara.textContent = "Draw";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        msgPara.textContent = "You win! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        msgPara.textContent = "You win! Paper beats Rock";
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        msgPara.textContent = "You win! Scissors beats Paper";
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        msgPara.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        msgPara.textContent = "You lose! Scissors beats Paper";
        computerScore++
    } else {
        msgPara.textContent = "You lose! Paper beats Rock";
        computerScore++
    }

    // Update the score in the DOM
    updateScore();
    announceWinner();
}

//updateScore Function
function updateScore() {
    scorePara.textContent = `Player ${playerScore} x ${computerScore} Computer`;
}

//Announce winner and restart the game!
function announceWinner() {
    if (playerScore >= 5) {
        confirm("You Won! Do you want to restart the game?");
        window.location.reload();
    } else if (computerScore >= 5) {
        confirm("You Lost! Do you want to restart the game?");
        window.location.reload();
    }
}
