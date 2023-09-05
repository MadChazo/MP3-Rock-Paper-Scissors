var playBtn = document.querySelector("#play");
var wins = 0;
var losses = 0;
var ties = 0;

var botChoices = ["R", "P", "S"];
var userHand;
var botHand;

playRPS = function () {
  do {
    userHand = prompt("Enter R for rock, P for paper, or S for scissors.", "");
    userHand = userHand.toUpperCase();
  } while (userHand != "R" && userHand != "P" && userHand != "S");

  botHand = botChoices[Math.floor(Math.random() * 3)];

  if (
    (botHand == "R" && userHand == "P") ||
    (botHand == "P" && userHand == "S") ||
    (botHand == "S" && userHand == "R")
  ) {
    wins++;
    alert("You won!\nWins: " + wins + " Losses: " + losses + " Ties: " + ties);
  } else if (
    (botHand == "R" && userHand == "S") ||
    (botHand == "P" && userHand == "R") ||
    (botHand == "S" && userHand == "R")
  ) {
    losses++;
    alert("You lost!\nWins: " + wins + " Losses: " + losses + " Ties: " + ties);
  } else if (
    (botHand == "R" && userHand == "R") ||
    (botHand == "P" && userHand == "P") ||
    (botHand == "S" && userHand == "S")
  ) {
    ties++;
    alert(
      "It's a tie!\nWins: " + wins + " Losses: " + losses + " Ties: " + ties
    );
  } else {
    alert("ERROR");
  }
  if (confirm("Play again?")) {
    playRPS();
  }
};

playBtn.addEventListener("click", playRPS);
