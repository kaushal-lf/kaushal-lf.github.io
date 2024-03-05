import {
  createImage,
  getRandomNumber,
  isElementVisible,
} from '../utils';
import angler1 from '../../assets/angler1.png';
import Bullet from './Bullet';
import { CANVAS_HEIGHT, GRAVITY } from '../constants.js';
import { troopStates } from '../sprites/spriteStates.js';

import idleZombie1 from '../../assets/zombie/Idle (1).png';

import idleTower from '../../assets/tower/idle.png';

import idleTroop from '../../assets/troop/idle1.png';
import Audio from '../Audio.js';

class Enemy {
  /**
   * base class for our enemy
   *
   * @param {number} x position
   * @param {number} y position
   */
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.active = true;
    this.direction = -1;
    // audio for the enemy
    this.audio = new Audio();
  }
  /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @returns undefined
   */
  draw(c) {
    if (!c) return;
  }
}

export class Angler1 extends Enemy {
  /**
   * Angler 1 enemy
   * This enemy can fly and arrives at
   * random intervals. Probably one of the strongest enemy
   * in our game
   *
   * @param {number} x position
   * @param {number} y position
   */
  constructor({ x, y }) {
    super({ x, y });
    this.health = 100;
    this.speedX = Math.random() * -4.5 - 1.5;
    this.speed = 10;
    // initialize frame
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;
    // create image for our angler1
    this.image = createImage(angler1);
    this.frame = getRandomNumber(0, 2);

    this.width = 228;
    this.height = 169;
    this.score = 15;
  }

  /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */
  draw(c) {
    super.draw(c);

    c.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  /**
   * update our angler1 overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */
  update(c) {
    this.draw(c);
    this.position.x += this.speedX;

    if (this.position.x + this.width < 0) {
      this.active = false;
    }

    // Sprite animation
    if (this.frameX < this.maxFrame) this.frameX++;
    else this.frameX = 0;
  }
}

export class Troop extends Enemy {
  /**
   * troop enemy
   *
   * @param {number} x position
   * @param {number} y position
   */
  constructor({ x, y }) {
    super({ x, y });
    // width and height of our troop
    this.width = 240;
    this.height = 160;
    this.active = true;
    this.speed = 10;
    this.bullets = [];
    this.cooldown = 2000; // Set the initial cooldown time (in milliseconds)
    this.lastShotTime = 0; // Record the time of the last shot
    this.health = 100;
    this.score = 5;
  }

  /**
   * draw enemy on the canvas
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */
  draw(c) {
    c.drawImage(
      createImage(idleTroop),
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   * @param {number} currentTime current time
   */
  update(c, currentTime) {
    this.draw(c);
    this.handleShooting(currentTime);

    // Handle bullet updates
    this.bullets.forEach((bullet) => bullet.update(c));
    this.bullets = this.bullets.filter((bullet) => bullet.active);
  }

  /**
   * handle the shooting logic of our enemy
   *
   * @param {number} currentTime current time
   */
  handleShooting(currentTime) {
    // Check if enough time has passed since the last shot
    if (
      currentTime - this.lastShotTime > this.cooldown &&
      isElementVisible(this)
    ) {
      this.state = troopStates.attack; // Update the state to "attack"
      this.shoot();
      this.audio.playShootSound();
      this.lastShotTime = currentTime; // Update the last shot time
    } else {
      this.state = troopStates.idle; // Set the state to "idle" when not shooting
    }
  }

  /**
   * shoot mechanism for our enemy
   *
   */
  shoot() {
    this.bullets.push(
      new Bullet({
        x: this.position.x,
        y: this.position.y + this.height / 2,
        direction: this.direction,
        damage: 5,
        color: 'red',
      })
    );
  }
}

export class Zombie extends Enemy {
  /**
   * zombie enemy
   *
   * @param {number} x position
   * @param {number} y position
   */
  constructor({ x, y }) {
    super({ x, y });
    this.width = 140;
    this.height = 140;
    this.active = true;
    this.speed = 10;

    this.health = 100;
    this.score = 5;
  }

  /**
   * draw enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */
  draw(c) {
    c.drawImage(
      createImage(idleZombie1),
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   */
  update(c) {
    this.draw(c);
    if (this.position.y + this.height < CANVAS_HEIGHT) {
      this.position.y += GRAVITY + 2;
    }
  }
}

export class Tower extends Enemy {
  /**
   * Tower enemy
   *
   * @param {number} x position
   * @param {number} y position
   */
  constructor({ x, y }) {
    super({ x, y });
    this.width = 100;
    this.height = 140;
    this.active = true;
    this.speed = 10;
    this.bullets = [];
    this.cooldown = 2000; // Set the initial cooldown time (in milliseconds)
    this.lastShotTime = 0; // Record the time of the last shot
    this.health = 120;
    this.score = 10;
  }

  /**
   * draw our enemy on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */
  draw(c) {
    c.drawImage(
      createImage(idleTower),
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  /**
   * update enemy overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of the canvas
   * @param {number} currentTime current time
   */
  update(c, currentTime) {
    this.draw(c);
    this.handleShooting(currentTime);

    // Handle bullet updates
    this.bullets.forEach((bullet) => bullet.update(c));
    this.bullets = this.bullets.filter((bullet) => bullet.active);
  }

  /**
   * handle the shooting logic of our enemy
   *
   * @param {number} currentTime current time
   */
  handleShooting(currentTime) {
    // Check if enough time has passed since the last shot
    if (
      currentTime - this.lastShotTime > this.cooldown &&
      isElementVisible(this)
    ) {
      this.audio.playShootSound();
      this.shoot();

      this.lastShotTime = currentTime; // Update the last shot time
    }
  }

  /**
   * shoot mechanism for our troop
   */
  shoot() {
    this.bullets.push(
      new Bullet({
        x: this.position.x + this.width,
        y: this.position.y + this.height / 2,
        direction: this.direction,
        damage: 5,
        color: 'red',
      })
    );
  }
}
