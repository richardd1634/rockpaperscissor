game();

function game() {
  let playerScore = 0,
    computerScore = 0,
    draws = 0;

  const result = document.querySelector("#result");
  const score = document.querySelector("#score");
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => playRound(event.target.id));
  });

  function playRound(playerSelection) {
    const computerSelection = getComputerSelection();

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
      draws++;
      result.textContent = "Draw!";
    }
    score.textContent = printScore();
    checkWinner();
  }

  function checkWinner() {
    if (playerScore === 5) {
      alert("Congratulations! You win this round");
      resetGame();
    } else if (computerScore === 5) {
      alert("Sorry, you lose this round");
      resetGame();
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    result.textContent = "";
    score.textContent = "";
  }

  function printScore() {
    return `Wins: ${playerScore} - Loses: ${computerScore} - Draws: ${draws}`;
  }
}

function getComputerSelection() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}
