/**
 * Platforms and obstacles
 * in our doodle game
 */
import { GREEN } from './constants';
import { platforms } from './utils';

class Platform {
  /**
   * Instantiate platform class
   *
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} width width of the platform
   * @param {number} height height of the platform
   * @param {string} image source of the image
   * @param {string} type type of tile
   */
  constructor(x, y, width, height, image, type = GREEN) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.imageLoaded = false;
    this.type = type;
    this.active = true;

    this.image.addEventListener('load', () => {
      this.imageLoaded = true;
    });
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx - canvas context
   */
  draw = (ctx) => {
    if (this.active) {
      ctx.drawImage(
        this.image,
        platforms[this.type].active.sx,
        platforms[this.type].active.sy,
        platforms[this.type].active.sw,
        platforms[this.type].active.sh,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (!this.active) {
      ctx.drawImage(
        this.image,
        platforms[this.type].deactive.sx,
        platforms[this.type].deactive.sy,
        platforms[this.type].deactive.sw,
        platforms[this.type].deactive.sh,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  };
}

export default Platform;
