// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
// Function to handle the "Play" button click
function handlePlayButtonClick() {
  window.location.href = 'game.html';
}

// Attach the event listener to the "Play" button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', handlePlayButtonClick);
