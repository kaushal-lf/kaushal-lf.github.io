import { CANVAS_HEIGHT, GRAVITY } from '../constants';

import SpriteAnimation from '../sprites/SpriteAnimation';
import Bullet from './Bullet';

// Load Sprite Images
import idle1 from '../../assets/hero/idle_1.png';
import idle2 from '../../assets/hero/idle_2.png';
import idle3 from '../../assets/hero/idle_3.png';
import idle4 from '../../assets/hero/idle_3.png';

import run1 from '../../assets/hero/run_1.png';
import run2 from '../../assets/hero/run_2.png';
import run3 from '../../assets/hero/run_3.png';
import run4 from '../../assets/hero/run_4.png';
import { playerStates } from '../sprites/spriteStates';

class Player {
  /**
   * define positions, dimension, characterisitics
   * for our player
   */
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 100;
    this.height = 100;
    this.speed = 10;
    this.frames = 0;
    this.bullets = [];
    // bullet cooldown
    this.cooldown = 500;
    this.lastShotTime = 0;
    // player current state
    this.state = playerStates.idle;
    this.direction = 1; // shoot right - either 1 or -1
    this.verticalDirection = false;
    this.isJumping = false;
    this.health = 400;

    this.createAnimations(); // run animation
  }

  /**
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */
  draw(c) {
    const animation = this.animations.find((animation) => {
      return animation.isFor(this.state);
    });

    const image = animation.getImage();

    c.save(); // Save the current transformation state

    if (this.direction === -1) {
      // Flip the canvas horizontally if the player is facing left
      c.scale(-1, 1);
    }

    c.drawImage(
      image,
      this.direction === -1
        ? -this.position.x - this.width
        : this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    c.restore(); // Restore the transformation state
  }

  /**
   * update our player overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @param {number} currentTime current time
   */
  update(c, currentTime) {
    this.frames++;

    this.draw(c);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Apply gravity effect
    if (
      this.position.y + this.height + this.velocity.y <=
      CANVAS_HEIGHT
    ) {
      this.velocity.y += GRAVITY;
    }

    // handle bullet updates
    // Update the bullets and check cooldown
    this.bullets.forEach((bullet) => bullet.update(c));
    this.bullets = this.bullets.filter((bullet) => bullet.active);

    // Check cooldown before allowing a new bullet to be shot
    const timeSinceLastShot = currentTime - this.lastShotTime;
    if (timeSinceLastShot >= this.cooldown) {
      // Allow shooting
      this.canShoot = true;
    } else {
      // Cooldown still active, cannot shoot
      this.canShoot = false;
    }
  }

  /**
   * shooting mechanism for our player
   *
   * @param {number} currentTime current time
   */
  shootTop(currentTime) {
    if (this.canShoot) {
      let x, y;
      if (this.direction === -1) {
        x = this.position.x;
      } else {
        x = this.position.x + this.width;
      }
      if (this.verticalDirection) {
        x = this.position.x + this.width / 4;
        y = this.position.y;
      } else {
        y = this.position.y + this.height / 2;
      }

      this.bullets.push(
        new Bullet({
          x,
          y,
          direction: this.direction,
          verticalDirection: this.verticalDirection,
          damage: 100,
          color: 'pink',
          speed: 20,
        })
      );

      this.lastShotTime = currentTime;

      // Set canShoot to false to enforce cooldown
      this.canShoot = false;
    }
  }

  /**
   * Create the animation frames
   *
   */
  createAnimations = () => {
    this.idleAnimation = new SpriteAnimation(
      [idle1, idle2, idle3, idle4],
      8,
      playerStates.idle
    );
    this.runAnimation = new SpriteAnimation(
      [run1, run2, run3, run4],
      8,
      playerStates.run
    );

    this.animations = [this.idleAnimation, this.runAnimation];
  };
}

export default Player;
