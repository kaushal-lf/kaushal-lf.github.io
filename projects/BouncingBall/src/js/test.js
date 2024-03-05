// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var c = canvas.getContext('2d');
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     c.fillStyle = 'yellow';
//     // c.strokeStyle = 'blue';
//     c.fill();
//   };
//   this.update = function () {
//     if (
//       this.x + this.radius > innerWidth ||
//       this.x - this.radius < 0
//     ) {
//       this.dx = -this.dx;
//     }
//     if (
//       this.y + this.radius > innerHeight ||
//       this.y - this.radius < 0
//     ) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//   };
// }
// const circleArray = [];
// const radius = 20;
// for (let i = 0; i < 10; i++) {
//   let x = Math.random() * (innerWidth - radius * 2) + radius;
//   let y = Math.random() * (innerHeight - radius * 2) + radius;
//   let dx = (Math.random() - 0.5) * 8;
//   let dy = (Math.random() - 0.5) * 8;
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }
// animate();
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = 'yellow';
    c.fill();
  };

  this.update = function () {
    if (
      this.x + this.radius > innerWidth ||
      this.x - this.radius < 0
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.radius > innerHeight ||
      this.y - this.radius < 0
    ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
const circleArray = [];
const radius = 10;
for (let i = 0; i < 100; i++) {
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  // Speed
  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 4;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
function detectCollision(circle1, circle2) {
  // Calculate distance between two circles
  let distanceX = circle1.x - circle2.x;
  let distanceY = circle1.y - circle2.y;
  let distance = Math.sqrt(
    distanceX * distanceX + distanceY * distanceY
  );
  // If distance is less than sum of radii, circles are colliding
  if (distance < circle1.radius + circle2.radius) {
    // Swap velocities to simulate bouncing effect
    let tempDx = circle1.dx;
    let tempDy = circle1.dy;
    circle1.dx = circle2.dx;
    circle1.dy = circle2.dy;
    circle2.dx = tempDx;
    circle2.dy = tempDy;
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  // Check for collisions between circles
  for (let i = 0; i < circleArray.length; i++) {
    for (let j = i + 1; j < circleArray.length; j++) {
      detectCollision(circleArray[i], circleArray[j]);
    }
  }
}
animate();
// ... (previous code remains unchanged)
// Function to handle ball overlap
function resolveOverlap(circle1, circle2) {
  const distanceX = circle1.x - circle2.x;
  const distanceY = circle1.y - circle2.y;
  const distance = Math.sqrt(
    distanceX * distanceX + distanceY * distanceY
  );
  const overlap = circle1.radius + circle2.radius - distance;
  if (overlap >= 0) {
    const angle = Math.atan2(distanceY, distanceX);
    const moveX = overlap * Math.cos(angle);
    const moveY = overlap * Math.sin(angle);
    circle1.x += moveX / 2;
    circle1.y += moveY / 2;
    circle2.x -= moveX / 2;
    circle2.y -= moveY / 2;
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  // Check for collisions between circles
  for (let i = 0; i < circleArray.length; i++) {
    for (let j = i + 1; j < circleArray.length; j++) {
      detectCollision(circleArray[i], circleArray[j]);
      resolveOverlap(circleArray[i], circleArray[j]); // Resolve overlap
    }
  }
}
animate();
