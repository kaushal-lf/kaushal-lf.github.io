/**
 * Our platforms in the game
 *
 */

class Platform {
  /**
   * dimenison of our platform
   *
   * @param {number} x x position
   * @param {number} y y position
   */
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = 400;
    this.height = 100;
  }

  /**
   * draw image on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of canvas
   */
  draw(c) {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Platform;
