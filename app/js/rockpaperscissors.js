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
    return /* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}


/* YOUR CODE HERE */

function getPlayerMove(move) {
var move =x;
if (move! ==null) {
    getInput();
}
}

function getComputerMove(move) {
var move
if (move! ==null) {
    getrandomPlay ();
}
}



function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}


/* YOUR CODE HERE */

function getwinner(playerMove,computerMove) {
    Var winner;

if (playerMove ===‘rock’ && computerMove ===‘rock’){
        return ‘tie’;
}
else if (playerMove ===‘rock’ && computerMove ===’scissors’) {
        return ‘player’;
}
else if (playerMove ===‘rock’ && computerMove ===‘paper’) {
        return ‘computer’;
}else if (playerMove ===‘paper’ && computerMove ===‘paper’) {
        return ‘tie’;
}else if (playerMove ===‘paper’ && computerMove ===‘scissors’) {
        return ‘computer’;
}else if (playerMove ===‘paper’ && computerMove ===‘rock’) {
        return ‘player’;
}else if (playerMove ===‘scissors’ && computerMove ===‘scissors’) {
        return ‘tie’;
}else if (playerMove ===‘scissors’ && computerMove ===‘paper’) {
        return ‘player’;
}else if (playerMove ===‘scissors’ && computerMove ===‘computer’) {
        return ‘computer’;
}else {
        return winner;
}
}

Qn 5 Go back to RockPaperScissors.js, and scroll down to the following code:
var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  return [playerWins, computerWins];
}



function playToFive() {
console.log (“Let’s play Rock, Paper, Scissors”);
var playerWins =0;
var computerWins =0;
while ((playerWins < 5) &&(computerWins <5)) {
    getwinner();
if (playerWins) {
    playerWins+ =1
}
else {
    computerWins+ =1
}
}
console.log(“player chose” +playerMove+”while computer chose” +computer Chose”)
console.log(“The score is currently+playerWins+ “to” +computerWins”\n”)
return [playerWins,ComputerWins];
}
console.log(playToFive());
