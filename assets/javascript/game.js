// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("guessesSoFar");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");





// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Only run the following code block if the user presses "r" or "p" or "s".
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {


      if ((userGuess === "r" && computerGuess === "s") || (userGuess === "s" && computerGuess === "p")|| (userGuess === "p" && computerGuess === "r")) {
        wins++;
      } else if (userGuess === computerGuess) {
        ties++;
      } else {
        losses++;
      }

      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      tiesText.textContent = "ties: " + ties;
    }
  };