class App {
  /**
   * Initializes canvas and
   * sets width, height and context
   *
   */
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = canvas.getContext('2d');

    // Set initial canvas size
    this.setCanvasSize();

    this.createBalls();

    // Add event listener for window resize
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * Set canvas width and height
   *
   */
  setCanvasSize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  /**
   * Event handler for window resize
   *
   */
  handleResize = () => {
    // Update canvas size
    this.setCanvasSize();

    // Recreate balls with new canvas dimensions
    this.createBalls();
  };

  /**
   * generate balls and push it into array
   *
   */
  createBalls = () => {
    // Initialize Balls
    this.balls = [];
    const radius = 10;

    for (let i = 0; i < BALL_COUNT; i++) {
      // Check for overlap with existing balls
      const x = randomIntFromRange(
        radius,
        window.innerWidth - radius
      );
      const y = randomIntFromRange(
        radius,
        window.innerHeight - radius
      );

      const dx = (Math.random() - 0.5) * 4;
      const dy = (Math.random() - 0.5) * 4;
      const color = colors[randomIntFromRange(0, colors.length - 1)];

      // Instantiate ball and push it into the array
      const ball = new Ball(x, y, dx, dy, color, radius);
      this.balls.push(ball);
    }
  };

  /**
   * start animation for the ball
   * to move around and
   * call the update method
   *
   */
  animate = () => {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.balls.forEach((ball) => ball.update(this.ctx, this.balls));
  };
}

const app = new App();
app.animate();
