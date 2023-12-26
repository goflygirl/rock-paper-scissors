
function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * shapes.length);
    //console.log(shapes[random]);
    return(shapes[random]);
}

function getPlayerSelection() {
    const playerSelection = (prompt('Please insert rock, paper or scissors: ')).toLowerCase();
    console.log(playerSelection);
    return(playerSelection);
}

function playRound(playerSelection, computerSelection){
        let tie = 0;
        let playerWin = 0;
        let computerWin = 0;
        if(playerSelection === computerSelection){
            tie++;
            return(console.log("It is a tie. Please play again!"));
    
        } else{
            if((computerSelection === "rock") & (playerSelection === "scissors")) {
                computerWin++;
                console.log(computerWin);
                return(console.log("Rock crushes scissors! You lose!"));
            }
            else if((computerSelection === "rock") & (playerSelection === "paper")){
                playerWin++;
                return(console.log("Paper covers rock. You win!"));
            }
            else if((computerSelection === "paper") & (playerSelection === "rock")){
                computerWin++;
                return(console.log("Paper beats rock. You lose!"));
            }
            else if((computerSelection === "paper") & (playerSelection === "scissors")){
                playerWin++;
                return(console.log("Scissors beat paper. You win!"));
            }
            else if((computerSelection === "scissors") & (playerSelection === "rock")){
                playerWin++;
                return(console.log("Rock beats scissors. You win!"));
    
            }
            else if((computerSelection === "scissors") && (playerSelection === "paper")){
                computerWin++;
                return(console.log("Scissors beat paper. You lose!"));
            }
        }

    }


function game(){
    playRound(playerSelection, computerSelection);
}


//playRound(playerSelection, computerSelection);
//console.log(playRound(playerSelection, computerSelection));