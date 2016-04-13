////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
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

function getPlayerMove(move) {
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return 
    var move = "Rock" || "Paper" || "Sissors"; 
    }
        //this is what they can pick on a move.
    
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return 
    var move = "Rock" || "Paper" || "Sissors";
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  //for initialization, condition, final expression, 
    if (playerMove) "rock" || "paper" || "sissors" && (computerMove) === playerMove {
    alert "tie";
  } 
        else if (playerMove) === "rock" && (computerMove) === "sissors" {
    alert "playerWins";
  }
            else if (playerMove) === "rock" && (computerMove) === "paper" {
    alert "computerWins";
}
                else if (playerMove) === "paper" && (computerMove) === "rock" {
    alert "playerWins";
}
                    else if (playerMove) === "paper" && (computerMove) === "sissors" {
    alert "computerWins";
}
                        else if (playerMove) === "sissors" && (computerMove) === "rock" {
    alert "computerWins";
}
                            else (playerMove) === "sissors" && (computerMove) === "paper" {
    alert "plyaerWins";
}
//This is my attempt at the core of the game. 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  for (var winner = 1; winner <= max 5; winner +=1)
  //I think this will work for a for statement to get to a win at 5.
    return [playerWins, computerWins];
}

