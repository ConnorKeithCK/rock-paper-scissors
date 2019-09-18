"use strict";

const playButton = document.getElementById("playButton");
const gameScreen = document.getElementById("gameScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const submitButton = document.getElementById("submitButton");
const gameForm = document.getElementById("game");
const userMove = document.getElementById("userMove");
const gameLogFrame = document.getElementById("gameLog");

const ROCK_SELECTION = 1;
const PAPER_SELECTION = 2;
const SCISSORS_SELECTION = 3;

function gameOver(outcome) {
    alert(outcome);
    const logMessage = document.createElement("li");
    logMessage.appendChild(document.createTextNode(outcome));
    gameLogFrame.appendChild(logMessage)
    return;
}

class RockPaperScissors {
    constructor() {
        this.ComputerMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        var userValue = userMove.options[userMove.selectedIndex].value;

        if (this.ComputerMove == ROCK_SELECTION) {
            console.log(userValue);
            if (userValue == 1) {
                gameOver("Rock V.S. Rock - It's a tie!");
            }
            if (userValue == 2) {
                gameOver("Paper beats Rock, you win!");
            } else {
                gameOver("Rock beats Scissors, the computer wins!");
            }
        } 

        if (this.ComputerMove == PAPER_SELECTION) {
            console.log(userValue);
            if (userValue == 1) {
                gameOver("Paper beats Rock, the computer wins!");
            }
            if (userValue == 2) {
                gameOver("Paper V.S. Paper - It's a tie!");
            } else {
                gameOver("Scissors beats Paper, you win!");
            }
        }

        if (this.ComputerMove == SCISSORS_SELECTION) {
            console.log(userValue);
            if (userValue == 1) {
                gameOver("Rock beats Scissors, you win!");
            }
            if (userValue == 2) {
                gameOver("Scissors beats Paper, the computer wins!");
            } else {
                gameOver("Scissors V.S. Scissors - It's a tie!");
            }
        }
        
    }
    
}


playButton.addEventListener("click", function(clickEvent){

    clickEvent.preventDefault();
    welcomeScreen.className = "hidden";
    gameScreen.className = "";
    
})

gameForm.addEventListener("submit", function(submitEvent) {

    submitEvent.preventDefault();
    let game = new RockPaperScissors();
})


