// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var userGuesses = [];
var guessesLeft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("guessesSoFarText");
var lossesText = document.getElementById("guessesLeftText");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    var userGuess = event.key;
    guessesLeft--;
    document.getElementById("guessesLeftText").innerHTML = "Guesses left: " + guessesLeft;
    userGuesses.push(userGuess);
    document.getElementById("guessesSoFarText").innerHTML = "Guesses so far: " + userGuesses;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ( userGuess == computerGuess) {
      wins++;
      document.getElementById("winsText").innerHTML = "Wins: " + wins;
    }

    if (guessesLeft == "0") {
      losses++;
      document.getElementById("lossesText").innerHTML = "Losses: " + losses;
      userGuesses = [];
      guessesLeft = 9;
    }

  }; 
  
