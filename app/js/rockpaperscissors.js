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
var playerMove = ("rock" || "paper" || "sissors");
var computerMove = ("rock" || "paper" || "sissors");

var getPlayerMove = function (move) 
{
    move = getInput("rock", "paper", "sissors");
    return (move);
}	
//this prompts them to pick a move
    
    
var getComputerMove = function (move) 
{
 	move = randomPlay("rock", "paper", "sissors");
 	return (move);
}
//This should make the computer pick a random move.



function getWinner(playerMove,computerMove) 
{
    var winner;

    if (playerMove === computerMove) 
    {
    console.log; "We Have a Tie";
  	} 
        else if (playerMove === "rock" && computerMove === "sissors") 
        {
    console.log; "Rock Wins";
  		}
            else if (playerMove === "rock" && computerMove === "paper") 
            {
    console.log; "Paper Wins";
			}
                else if (playerMove === "paper" && computerMove === "rock") 
                {
    console.log; "Paper Wins";
				}
                    else if (playerMove === "paper" && computerMove === "sissors") 
                    {
    console.log; "Sissors Wins";
					}
                        else if (playerMove === "sissors" && computerMove === "rock") 
                        {
    console.log; "Rock Wins";
						}
                            else if (playerMove === "sissors" && computerMove === "paper") 
                            {
    console.log; "Sissors Wins";
                            }
                            	else {
                            		return "null";
                            		}
		
}    

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var result = 1;
        var counter = 0;
        while (counter <5) {
        	result = result +1;
        	counter = counter +1;
        }
        //This is my attempt to make the count move up to 5 to declare a winner.
        //It's not working
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            console.log("Player Wins" + "\n", "Player" + playerMove + " while Computer chose " + computerMove);
            playerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
            
        } else if (winner === "computer"); {
            console.log("Computer Wins" + "\n", "Player chose " + playerMove + " while Computer chose " + computerMove);
            computerWins += 1;
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        
    			 }
        return [playerWins, computerWins];
        
    }
}
playToFive();
