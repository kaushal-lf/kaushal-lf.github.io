import {
  BROKEN,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  DOODLER_HEIGHT,
  DOODLER_VELOCITY_X,
  DOODLER_VELOCITY_Y,
  DOODLER_WIDTH,
  GREEN,
  PLATFORM_HEIGHT,
  PLATFORM_WIDTH,
} from './constants';
import { detectCollision, generateProbability } from './utils';
import Doodler from './Doodler';
import Platform from './Platform';
import doodlerRight from '../assets/sprites/lik-right@2x.png';
import tiles from '../assets/sprites/game-tiles@2x.png';
import './input';
import { keys } from './input';
import jumpS from '../assets/sounds/jump-arcade.mp3';
import startS from '../assets/sounds/start.wav';
import lomiseS from '../assets/sounds/lomise.mp3';
import padaS from '../assets/sounds/pada.mp3';

/**
 * index.js
 * Main entry file
 *
 */
class App {
  constructor() {
    // Initalize canvas
    this.setCanvas();
    this.writeText();
  }

  /**
   * write the initial text on the screen
   *
   */
  writeText = () => {
    // Write initial Texts
    this.ctx.font = '36px sans-serif';
    this.ctx.fillStyle = 'green';
    this.ctx.fillText(
      'DOODLE JUMP',
      CANVAS_WIDTH / 3.5,
      CANVAS_HEIGHT - 600
    );
    this.ctx.font = '28px sans-serif';
    this.ctx.fillText(
      'Crank ya` Sound',
      CANVAS_WIDTH / 3.5,
      CANVAS_HEIGHT - 500
    );
    this.ctx.fillText(
      'for best experience',
      CANVAS_WIDTH / 3.7,
      CANVAS_HEIGHT - 460
    );
    this.ctx.font = '21px sans-serif';
    this.ctx.fillText(
      'p - pause / resume game',
      CANVAS_WIDTH / 7,
      CANVAS_HEIGHT - 390
    );
    this.ctx.fillText(
      'a - move left',
      CANVAS_WIDTH / 7,
      CANVAS_HEIGHT - 350
    );
    this.ctx.fillText(
      'd - move right',
      CANVAS_WIDTH / 7,
      CANVAS_HEIGHT - 310
    );

    this.ctx.fillText(
      'Press space to start game',
      CANVAS_WIDTH / 3.5,
      CANVAS_HEIGHT - 190
    );
  };

  /**
   * initialize our game
   *
   */
  initializeGame = () => {
    // Game Variables
    this.scores = {
      current: 0,
      max: 0,
    };
    this.gameOver = false;
    this.paused = false;

    // Create and load sounds
    this.loadSounds();

    // create doodle
    this.createDoodle();
    // create platforms
    this.createPlatforms();

    this.startSound.play();

    // Start the game loop
    this.animate();
  };

  /**
   * set the canvas width and height
   *
   */
  setCanvas = () => {
    this.canvas = document.getElementById('canvas');
    if (CANVAS_WIDTH >= CANVAS_WIDTH) {
      this.canvas.width = CANVAS_WIDTH;
    } else {
      this.canvas.width = CANVAS_WIDTH;
    }
    this.canvas.height = CANVAS_HEIGHT;

    this.ctx = this.canvas.getContext('2d');
  };

  /**
   * control pause and resume game
   *
   */
  togglePause = () => {
    this.paused = !this.paused;
  };

  /**
   * Create the doodler character
   *
   */
  createDoodle = () => {
    const x = CANVAS_WIDTH / 2 - DOODLER_WIDTH; // span at center
    const y = (CANVAS_HEIGHT * 7) / 8 - DOODLER_HEIGHT; // span lil above bottom
    const dx = DOODLER_VELOCITY_X;
    const dy = DOODLER_VELOCITY_Y;

    this.doodler = new Doodler(
      x,
      y,
      dx,
      dy,
      DOODLER_WIDTH,
      DOODLER_HEIGHT,
      doodlerRight
    );
  };

  /**
   * Create platform such as tiles
   * and push it into the array
   *
   */
  createPlatforms = () => {
    this.platforms = [];

    const platformImg = new Image();
    platformImg.src = tiles;

    const x = CANVAS_WIDTH / 2 - DOODLER_WIDTH;
    // ensure there is always a platform below
    const y = (CANVAS_HEIGHT * 7) / 8 - DOODLER_HEIGHT;
    const width = PLATFORM_WIDTH;
    const height = PLATFORM_HEIGHT;

    const platform = new Platform(
      x,
      y,
      width,
      height,
      platformImg.src,
      GREEN
    );
    this.platforms.push(platform);

    for (let i = 0; i < 8; i++) {
      const x = Math.floor(Math.random() * ((CANVAS_WIDTH * 3) / 4));
      const y = CANVAS_HEIGHT - 75 * i - 300;
      const width = PLATFORM_WIDTH;
      const height = PLATFORM_HEIGHT;

      // create platform from the given values and push it into the array
      this.createPlat(x, y, width, height, platformImg.src, GREEN);
    }
  };

  /**
   * create the sounds
   */
  loadSounds = () => {
    this.jumpSound = new Audio(jumpS);
    this.startSound = new Audio(startS);
    this.gameOverSound = new Audio(padaS);
    this.crackSound = new Audio(lomiseS);
    this.gameOverPlayed = false;
  };

  /**
   * start the game when space is pressed
   * then remove the event listener
   * @param {KeyboardEvent} event keyboard event
   */
  startGame = (event) => {
    if (event.code === 'Space' && !this.gameOver) {
      // Remove the space bar event listener
      document.removeEventListener('keydown', this.startGame);

      // Initialize the game
      this.initializeGame();
    }
  };

