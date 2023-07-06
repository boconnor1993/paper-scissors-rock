const options = ["rock", "paper", "scissors"]

let computerItem

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}


function playerSelection() {
    let playerItem;
    while (true) {
        playerItem = prompt("Choose an option: rock, paper or scissors: ").toLowerCase().trim();
        if (options.includes(playerItem)) { break }
        else { console.log("Please provide a valid input") }
    }
    return playerItem
}

function computerSelection() {

}

function playRound(playerSelection, computerSelection) {

}

function game(){

}