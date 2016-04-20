////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log; ("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove (move) {
    return move || getInput();
}

function getComputerMove (move){
	return move || randomPlay();
}
//Above is the  code to get the player and computer to pick moves.


function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
       winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
       winner = "player";
    } else if (playerMove == "rock" && computerMove == "paper") {
       winner = "computer";
    } else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    } else if (computerMove == "rock" && playerMove == "scissors") {
        winner = "computer";
    } else if (computerMove == "rock" && playerMove == "paper") {
        winner = "player";
    } else if (computerMove == "paper" && playerMove == "rock") {
        winner = "computer";
    } else if (computerMove == "paper" && playerMove == "scissors") {
        winner = "player";
    } else if (computerMove == "scissors" && playerMove == "paper") {
        winner = "computer";
    }
    return winner;
}
    /*Above is setting the rules of who wins. I'm not sure why it was important 
    to list both playerMove and computerMove vs just listing every senerio starting with playerMove. 
    When I didn't it wouldn't post anything or it would run in an endless loop.
    */
function playToFive() {
    console.log("Let's play rock, paper, scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner == "computer") {
            console.log("Player choose:" + playerMove);
            console.log("Computer choose: " + computerMove);
            console.log("Compter wins this rounds.");
            computerWins++;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else if (winner == "player") {
            console.log("Player choose:" + playerMove);
            console.log("Computer choose: " + computerMove);
            console.log("Player wins this rounds.");
            playerWins++;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else if (winner== "tie") {
            console.log("Player choose:" + playerMove);
            console.log("Computer choose: " + computerMove);
            console.log("This round is a tie.");
        }
    }
    if (playerWins == 5) {
        return "Player score: " + playerWins + ". Computer score: " + computerWins + ". Player win the game.";
    } else if (computerWins == 5) {
        return "Player score: " + playerWins + ". Computer score: " + computerWins + ". Computer win the game.";
    }    
}
playToFive();
