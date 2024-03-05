import platform from '../assets/platform.png';

import Player from './entities/Player';
import {
  checkCollision,
  createImage,
  formatTime,
  platformPositions,
  towerEnemies,
  troopEnemies,
} from './utils';
import Platform from './entities/Platform';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { Angler1, Tower, Troop, Zombie } from './entities/Enemy';
import { FireExplosion, SmokeExplosion } from './entities/Explosion';
import { playerStates } from './sprites/spriteStates';
import Audio from './Audio';

// Get canvas and canvas object
const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// track key strokes
let keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let lastTime = 0;

class Game {
  /**
   * Initialize our game by
   * generating platforms, enemies,
   * setting up event listeners, and tracking states
   * in our game
   *
   */
  constructor() {
    this.player = new Player();
    this.platforms = [];
    this.enemies = [];

    // generate entities
    this.generatePlatforms();
    this.generateTroops();
    this.generateTowers();

    // setup listener
    this.setupEventListener();

    // Game variables
    this.scrollOffset = 0;
    this.enemyInterval = 1000;
    this.gameOver = false;
    this.score = 0;
    this.maxMoved = 0;
    this.gameTime = 0;
    this.lives = 3;
    this.explosions = [];
    this.enemySpawnIntervalId = null;

    this.texts = {
      waveIncomingText: false,
      startText: true,
    };

    setTimeout(() => {
      this.texts.startText = false;
    }, 2000);

    this.audio = new Audio();
    this.audio.playBackgroundMusic();

    this.isPaused = false;
  }

