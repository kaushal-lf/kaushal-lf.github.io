import Game from './Game';

// Load DOM
const menuScreen = document.querySelector('#menu');
const gameOverScreen = document.querySelector('#over');
const canvasScreen = document.querySelector('canvas');
const playBtn = document.querySelector('#play-btn');

// Hide elements
canvasScreen.style.display = 'none';
gameOverScreen.style.display = 'none';

/**
 * handle game over
 *
 */
function handleGameOver() {
  // Display the game over screen
  menuScreen.style.display = 'none';
  canvasScreen.style.display = 'none';
  gameOverScreen.style.display = 'flex';
}

/**
 * handle play
 */
function play() {
  menuScreen.style.display = 'none';
  gameOverScreen.style.display = 'none';
  canvasScreen.style.display = 'block';
  const game = new Game();
  game.animate(0, handleGameOver);
}

/**
 * add play event listeners
 */
addEventListener('keydown', ({ code }) => {
  if (code === 'Space') {
    play();
  }
});

playBtn.addEventListener('click', play);
