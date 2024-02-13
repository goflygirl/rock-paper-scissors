//GAMEPLAY

let playerWins = 0;
let computerWins = 0;
let roundWinner = "";

function getComputerSelection() {
    const shapes = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * shapes.length);
    console.log(shapes[random]);
    return(shapes[random]);
}

function playRound(playerSelection){
    let computerSelection = getComputerSelection();
        if(playerSelection === computerSelection){
            roundWinner = "tie";
    
        } if(
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper")
        ) {
            computerWins++;
            roundWinner = "computer";

        } if(
            (computerSelection === "rock" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "rock")

        ) {
            playerWins++;
            roundWinner = "player";

        }
        updateGameScoreMessage(roundWinner, playerSelection, computerSelection)
    }


    function updateGameScoreMessage(winner, playerSelection, computerSelection){
        let scoreboard = '';
        if(winner === "player") {
            scoreboard = (playerSelection + " beats " + computerSelection);
            //console.log(scoreboard);
        }
        if(winner === "computer"){
            scoreboard = (computerSelection + " beats " + playerSelection);
        } 
        if(winner === "tie") {
            scoreboard = (playerSelection + " ties with " + computerSelection);
        }
        document.querySelector('#scoreboard').textContent = scoreboard;
        return
    }


// UI
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

updateGameScoreMessage();