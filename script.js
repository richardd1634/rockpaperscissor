game();

function game() {
  let playerScore = 0,
    computerScore = 0,
    draws = 0;

  const result = document.querySelector("#result");
  const score = document.querySelector("#score");
  const btns = document.querySelectorAll("button");

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) =>
      playRound(event.target.textContent)
    );
  });

  function playRound(playerSelection) {
    const computerSelection = getComputerSelection();

    if (playerSelection === computerSelection) {
      draws++;
      result.textContent = "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      result.textContent = "You lose! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      playerScore++;
      result.textContent = "You win! rock beats scissor";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      computerScore++;
      result.textContent = "You lose! scissor beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      result.textContent = "You win! paper beats rock";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      computerScore++;
      result.textContent = "You lose! rock beats scissor";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      playerScore++;
      result.textContent = "You win! scissor beats paper";
    }
    score.textContent = printScore();
  }

  function printResult() {
    if (playerScore >= 5) {
      return "You are the winner!";
    } else if (playerScore < computerScore) {
      return "You are the loser!";
    } else {
      return "You win! " + printScore();
    }
  }

  function printScore() {
    return `Wins: ${playerScore} - Loses: ${computerScore} - Draws: ${draws}`;
  }
}

function getComputerSelection() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}