  /**
   * Toggle game pause
   *
   */
  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.pauseGame();
    } else {
      this.resumeGame();
    }
  }

  /**
   * pause the game
   */
  pauseGame() {
    clearInterval(this.enemySpawnIntervalId);
    this.audio.stopBackgroundMusic();
  }

  /**
   * resume the game by resetting the enemy varaible
   *
   */
  resumeGame() {
    this.enemySpawnIntervalId = setInterval(() => {
      const chance = Math.random() < 0.4;
      for (let i = 0; i < 10; i++) {
        if (chance) this.addZombie(i);
        else this.addAngler1();
      }
    }, 1000 * (this.scrollOffset > 18500 ? 5 : 10));

    this.audio.playBackgroundMusic();
  }

  /**
   * generate platforms in our game
   *
   */
  generatePlatforms = () => {
    platformPositions.forEach((position) => {
      this.platforms.push(
        new Platform({
          x: position.x,
          y: position.y,
          image: createImage(platform),
        })
      );
    });
  };

  /**
   * generate troops in our game
   *
   */
  generateTroops = () => {
    troopEnemies.forEach((enemy) => {
      this.enemies.push(
        new Troop({
          x: enemy.x,
          y: enemy.y,
        })
      );
    });
  };

  /**
   * add zombies into the game
   * @param {number} i index of the zombie
   */
  addZombie = (i) => {
    let x, y;
    if (this.scrollOffset > 19000) {
      x = this.player.position.x + i * 40;
      y = this.player.position.y + 40;
    } else {
      x = this.player.position.x + i * 100;
      y = this.player.position.y + i * 100;
    }
    this.audio.playZombieSound();
    this.enemies.push(
      new Zombie({
        x,
        y,
      })
    );
  };

  /**
   * Generate enemy towers
   *
   */
  generateTowers = () => {
    towerEnemies.forEach((enemy) => {
      this.enemies.push(
        new Tower({
          x: enemy.x,
          y: enemy.y,
        })
      );
    });
  };

  /**
   * move the platform as player moves through
   * the platform
   *
   * @returns undefined
   */
  handlePlatformMovement = () => {
    if (keys.right.pressed && this.scrollOffset >= 19500) {
      return;
    }

    if (keys.right.pressed && this.player.position.x < 400) {
      this.player.velocity.x = this.player.speed;
    } else if (
      (keys.left.pressed && this.player.position.x > 100) ||
      (keys.left.pressed &&
        this.scrollOffset === 0 &&
        this.player.position.x > 0)
    ) {
      this.player.velocity.x = -this.player.speed;
    } else {
      this.player.velocity.x = 0;

      if (keys.right.pressed) {
        this.scrollOffset += this.player.speed;
        if (this.scrollOffset > this.maxMoved)
          this.maxMoved = this.scrollOffset;

        if (this.maxMoved >= 18500)
          this.texts.waveIncomingText = true;

        this.platforms.forEach(
          (platform) => (platform.position.x -= this.player.speed)
        );
        this.enemies.forEach(
          (enemy) => (enemy.position.x -= this.player.speed)
        );
      } else if (keys.left.pressed && this.scrollOffset > 0) {
        this.scrollOffset -= this.player.speed;
        this.platforms.forEach(
          (platform) =>
            (platform.position.x += this.player.speed * 0.66)
        );
        this.enemies.forEach(
          (enemy) => (enemy.position.x += this.player.speed * 0.66)
        );
      }
    }
  };

  /**
   * draw our game canvas
   */
  draw = () => {
    // draw platforms
    this.platforms.forEach((platform) => {
      platform.draw(c);
    });

    // show the statistics in oru game
    this.showGameStats();

    // Show enemy wave text
    c.save();
    if (this.texts.waveIncomingText) {
      this.displayMessage(
        'Huge Wave Incoming!',
        CANVAS_WIDTH / 3.5,
        CANVAS_HEIGHT / 2,
        5000
      );
    }

    if (this.texts.startText) {
      this.displayMessage(
        'Go Player Go!',
        CANVAS_WIDTH / 3,
        CANVAS_HEIGHT / 2,
        5000
      );
    }
    c.restore();
  };

  /**
   * Show the game score and other metrics
   *
   */
  showGameStats = () => {
    c.save();

    // Score
    c.font = '64px Metal Mania';
    c.fillStyle = 'white';
    c.shadowOffsetX = 4;
    c.shadowOffsetY = 4;
    c.shadowColor = 'black';

    c.fillText(
      this.score.toString().padStart(4, '0'),
      CANVAS_WIDTH - 140,
      70
    );
    c.fillText(`Health: ${this.player.health}`, 20, 70);
    c.fillText(`Lives: ${this.lives}`, 20, 140);

    // Game Time
    c.font = '72px Metal Mania';
    c.fillText(
      formatTime(this.gameTime).padStart(3, '0'),
      CANVAS_WIDTH / 2 - 36,
      80
    );

    c.restore();
  };

  /**
   * display the given message into our canvas
   *
   * @param {string} text message text
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} time timeout time
   */
  displayMessage = (text, x, y, time) => {
    c.font = '100px Metal Mania';
    c.fillStyle = 'white';
    c.shadowOffsetX = 4;
    c.shadowOffsetY = 4;
    c.shadowColor = 'black';
    c.fillText(text, x, y);
    c.restore();

    setTimeout(() => {
      this.clearMessage();
      this.texts.waveIncomingText = false;
    }, time);
  };

  /**
   * clear the message from canvas
   *
   */
  clearMessage = () => {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.draw();
  };

  /**
   * update our canvas over time
   *
   * @param {number} deltatime delta time
   */
  update = (deltatime) => {
    if (!this.gameOver) this.gameTime += deltatime;

    this.draw();

    // update the player
    this.player.update(c, Date.now());

    // update the explosions
    this.explosions.forEach((explosion) =>
      explosion.update(c, deltatime)
    );
    this.explosions = this.explosions.filter(
      (explosion) => explosion.active
    );

    // update enemy and bullets
    this.enemies.forEach((enemy) => {
      const currentTime = Date.now();
      enemy.update(c, currentTime);
      if (checkCollision(this.player, enemy)) {
        this.player.health -= 5;
      }

      enemy?.bullets?.forEach((bullet) => {
        if (checkCollision(bullet, this.player)) {
          this.player.health -= bullet.damage;
          bullet.active = false;
        }
      });

      // update player bullets
      this.player.bullets.forEach((bullet) => {
        if (checkCollision(bullet, enemy)) {
          enemy.health -= bullet.damage;
          bullet.active = false;

          if (enemy.health <= 0) {
            enemy.active = false;
            this.addExplosion(enemy);
            if (!this.gameOver) this.score += enemy.score;
          }
        }
      });
    });

    // filter dead enemies
    this.enemies = this.enemies.filter((enemy) => enemy.active);

    if (!this.gameOver) {
      // Call addAngler1 every 5 seconds
      if (!this.enemySpawnIntervalId) {
        this.enemySpawnIntervalId = setInterval(() => {
          const chance = Math.random() < 0.4;
          for (let i = 0; i < 10; i++) {
            if (chance) this.addZombie(i);
            else this.addAngler1();
          }
        }, 1000 * (this.scrollOffset > 18500 ? 5 : 10));
      }
    }

    this.platformCollisionDetection();
  };

  /**
   * listen to the keystrokes in our game
   *
   */
  setupEventListener = () => {
    let keysPressed = {};

    // Handle keydown event
    addEventListener('keydown', ({ code }) => {
      keysPressed[code] = true;
      switch (code) {
        case 'ArrowLeft':
          keys.left.pressed = true;
          this.player.state = playerStates.run;
          this.player.direction = -1;
          break;

        case 'ArrowRight':
          keys.right.pressed = true;
          this.player.state = playerStates.run;
          this.player.direction = 1;

          break;

        case 'KeyZ':
          break;

        case 'KeyX':
          if (!this.player.isJumping) {
            this.player.velocity.y -= 30;
            this.player.isJumping = true;
          }
          break;

        case 'KeyP':
          this.togglePause();
          break;
      }
    });

    // Handle Keyup event
    addEventListener('keyup', ({ code }) => {
      keysPressed[code] = false;

      switch (code) {
        case 'ArrowLeft':
          keys.left.pressed = false;
          this.player.state = playerStates.idle;
          break;

        case 'ArrowRight':
          keys.right.pressed = false;
          this.player.state = playerStates.idle;
          break;

        case 'KeyX':
          if (!this.player.isJumping) {
            this.player.velocity.y -= 30;
            this.player.isJumping = true;
          }
          // this.player.velocity.y = 0;
          break;

        case 'KeyZ':
          this.audio.playShootSound();
          if (keysPressed['ArrowUp']) {
            this.player.verticalDirection = true;
          } else {
            this.player.verticalDirection = false;
          }
          this.player.shootTop(Date.now()); // Pass the current time
          break;
      }
    });
  };

  /**
   * detect collision between platform and player and
   * the enemy
   *
   */
  platformCollisionDetection = () => {
    this.platforms.forEach((platform) => {
      // Vertical Collision
      if (
        this.player.position.y + this.player.height <=
          platform.position.y &&
        this.player.position.y +
          this.player.height +
          this.player.velocity.y >=
          platform.position.y &&
        this.player.position.x + this.player.width >=
          platform.position.x &&
        this.player.position.x <= platform.position.x + platform.width
      ) {
        this.player.velocity.y = 0;
        this.player.isJumping = false;
      }

      // Horizontal Collision on the left side of the platform
      if (
        this.player.position.y + this.player.height >
          platform.position.y &&
        this.player.position.y <
          platform.position.y + platform.height &&
        this.player.position.x <
          platform.position.x + platform.width &&
        this.player.position.x + this.player.width >
          platform.position.x
      ) {
        this.player.velocity.x = 0;
        this.player.position.x =
          platform.position.x - this.player.width;
      }

      // Horizontal Collision on the right side of the platform
      if (
        this.player.position.y + this.player.height >
          platform.position.y &&
        this.player.position.y <
          platform.position.y + platform.height &&
        this.player.position.x <
          platform.position.x + platform.width &&
        this.player.position.x + this.player.width >
          platform.position.x
      ) {
        this.player.velocity.x = 0;
        this.player.position.x = platform.position.x + platform.width;
      }

      this.enemies.forEach((enemy) => {
        if (checkCollision(enemy, platform)) {
          if (enemy instanceof Zombie)
            enemy.position.y = platform.position.y - enemy.height;
        }
      });
    });
  };

  /**
   * handle win scenario
   *
   */
  handleWin = () => {
    if (this.player.score >= 5000) {
      this.onGameOver();
    }
  };

  /**
   * reset our players life
   *
   */
  resetLife = () => {
    this.lives--;
    this.player.health = 400;
    this.player.position.x = 100;
    this.player.position.y = 100;
  };

  /**
   * handle lose scenario
   *
   */
  handleLose = () => {
    if (this.lives <= 0) {
      this.gameOver = true;
      clearInterval(this.enemySpawnIntervalId);

      this.onGameOver();
    }

    // Player falls into the death pit
    if (
      this.player.position.y > CANVAS_HEIGHT ||
      this.player.health <= 0
    ) {
      this.resetLife();
    }
  };

  /**
   *
   * @param {number} timestamp
   * @param {function} onGameOver handler when game is over
   * @returns
   */
  animate = (timestamp, onGameOver) => {
    if (onGameOver) {
      this.onGameOver = onGameOver;
    }

    if (this.isPaused) {
      // If the game is paused, don't proceed with the animation
      requestAnimationFrame(this.animate);
      return;
    }
    const deltatime = timestamp - lastTime;
    lastTime = timestamp;
    requestAnimationFrame(this.animate);
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    this.update(deltatime);

    // Draw enemy
    this.enemies.forEach((enemy) => enemy.update(c));

    this.enemies = this.enemies.filter((enemy) => enemy.active);

    this.handlePlatformMovement();

    this.handleWin();

    // Handle player loses
    this.handleLose();

    this.enemies.forEach((enemy) => {
      if (enemy.position.y + enemy.height > CANVAS_HEIGHT) {
        enemy.active = false;
      }
    });
  };

  /**
   * Add angler enemy in our game
   *
   */
  addAngler1 = () => {
    this.audio.playHeliSound();
    this.enemies.push(
      new Angler1({
        x: CANVAS_WIDTH,
        y: this.player.position.y,
      })
    );
  };

  /**
   * add the explosion effect
   *
   * @param {object} enemy our enemy object
   */
  addExplosion = (enemy) => {
    if (Math.random() < 0.6) {
      // Smoke explosion
      this.explosions.push(
        new SmokeExplosion({
          x: enemy.position.x,
          y: enemy.position.y - enemy.height / 2,
        })
      );
    } else {
      // Fire explosion
      this.explosions.push(
        new FireExplosion({
          x: enemy.position.x,
          y: enemy.position.y - enemy.height / 2,
        })
      );
    }
  };
}

export default Game;
