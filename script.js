//GAMEPLAY

let playerWins = 0;
let computerWins = 0;

function getComputerSelection() {
    const shapes = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * shapes.length);
    console.log(shapes[random]);
    return(shapes[random]);
}

function disableButtons(){
    document.querySelector('#rockBtn').disabled = true;
    document.querySelector('#paperBtn').disabled = true;
    document.querySelector('#scissorsBtn').disabled = true;
};

function playRound(playerSelection){
    let computerSelection = getComputerSelection();
    let scoreboard = '';
    let playerScore = 0;
    let computerScore = 0;

        if(playerSelection === computerSelection){
            scoreboard = `It's a tie!`;
            playerScore = `Player score: ${playerWins}`;
            computerScore = `Computer score: ${computerWins}`;
    
        } if(
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ) {
            computerWins++;
            console.log(computerWins);
            scoreboard = `You lose!\n ${computerSelection} beats ${playerSelection}.`;
            playerScore = `Player score: ${playerWins}`;
            computerScore = `Computer score: ${computerWins}`;
            if(computerWins === 5) {
                scoreboard = '';
                scoreboard = "Computer won the game! Reload to play again!";
                disableButtons();
            }

        } if(
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "rock")

        ) {
            playerWins++;
            console.log(playerWins);
            scoreboard = `You win! ${playerSelection} beats ${computerSelection}. `;
            playerScore = `Player score: ${playerWins}`;
            computerScore = `Computer score: ${computerWins}`;
            if(playerWins === 5){
                scoreboard = '';
                scoreboard = `You win the game! Reload to play again!`;
                disableButtons();
            }

        }
        document.querySelector('#scoreboard').textContent = scoreboard;
        document.querySelector('#playerScore').textContent = playerScore;
        document.querySelector('#computerScore').textContent = computerScore;
        return
    }

// UI
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));