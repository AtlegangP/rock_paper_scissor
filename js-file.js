let pScore = 0; let cScore = 0;

const container = document.querySelector("#container");

const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");

const results = document.querySelector("#results");
const eachRoundResult = document.querySelector("#eachRoundResult");

function computerPlay() {
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ["tie", "It's a tie", computerSelection];
    }

    else {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ["lose", "You lose! Paper beats rock", computerSelection];
        } else if (computerSelection === "scissors") {
            return ["win", "You win! Rock beats scissors", computerSelection];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return ["lose", "You lose! Scissors beat paper", computerSelection];
        } else if (computerSelection === "rock") {
            return ["win", "You win! Paper beats rock", computerSelection];
        }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
            return ["lose", "You lose! Rock beats scissors", computerSelection];
        } else if (computerSelection === "paper") {
            return ["win", "You win! Scissors beat paper", computerSelection];
        }
    }
    }
}

function restart() {
    const buttonDiv = document.querySelector('#buttons');
    buttons.forEach(button => button.remove());
    const restart = document.createElement('button');
    restart.style.cssText = 'width: 50%';
    restart.textContent = "NEW GAME";
    buttonDiv.appendChild(restart);
    restart.addEventListener('click', restart => location.reload());
}

function game(e) {
    let roundResult = playRound(this.id, computerPlay());

    if (roundResult[0] == 'win') {
        ++pScore
    }
    else if (roundResult[0] == 'lose') {
        ++cScore
    }

    playerScore.textContent = `${pScore}`;
    computerScore.textContent = `${cScore}`;
    playerChoice.textContent = `${this.id}`;
    computerChoice.textContent = `${roundResult[2]}`;
    eachRoundResult.textContent = `${roundResult[1]}`;

    if (pScore == 5 || cScore == 5) {
        if (pScore > cScore) {
            results.textContent = "Yay! You've won the game!";            
        } else if (pScore < cScore) {
            results.textContent = "Ouch! You've lost the game!"
        }
        restart();
    }
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', game));