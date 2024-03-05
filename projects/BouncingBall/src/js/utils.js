// utils.js

/**
 * Calculate the distance between two points in 2D space
 *
 * @param {number} x1 - x-coordinate of the first point
 * @param {number} y1 - y-coordinate of the first point
 * @param {number} x2 - x-coordinate of the second point
 * @param {number} y2 - y-coordinate of the second point
 * @returns {number} - Distance between the two points
 */
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

/**
 * claculate random number from
 * given range
 *
 * @param {number} min - minimum range for number
 * @param {number} max - maximum range for number
 * @returns {number}
 */
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * get distance between two circles using
 * pythagoras theorem
 *
 * @param {number} x1 -
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
function getDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

/**
 * Get random color
 *
 * @returns {string}
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = [
  '#FF5733', // Orange
  '#2E86C1', // Blue
  '#58D68D', // Green
  '#F4D03F', // Yellow
  '#884EA0', // Purple
  '#EC7063', // Red
  '#3498DB', // Sky Blue
  '#F39C12', // Orange Yellow
  '#1ABC9C', // Turquoise
  '#E74C3C', // Dark Red
  '#3498DB', // Deep Blue
  '#8E44AD', // Violet
  '#45B39D', // Green Blue
  '#D35400', // Pumpkin
  '#2ECC71', // Emerald
  '#C0392B', // Mahogany
  '#3498DB', // Dodger Blue
  '#F39C12', // Bright Yellow
  '#E67E22', // Carrot
  '#16A085', // Green Sea
];
