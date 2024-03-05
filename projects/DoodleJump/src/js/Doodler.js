import { keys } from './input';
import doodlerLeft from '../assets/sprites/lik-left@2x.png';
import doodlerRight from '../assets/sprites/lik-right@2x.png';
import {
  CANVAS_WIDTH,
  DOODLER_INITIAL_VELOCITY_Y,
  GRAVITY,
} from './constants';

/**
 * Doodle character that
 * jumps on the screen
 */

class Doodler {
  /**
   * Instantiate a doodler on provided
   * positon and dimenison
   *
   * @param {number} x x position of the doodler
   * @param {number} y y position of the doodler
   * @param {number} dx veloicty at x
   * @param {number} dy velocity at y
   * @param {number} width  width of the doodler
   * @param {number} height height of the doodler
   * @param {string} image source image of the doodle
   */
  constructor(x, y, dx, dy, width, height, image) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.imageLoaded = false;
    this.initialVelocity = DOODLER_INITIAL_VELOCITY_Y;

    this.image.addEventListener('load', () => {
      this.imageLoaded = true;
    });
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */
  draw = (ctx) => {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */
  update = (ctx) => {
    // this.dy = this.initialVelocity;
    this.move();
    // this.dy += GRAVITY;
    this.dy += GRAVITY;
    this.y += this.dy;

    this.draw(ctx);
  };

  /**
   * move the doodler using keyboard controls
   */
  move = () => {
    if (keys.A || keys.ArrowLeft) {
      this.image.src = doodlerLeft;
      this.x -= this.dx;
    }
    if (keys.D || keys.ArrowRight) {
      this.image.src = doodlerRight;
      this.x += this.dx;
    }

    if (this.x > CANVAS_WIDTH) {
      this.x = 0;
    } else if (this.x + this.width < 0) {
      this.x = CANVAS_WIDTH;
    }
  };
}

// const doodler = new Doodler(CANVAS_WIDTH / 2, CANVAS_HEIGHT * 7 / 8 - this.height, 46, 46);

export default Doodler;
