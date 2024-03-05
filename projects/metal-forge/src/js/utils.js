import { CANVAS_HEIGHT } from './constants';

/**
 * get Image HTMLDOM from the given img src
 *
 * @param {string} imageSrc src of the image
 * @returns HTMLImageElement
 */
export function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

/**
 * check collision between two rectangles
 *
 * @param {object} rect1 object 1
 * @param {object} rect2 object 2
 * @returns boolean
 */
export function checkCollision(rect1, rect2) {
  return (
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.y < rect2.position.y + rect2.height &&
    rect1.position.y + rect1.height > rect2.position.y
  );
}

/**
 * format the time
 *
 * @param {number} time
 * @returns number
 */
export function formatTime(time) {
  return (time * 0.001).toFixed(0);
}

/**
 * get random number from min and max range
 *
 * @param {number} min min value
 * @param {number} max max value
 * @returns number
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * check if the element is visible on the canvas
 *
 * @param {object} element target element
 * @returns boolean
 */
export function isElementVisible(element) {
  // Check if the enemy's position is within the visible part of the screen
  return (
    element.position.x + element.width > 0 &&
    element.position.x < window.innerWidth &&
    element.position.y + element.height > 0 &&
    element.position.y < window.innerHeight
  );
}

/**
 * platform positions
 */
export const platformPositions = [
  { x: -1, y: CANVAS_HEIGHT - 100 },
  { x: 300, y: CANVAS_HEIGHT - 100 },
  { x: 600, y: CANVAS_HEIGHT - 100 },
  // Pank top
  { x: 400, y: CANVAS_HEIGHT - 320 },
  // platorm
  { x: 900, y: CANVAS_HEIGHT - 100 },
  // space
  { x: 1500, y: CANVAS_HEIGHT - 100 },
  { x: 1800, y: CANVAS_HEIGHT - 100 },
  { x: 2100, y: CANVAS_HEIGHT - 100 },
  { x: 2400, y: CANVAS_HEIGHT - 100 },
  { x: 2700, y: CANVAS_HEIGHT - 100 },
  { x: 3000, y: CANVAS_HEIGHT - 100 },
  { x: 3300, y: CANVAS_HEIGHT - 100 },
  // Elevation top
  { x: 3900, y: CANVAS_HEIGHT - 320 },
  // Elevation top
  { x: 4200, y: CANVAS_HEIGHT - 520 },
  { x: 4500, y: CANVAS_HEIGHT - 520 },
  { x: 4800, y: CANVAS_HEIGHT - 520 },
  { x: 5100, y: CANVAS_HEIGHT - 520 },
  { x: 5400, y: CANVAS_HEIGHT - 520 },
  { x: 5700, y: CANVAS_HEIGHT - 520 },
  { x: 6000, y: CANVAS_HEIGHT - 520 },
  // Drop the player
  { x: 6300, y: CANVAS_HEIGHT - 200 },
  // Drop the player
  { x: 6700, y: CANVAS_HEIGHT - 320 },
  { x: 7000, y: CANVAS_HEIGHT - 100 },
  { x: 7300, y: CANVAS_HEIGHT - 100 },
  { x: 7600, y: CANVAS_HEIGHT - 100 },
  { x: 7900, y: CANVAS_HEIGHT - 100 },
  { x: 8200, y: CANVAS_HEIGHT - 100 },
  { x: 8500, y: CANVAS_HEIGHT - 100 },
  // Death pit
  // Platform
  { x: 8800, y: CANVAS_HEIGHT - 320 },
  { x: 9100, y: CANVAS_HEIGHT - 100 },
  { x: 9400, y: CANVAS_HEIGHT - 100 },
  { x: 9700, y: CANVAS_HEIGHT - 100 },
  { x: 10000, y: CANVAS_HEIGHT - 100 },
  { x: 10300, y: CANVAS_HEIGHT - 100 },
  { x: 10600, y: CANVAS_HEIGHT - 100 },

  // Elevation planks
  { x: 10600, y: CANVAS_HEIGHT - 320 },
  { x: 10600, y: CANVAS_HEIGHT - 530 },
  { x: 10600, y: CANVAS_HEIGHT - 740 },
  { x: 11200, y: CANVAS_HEIGHT - 320 },
  { x: 11200, y: CANVAS_HEIGHT - 530 },
  { x: 11200, y: CANVAS_HEIGHT - 740 },

  // platforms
  { x: 10900, y: CANVAS_HEIGHT - 100 },
  { x: 11200, y: CANVAS_HEIGHT - 100 },
  { x: 11500, y: CANVAS_HEIGHT - 100 },
  { x: 11800, y: CANVAS_HEIGHT - 100 },
  { x: 12100, y: CANVAS_HEIGHT - 100 },

  // Elevation
  { x: 12600, y: CANVAS_HEIGHT - 330 },
  { x: 12900, y: CANVAS_HEIGHT - 330 },
  { x: 13200, y: CANVAS_HEIGHT - 330 },
  { x: 13500, y: CANVAS_HEIGHT - 330 },
  { x: 13800, y: CANVAS_HEIGHT - 330 },
  { x: 14100, y: CANVAS_HEIGHT - 330 },
  { x: 14400, y: CANVAS_HEIGHT - 330 },
  { x: 14700, y: CANVAS_HEIGHT - 330 },
  { x: 15000, y: CANVAS_HEIGHT - 330 },
  { x: 15300, y: CANVAS_HEIGHT - 330 },

  // Drop the player
  { x: 15600, y: CANVAS_HEIGHT - 100 },
  { x: 16100, y: CANVAS_HEIGHT - 100 },
  { x: 16400, y: CANVAS_HEIGHT - 100 },
  { x: 16800, y: CANVAS_HEIGHT - 100 },

  // Death pit

  // Platforms
  { x: 17100, y: CANVAS_HEIGHT - 100 },
  { x: 17500, y: CANVAS_HEIGHT - 100 },
  { x: 17900, y: CANVAS_HEIGHT - 100 },
  { x: 18000, y: CANVAS_HEIGHT - 100 },
  { x: 18300, y: CANVAS_HEIGHT - 100 },

  // Elevation
  { x: 18700, y: CANVAS_HEIGHT - 320 },
  { x: 19000, y: CANVAS_HEIGHT - 320 },
  { x: 19300, y: CANVAS_HEIGHT - 320 },
  { x: 19600, y: CANVAS_HEIGHT - 320 },
  { x: 19900, y: CANVAS_HEIGHT - 320 },

  { x: 20200, y: CANVAS_HEIGHT - 320 },
  { x: 20600, y: CANVAS_HEIGHT - 320 },

  { x: 20900, y: CANVAS_HEIGHT - 320 },
];

