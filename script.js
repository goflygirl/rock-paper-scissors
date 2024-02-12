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

function getPlayerSelection(input) {
    const playerSelection = input.toLowerCase();
    console.log(playerSelection);
    return(playerSelection);
}

function playRound(playerSelection, computerSelection){

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
        if(winner === "player") {
            console.log(playerSelection + " beats " + computerSelection);
            return
        }
        if(winner === "computer"){
            console.log(computerSelection + " beats " + playerSelection);
            return
        } 
        if(winner === "tie") {
            console.log(playerSelection + " ties with " + computerSelection);
            return
        }

    }

function game() {

    const computerSelection = getComputerSelection();
    const playerSelection = getPlayerSelection();
    playRound(playerSelection, computerSelection);
    updateGameScoreMessage();
}


// UI
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => getPlayerSelection('ROCK') );

paperBtn.addEventListener('click', () => getPlayerSelection('PAPER'));

scissorsBtn.addEventListener('click', () => getPlayerSelection('SCISSORS'));