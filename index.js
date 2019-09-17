const playButton = document.getElementById("playButton");
const gameScreen = document.getElementById("gameScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const submitButton = document.getElementById("submitButton");

const ROCK_SELECTION = 1;
const PAPER_SELECTION = 2;
const SCISSORS_SELECTION = 3;


playButton.addEventListener("click", function(){

    welcomeScreen.className = "hidden";
    gameScreen.className = "";
    
});

submitButton.addEventListener("submit", function() {

    class RockPaperScissors {
        constructor() {
            this.ComputerMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            
        }

    }

})

