// Iteration 8: Making scoreboard functional
// Parse the URL parameters to get the score
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("score");

// Display the score on the score board
const scoreBoard = document.getElementById("score-board");
scoreBoard.innerHTML = score;

// Add click event listener to the play again button
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener("click", () => {
  // Redirect to the game.html page
  location.href = "./game.html";
});

