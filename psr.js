// Initialise array of valid options to use for validation and computerSelection function
const options = ["rock", "paper", "scissors"];
const player = "player"
const computer = "computer"

function computerSelection() {
    // Run random method to choose one of the items in the array above
    return options[Math.floor(Math.random() * options.length)]
}

function playerSelection() {
    // Initialise item to be returned later
    let playerItem;

    // Perform input validation
    while (true) {
        playerItem = prompt("Choose an option: rock, paper or scissors: ").toLowerCase().trim();
        if (options.includes(playerItem)) { break }
        else { console.log("Please provide a valid input") }
    }

    // Return once validated
    return playerItem
}

function showScore(playerScore, computerScore) {
    // Use this function to follow DRY when console logging scores
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)
}

function playRound() {
    // Declare variables specific to each round
    const playerItem = playerSelection();
    const computerItem = computerSelection().toLowerCase();

    // Check if game is a draw and log the draw with no further function calls
    if (playerItem === computerItem) {
        console.log("Draw!")
    }
    // Check all player win conditions, then display the win message and return the winner
    else if (
        (playerItem === "rock" && computerItem === "scissors") || 
        (playerItem === "scissors" && computerItem === "paper") || 
        (playerItem === "paper" && computerItem === "rock")
    ) {
        console.log(`Congrats! You win with ${playerItem} as the computer chose ${computerItem}!`)
        return player
    }
    else {
        console.log(`Congrats! You lose with ${playerItem} as the computer chose ${computerItem}!`)
        return computer
    }
}

function updateScore(winner, playerScore, computerScore) {
    // Find who the winner is and increment their score up and return it.
    if (winner === player) {
        playerScore = playerScore++
    }
    else if (winner === computer) {
        computerScore = computerScore++
    }
    else {
        console.log("Error with updateScore function, investigate")
    }
    return [playerScore, computerScore]
}

function game(){
    const winScore = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < winScore || computerScore < winScore) {
        let winner = playRound()
    }

    if (playerScore === winScore) {
        console.log(`Congratulations! You have won ${playerScore} to ${computerScore}!`)
    }
    else if (computerScore === winScore) {
        console.log(`Unlucky! You have lost ${playerScore} to ${computerScore}!`)
    }
}