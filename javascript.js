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
    let playerChoice = parseInt(
        prompt(
            "Input a number between 0 and 2 \n0 = Rock, 1 = Paper, 2 = Scissors"
        )
    );

    switch (playerChoice) {
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

let humanScore = 0;
let computerScore = 0;