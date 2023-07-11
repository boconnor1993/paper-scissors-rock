document.addEventListener("DOMContentLoaded", function() {
    const options = ["rock", "paper", "scissors"];
    const player = "player";
    const computer = "computer";
    const draw = "draw";
    let playerScore = 0;
    let computerScore = 0;
  
    function computerSelection() {
      return options[Math.floor(Math.random() * options.length)];
    }
  
    function playRound(playerItem) {
      const computerItem = computerSelection().toLowerCase();
  
      if (playerItem === computerItem) {
        document.getElementById("result").textContent = "Draw!";
        return draw;
      } else if (
        (playerItem === "rock" && computerItem === "scissors") ||
        (playerItem === "scissors" && computerItem === "paper") ||
        (playerItem === "paper" && computerItem === "rock")
      ) {
        document.getElementById("result").textContent = `Congrats! You win with ${playerItem} as the computer chose ${computerItem}!`;
        return player;
      } else if (
        (computerItem === "rock" && playerItem === "scissors") ||
        (computerItem === "scissors" && playerItem === "paper") ||
        (computerItem === "paper" && playerItem === "rock")
      ) {
        document.getElementById("result").textContent = `Unlucky! You lose with ${playerItem} as the computer chose ${computerItem}!`;
        return computer;
      } else {
        document.getElementById("result").textContent =
          "Error with playRound function, investigate";
      }
    }
  
    function updateScore(winner) {
      if (winner === player) {
        playerScore++;
      } else if (winner === computer) {
        computerScore++;
      }
      document.getElementById("score").textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
  
      if (playerScore >= 5) {
        document.getElementById("result").textContent = "Player wins the game!";
      } else if (computerScore >= 5) {
        document.getElementById("result").textContent = "Computer wins the game!";
      }
    }
  
    document.getElementById("btn-rock").addEventListener("click", function() {
      updateScore(playRound("rock"));
    });
    document.getElementById("btn-paper").addEventListener("click", function() {
      updateScore(playRound("paper"));
    });
    document.getElementById("btn-scissors").addEventListener("click", function() {
      updateScore(playRound("scissors"));
    });
  });