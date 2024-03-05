import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';

class Bullet {
  /**
   *
   * @param {number} x x position
   * @param {number} y y position
   * @param {number} direction direction across teh x axis
   * @param {boolean} verticalDirection if the bullet should go vertical
   * @param {string} color color of the bullet
   */
  constructor({
    x,
    y,
    direction = 1,
    verticalDirection = false,
    damage = 5,
    color,
    speed = 10,
  }) {
    this.position = {
      x,
      y,
    };
    // speed of our bullet
    this.speed = speed;

    this.active = true;
    this.damage = damage;
    this.color = color;

    this.width = 20;
    this.height = 20;
    this.direction = direction;
    this.verticalDirection = verticalDirection;
  }

  /**
   * update our bullet
   *
   * @param {CanvasRenderingContext2D} c context of our canvas
   */
  update(c) {
    this.draw(c);
    // dont go vertical direction
    if (!this.verticalDirection)
      this.position.x += this.speed * this.direction;
    else this.position.y -= this.speed;
    // remove bullet if off canvas
    if (
      this.position.x > CANVAS_WIDTH ||
      this.position.y > CANVAS_HEIGHT ||
      this.position.y < 0 ||
      this.position.x < 0
    )
      this.active = false;
  }

  /**
   * draw our bullet on the canvas
   *
   * @param {CanvasRenderingContext2D} c ctx of our canvas
   */
  draw(c) {
    c.beginPath();
    c.arc(
      this.position.x + this.width,
      this.position.y,
      8,
      0,
      2 * Math.PI
    );
    c.fillStyle = this.color;
    c.fill();
  }
}

export default Bullet;
