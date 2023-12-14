
function getComputerChoice() {
    const shapes = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * shapes.length);
    //console.log(shapes[random]);
    return(shapes[random]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return(console.log("It is a tie. Please play again!"));

    } else{
        if((computerSelection === "rock") & (playerSelection === "scissors")) {
            return(console.log("Rock crushes scissors! You lose!"));
        }
        else if((computerSelection === "rock") & (playerSelection === "paper")){
            return(console.log("Paper covers rock. You win!"));
        }
        else if((computerSelection === "paper") & (playerSelection === "rock")){
            return(console.log("Paper beats rock. You lose!"));
        }
        else if((computerSelection === "paper") & (playerSelection === "scissors")){
            return(console.log("Scissors beat paper. You win!"));
        }
        else if((computerSelection === "scissors") & (playerSelection === "rock")){
            return(console.log("Rock beats scissors. You win!"));

        }
        else if((computerSelection === "scissors") && (playerSelection === "paper")){
            return(console.log("Scissors beat paper. You lose!"));
        }
    }

}

const computerSelection = getComputerChoice();
console.log(computerSelection);

const playerSelection = (prompt('Please insert rock, paper or scissors: ')).toLowerCase();
console.log(playerSelection);

//playRound(playerSelection, computerSelection);
//console.log(playRound(playerSelection, computerSelection));