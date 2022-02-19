game();

function game() {
  let playerScore = 0,
    computerScore = 0;

  const result = document.querySelector("#result");
  const btns = document.querySelectorAll(".btn-player");
  const compuPlay = document.querySelector("#computer-play");
  const playAgainBtn = document.querySelector("#play-again");
  const playerPoints = document.querySelector("#player-score");
  const computerPoints = document.querySelector("#computer-score");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => playRound(event.currentTarget.id));
  });

  playAgainBtn.addEventListener("click", () => resetGame());

  function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    compuPlay.src = "img/" + computerSelection + "2.jpeg";

    if (playerSelection === "btn-rock" && computerSelection === "paper") {
      computerScore++;
      result.textContent = "You lose! paper beats rock";
    } else if (
      playerSelection === "btn-rock" &&
      computerSelection === "scissor"
    ) {
      playerScore++;
      result.textContent = "You win! rock beats scissor";
    } else if (
      playerSelection === "btn-paper" &&
      computerSelection === "scissor"
    ) {
      computerScore++;
      result.textContent = "You lose! scissor beats paper";
    } else if (
      playerSelection === "btn-paper" &&
      computerSelection === "rock"
    ) {
      playerScore++;
      result.textContent = "You win! paper beats rock";
    } else if (
      playerSelection === "btn-scissor" &&
      computerSelection === "rock"
    ) {
      computerScore++;
      result.textContent = "You lose! rock beats scissor";
    } else if (
      playerSelection === "btn-scissor" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      result.textContent = "You win! scissor beats paper";
    } else {
      result.textContent = "Draw!";
    }
    printScore();
    checkWinner();
  }

  function checkWinner() {
    if (playerScore === 5) {
      result.textContent = "Congratulations! You win this round";
      disableBtns();
    } else if (computerScore === 5) {
      result.textContent = "Sorry, you lose this round";
      disableBtns();
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    compuPlay.src = "";
    playerPoints.textContent = "";
    computerPoints.textContent = "";
    enableBtns();
  }

  function enableBtns() {
    btns.forEach((btn) => {
      btn.disabled = false;
    });

    playAgainBtn.disabled = true;
  }

  function disableBtns() {
    btns.forEach((btn) => {
      btn.disabled = true;
    });

    playAgainBtn.disabled = false;
  }

  function printScore() {
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;
    return;
  }
}

function getComputerSelection() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}
