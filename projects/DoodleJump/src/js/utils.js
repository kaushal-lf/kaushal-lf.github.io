/**
 * detect collision between two
 * rectangular objects
 *
 * @param {Object} a Object a
 * @param {Object} b  Object b
 * @returns
 */
export function detectCollision(a, b) {
  return (
    a.x + a.width / 2 < b.x + b.width && //a's top left corner doesn't reach b's top right corner
    a.x + a.width / 2 > b.x && //a's top right corner passes b's top left corner
    a.y < b.y && //a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y //a's bottom left corner passes b's top left corner
  );
}

/**
 * return boolean if generated probability is met
 *
 * @param {number} probability - probability number from 0 to 1
 * @returns boolean
 */
export function generateProbability(probability = 0.5) {
  if (probability < 0 || probability > 1) {
    throw new Error('Probability must be between 0 and 1.');
  }

  return Math.random() < probability;
}

/**
 * our platform states and types
 *
 */
export const platforms = {
  green: {
    active: {
      sx: 0,
      sy: 0,
      sw: 124,
      sh: 32,
    },
  },
  broken: {
    active: {
      sx: 0,
      sy: 146,
      sw: 123,
      sh: 31,
    },
    deactive: {
      sx: 0,
      sy: 299,
      sw: 123,
      sh: 64,
    },
  },
};