/**
 * troop positions
 *
 */
export const troopEnemies = [
  { x: 1000, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 2100, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 2720, y: CANVAS_HEIGHT - 100 - 130 },

  { x: 4900, y: CANVAS_HEIGHT - 520 - 130 },
  { x: 5000, y: CANVAS_HEIGHT - 520 - 130 },
  { x: 5600, y: CANVAS_HEIGHT - 520 - 130 },

  { x: 7000, y: CANVAS_HEIGHT - 320 - 130 },
  { x: 8000, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 8800, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 9800, y: CANVAS_HEIGHT - 100 - 130 },

  { x: 10800, y: CANVAS_HEIGHT - 320 - 130 },
  { x: 10800, y: CANVAS_HEIGHT - 520 - 130 },
  { x: 10800, y: CANVAS_HEIGHT - 720 - 130 },

  { x: 10900, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 11200, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 12100, y: CANVAS_HEIGHT - 100 - 130 },

  { x: 16100, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 16400, y: CANVAS_HEIGHT - 100 - 130 },

  { x: 17100, y: CANVAS_HEIGHT - 100 - 130 },
  { x: 18000, y: CANVAS_HEIGHT - 100 - 130 },

  { x: 19000, y: CANVAS_HEIGHT - 320 - 130 },
  { x: 19300, y: CANVAS_HEIGHT - 320 - 130 },
];

/**
 * tower positions
 */
export const towerEnemies = [
  { x: 4400, y: CANVAS_HEIGHT - 520 - 140 },
  { x: 4700, y: CANVAS_HEIGHT - 520 - 140 },

  { x: 7500, y: CANVAS_HEIGHT - 100 - 140 },

  { x: 9100, y: CANVAS_HEIGHT - 320 - 140 },

  { x: 9400, y: CANVAS_HEIGHT - 100 - 140 },

  { x: 11500, y: CANVAS_HEIGHT - 100 - 140 },

  { x: 12600, y: CANVAS_HEIGHT - 330 - 140 },
  { x: 13200, y: CANVAS_HEIGHT - 330 - 140 },
  { x: 15000, y: CANVAS_HEIGHT - 330 - 140 },
  { x: 15300, y: CANVAS_HEIGHT - 330 - 140 },

  { x: 12600, y: CANVAS_HEIGHT - 330 - 140 },
  { x: 12900, y: CANVAS_HEIGHT - 330 - 140 },
  { x: 13200, y: CANVAS_HEIGHT - 330 - 140 },
];
