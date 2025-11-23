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

function getResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw";
    } else if (humanChoice === "Rock") {
        return computerChoice === "Scissors" ? "Win" : "Lose";
    } else if (humanChoice === "Paper") {
        return computerChoice === "Rock" ? "Win" : "Lose";
    } else if (humanChoice === "Scissors") {
        return computerChoice === "Paper" ? "Win" : "Lose";
    } else {
        return "getResult() Invalid state!";
    }
}

function getMessage(humanChoice, computerChoice) {
    let result = getResult(humanChoice, computerChoice);

    switch (result) {
        case "Draw":
            return `You draw! ${humanChoice} ties ${computerChoice}`;
        case "Win":
            return `You win! ${humanChoice} beats ${computerChoice}`;
        case "Lose":
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        default:
            return "getMessage() Invalid state!";
    }
}

function playRound(humanChoice, computerChoice) {
    let message = getMessage(humanChoice, computerChoice);
    console.log(message);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
