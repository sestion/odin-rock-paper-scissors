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

    updateResult("result", message);

    if (result === "Win") {
        ++humanScore;
        updateResult("human-score", `Human Score: ${humanScore}`);
    }
    if (result === "Lose") {
        ++computerScore;
        updateResult("computer-score", `Computer Score: ${computerScore}`);
    }

    if (humanScore === roundsToWin || computerScore === roundsToWin) {
        printFinalResult(humanScore, computerScore);
    }
}

function updateResult(id, message) {
    const result = document.querySelector(`#${id}`);
    result.textContent = message;
}

function hideElement(id) {
    const elem = document.querySelector(`#${id}`);
    elem.style.display = "none";
}

function showElement(id) {
    const elem = document.querySelector(`#${id}`);
    elem.style.display = "";
}

function printFinalResult(humanScore, computerScore) {
    let finalResult = humanScore > computerScore ? "You won the game!" : "You lost the game!";

    hideElement("Rock");
    hideElement("Paper");
    hideElement("Scissors");
    updateResult("result", finalResult);
}

function createGameUI() {
    const gameContainer = document.querySelector("#game-container");
    createPara("rounds", `First to ${roundsToWin} rounds wins!`, gameContainer);
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
    humanScore = 0;
    computerScore = 0;
    updateResult("human-score", `Human Score: ${humanScore}`);
    updateResult("computer-score", `Computer Score: ${computerScore}`);

    showElement("Rock");
    showElement("Paper");
    showElement("Scissors");

    updateResult("result", "");
}

function changeGameState(e) {
    const target = e.target;

    switch (target.id) {
        case "play-game":
            target.disabled = true;
            createGameUI();
            break;
        case "reset-game":
            resetGame();
            break;
    }
}

function playerAction(e) {
    const target = e.target;

    switch (target.id) {
        case "Rock":
        case "Paper":
        case "Scissors":
            playRound(target.id, getComputerChoice());
            break;
    }
}

const gameMenu = document.querySelector("#game-menu");
gameMenu.addEventListener("click", changeGameState);

const gameContainer = document.querySelector("#game-container");
gameContainer.addEventListener("click", playerAction);

let humanScore = 0;
let computerScore = 0;
const roundsToWin = 5;
