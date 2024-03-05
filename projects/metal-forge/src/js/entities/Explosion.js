import { createImage } from '../utils';
import smokeExplosion from '../../assets/smokeExplosion.png';
import fireExplosion from '../../assets/fireExplosion.png';

class Explosion {
  /**
   * dimension of our explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */
  constructor({ x, y }) {
    this.position = { x, y };
    // frames for our explosion
    this.frameX = 0;
    this.fps = 15;
    this.maxFrame = 8;
    this.spriteHeight = 200;
    this.timer = 0;
    this.interval = 1000 / this.fps;
    this.active = true;
  }

  /**
   * update our canvas overtime
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   * @param {number} deltatime delta time
   */
  update(c, deltatime) {
    this.draw(c);
    if (this.timer > this.interval) {
      this.frameX++;
      this.timer = 0;
    } else {
      this.timer += deltatime;
    }
    // if exceeds the frame deactivate
    if (this.frameX > this.maxFrame) this.active = false;
  }

  /**
   * draw image on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx canvas
   */
  draw = (c) => {
    c.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  };
}

export class SmokeExplosion extends Explosion {
  /**
   * dimension of our smoke explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */
  constructor({ x, y }) {
    super({ x, y });
    this.image = createImage(smokeExplosion);
    this.spriteWidth = 200;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
  }
}

export class FireExplosion extends Explosion {
  /**
   * dimension of our fire explosion
   *
   * @param {number} x x position
   * @param {number} y y position
   */
  constructor({ x, y }) {
    super({ x, y });
    this.image = createImage(fireExplosion);
    this.spriteWidth = 200;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
  }
}
