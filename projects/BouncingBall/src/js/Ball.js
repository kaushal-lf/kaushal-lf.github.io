// Class Ball

class Ball {
  /**
   * initialize our ball with
   * position, velocity, color and radius
   *
   * @param {number} x - x axis
   * @param {number} y - y axis
   * @param {number} dx - x velocity
   * @param {number} dy - y velocity
   * @param {string} color - ball color
   * @param {number} radius - ball radius
   */
  constructor(x, y, dx, dy, color, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.radius = radius;
  }

  /**
   * draw ball on the canvas
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context
   */
  draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(
      Math.round(this.x),
      Math.round(this.y),
      this.radius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  /**
   * Recall this.draw
   *
   */
  update = (ctx, balls) => {
    this.draw(ctx);
    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      if (this === ball) continue;

      if (this.checkCollision(ball)) {
        this.resolveCollision(ball);
        this.resolveOverlap(ball);
      }
    }

    this.resolveBorderCollision();

    this.x += this.dx;
    this.y += this.dy;
  };

  /**
   * ball should bounce back
   * when collided at the border
   *
   */
  resolveBorderCollision = () => {
    if (this.x - this.radius <= 0) {
      this.x = this.radius; // Move the ball inside the canvas
      this.dx = Math.abs(this.dx); // Reverse only the direction
    }
    if (this.x + this.radius > window.innerWidth) {
      this.x = window.innerWidth - this.radius; // Move the ball inside the canvas
      this.dx = -Math.abs(this.dx); // Reverse only the direction
    }
    if (this.y - this.radius <= 0) {
      this.y = this.radius; // Move the ball inside the canvas
      this.dy = Math.abs(this.dy); // Reverse only the direction
    }
    if (this.y + this.radius > window.innerHeight) {
      this.y = window.innerHeight - this.radius; // Move the ball inside the canvas
      this.dy = -Math.abs(this.dy); // Reverse only the direction
    }
  };

  /**
   * Check for collision against other balls
   * @param {Ball} ball - Ball to check collision against
   * @returns {boolean}
   */
  checkCollision = (ball) => {
    const distance = getDistance(this.x, this.y, ball.x, ball.y);
    return distance - this.radius * 2 < 0;
  };

  /**
   * resolve the ball after it has
   * been collided with other ball
   * by swapping the velocity of
   * x and y
   *
   * @param {Ball} ball - compare against other ball
   */
  resolveCollision = (ball) => {
    const tempDx = this.dx;
    const tempDy = this.dy;

    this.dx = ball.dx;
    this.dy = ball.dy;

    ball.dx = tempDx;
    ball.dy = tempDy;
  };

  /**
   * resolve overlap if two balls are at same point
   *
   * @param {Ball} ball - other ball that is overlapping
   */
  resolveOverlap(ball) {
    const distanceX = this.x - ball.x;
    const distanceY = this.y - ball.y;
    const distance = getDistance(this.x, this.y, ball.x, ball.y);
    const overlap = this.radius + ball.radius - distance;
    if (overlap >= 0) {
      const angle = Math.atan2(distanceY, distanceX);
      const moveX = overlap * Math.cos(angle);
      const moveY = overlap * Math.sin(angle);
      this.x += moveX / 2;
      this.y += moveY / 2;
      ball.x -= moveX / 2;
      ball.y -= moveY / 2;
    }
  }
}
