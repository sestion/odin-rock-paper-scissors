function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return undefined;
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Input your choice: Rock, Paper or Scissors");

    switch (playerChoice.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return undefined;
    }
}

let humanScore = 0;
let computerScore = 0;