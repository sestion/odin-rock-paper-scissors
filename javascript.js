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

function playGame() {
    createGameUI();
}

function createGameUI() {
    const gameContainer = document.querySelector("#game-container");
    createPara("human-score", "Human Score: 0", gameContainer);
    createPara("computer-score", "Computer Score: 0", gameContainer);
    createButton("Rock", gameContainer);
    createButton("Paper", gameContainer);
    createButton("Scissors", gameContainer);
    createPara("result", "", gameContainer);
}

function createButton(id, parent) {
    const btn = document.createElement("button");
    btn.setAttribute("id", id);
    btn.textContent = id;
    parent.appendChild(btn);
}

function createPara(id, text, parent) {
    const p = document.createElement("p");
    p.setAttribute("id", id);
    p.textContent = text;
    parent.appendChild(p);
}

function resetGame() {
    // reset game menu
    const playButton = document.querySelector("#play-game");
    playButton.disabled = false;

    // reset game container
    const gameContainer = document.querySelector("#game-container");
    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
    }
}

function changeGameState(e) {
    const target = e.target;

    switch (target.id) {
        case "play-game":
            target.disabled = true;
            playGame();
            break;
        case "reset-game":
            resetGame();
            break;
    }
}

const gameMenu = document.querySelector("#game-menu");
gameMenu.addEventListener("click", changeGameState);