  /**
   * create platform from the given values and push it into the array
   *
   * @param {number} x - x position of the tile
   * @param {number} y - y position of the tile
   * @param {number} width - width of the tile
   * @param {number} height - height of the tile
   * @param {number} image - image src
   * @param {string} type - type of tile
   */
  createPlat = (x, y, width, height, image, type) => {
    const platform = new Platform(x, y, width, height, image, type);
    this.platforms.push(platform);
  };

  /**
   * generate new platforms
   * as we go up
   *
   * The probability of generating
   * a broken tile is 10 in 100
   *
   */
  newPlatform = () => {
    const x = Math.floor((Math.random() * CANVAS_WIDTH * 3) / 4); //(0-1) * boardWidth*3/4
    const y = this.platforms[this.platforms.length - 1].y - 70;
    const width = PLATFORM_WIDTH;
    const height = PLATFORM_HEIGHT;
    const image = new Image();
    image.src = tiles;

    // The type of tile is green by default
    let typeTile = GREEN;

    // generate the probability for broken tile as 10 in 100
    const brokenTile = generateProbability(0.1);

    if (brokenTile) {
      typeTile = BROKEN;
    }

    // create the platform
    this.createPlat(x, y, width, height, image.src, typeTile);
  };

  handleInput = () => {
    if (keys.P) {
      this.togglePause();
    }
  };

  /**
   * draw
   *
   */
  draw = () => {};

  /**
   * update our elements on the canvas
   *
   */
  update = () => {
    this.draw();

    this.platforms.forEach((platform) => platform.draw(this.ctx));

    this.platforms.forEach((platform) => {
      // Clear platforms and add new platform
      while (
        this.platforms.length > 0 &&
        this.platforms[0].y >= CANVAS_HEIGHT
      ) {
        this.platforms.shift(); // remove the first platform
      }
      if (this.platforms[this.platforms.length - 1].y >= 0) {
        this.newPlatform();
      }

      this.checkCollision();
    });

    // Move platform down
    if (this.doodler.dy < 0 && this.doodler.y < CANVAS_HEIGHT / 2) {
      this.doodler.y = CANVAS_HEIGHT / 2;
      this.platforms.forEach((platform) => {
        platform.y -= this.doodler.dy; //slide platform down
      });
    }

    // Draw the score text outside the platform loop
    this.updateScore();
    this.ctx.fillStyle = 'black';
    this.ctx.font = '16px sans-serif';
    this.ctx.fillText(this.scores.current, 5, 24);

    this.checkGameOver();

    // Draw the doodler after drawing the platforms
    this.doodler.update(this.ctx, this.platforms);

    // Call handleInput to check for user input
    this.handleInput();
  };

  /**
   * update the total score when user is going up
   *
   */
  updateScore = () => {
    const points = 50 * Math.floor(Math.random() * 2);

    if (this.doodler.dy < 0) {
      this.scores.max += points;
      if (this.scores.current < this.scores.max) {
        this.scores.current = this.scores.max; // Fix the typo here
      }
    } else if (this.doodler.dy >= 0) {
      this.scores.max -= points;
    }
  };

  /**
   * Check for collision with platforms and stop vertical movement if collision occurs
   *
   */
  checkCollision = () => {
    this.platforms.forEach((platform) => {
      if (
        detectCollision(this.doodler, platform) &&
        this.doodler.dy >= 0 &&
        platform.type === BROKEN
      ) {
        // Doodler stepped on the broken tile

        //1. Play the crack sound
        if (platform.active) this.crackSound.play();

        // 2. Change the tile type to deactive
        platform.active = false;

        // 2. do nothing - doodler should fall
        return;
      }
      if (
        detectCollision(this.doodler, platform) &&
        this.doodler.dy >= 0
      ) {
        this.jumpSound.play();
        // Collision detected, stop vertical movement
        this.doodler.dy = this.doodler.initialVelocity;

        // Adjust the y position to be just above the platform
        this.doodler.y = platform.y - this.doodler.height;
      }
    });
  };

  /**
   * check if the game is over
   * and write text
   *
   */
  checkGameOver = () => {
    if (!this.paused && this.doodler.y > CANVAS_HEIGHT) {
      this.gameOver = true;

      if (!this.gameOverPlayed) {
        this.gameOverSound.play();
        this.gameOverPlayed = true;
      }

      this.ctx.font = '21px sans-serif';
      this.ctx.fillStyle = 'green';
      this.ctx.fillText(
        "Game Over: Press 'Space' to Restart",
        CANVAS_WIDTH / 4,
        (CANVAS_HEIGHT * 7) / 8
      );
      if (keys.Space) {
        // Restart the game
        this.resetGame();
      }
    }
  };

  /**
   * restart the game
   */
  resetGame = () => {
    // Reset Game Variables
    this.scores = {
      current: 0,
      max: 0,
    };
    this.gameOver = false;
    this.gameOverPlayed = false;
    this.startSound.play();
    // create doodle
    this.createDoodle();
    // create platforms
    this.createPlatforms();
  };

  /**
   * run animation in loop
   * to keep updating the game
   *
   */
  animate = () => {
    requestAnimationFrame(this.animate);
    this.checkGameOver();
    if (!keys.P || !this.paused) {
      this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      this.update();
    }
  };
}

const app = new App();
// app.animate();
document.addEventListener('keydown', app.startGame);
