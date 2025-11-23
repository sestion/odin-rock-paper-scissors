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

function getHumanChoice(message) {
    let playerChoice = prompt(message);

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
    let result = getResult(humanChoice, computerChoice);
    let message = getMessage(humanChoice, computerChoice);

    console.log(message);

    return result;
}

function printFinalResult(humanScore, computerScore) {
    let finalResult =
        humanScore === computerScore
            ? "You draw!"
            : humanScore > computerScore
            ? "You won!"
            : "You lost!";

    console.log(
        `Final scores:\tYou [${humanScore}]\tCom [${computerScore}]\n${finalResult}`
    );
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= rounds; ++i) {
        let humanSelection = getHumanChoice(
            `Round ${i}\nInput your choice: Rock, Paper, Scissors`
        );
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === "Win") ++humanScore;
        if (result === "Lose") ++computerScore;

        console.log(
            `Round ${i}\nCurrent scores: \tYou [${humanScore}]\tCom [${computerScore}]`
        );
    }

    printFinalResult(humanScore, computerScore);
}

const numberOfRounds = 5;
playGame(numberOfRounds);
