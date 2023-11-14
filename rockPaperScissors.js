// Variables
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const win = "You win!";
const lose = "You lose!";
const draw = "Draw";

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
        console.log(draw);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log(win);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log(win);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log(win);
    } else {
        computerScore++;
        console.log(lose);
    }

    // Update the score in the DOM
    updateScore();
}

//updateScore Function
function updateScore() {
    scorePara.textContent = `Player ${playerScore} x ${computerScore} Computer`;
}

