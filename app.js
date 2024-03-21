// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
  window.location.href = 'game.html';
});
