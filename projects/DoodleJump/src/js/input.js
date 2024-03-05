/**
 * Our key actions
 */
export const keys = {
  A: false,
  D: false,
  W: false,
  S: false,
  P: false,
  Space: false,
  ArrowLeft: false,
  ArrowRight: false,
};

/**
 * set boolean to true if key press is detected
 *
 * @param {KeyboardEvent} e keyboard event object
 */
window.onkeydown = (e) => {
  console.log(e.code);
  switch (e.code) {
    case 'KeyA':
      keys.A = true;
      break;
    case 'KeyD':
      keys.D = true;
      break;
    case 'KeyS':
      keys.S = true;
      break;
    case 'KeyW':
      keys.W = true;
      break;
    case 'Space':
      keys.Space = true;
      break;
    case 'KeyP':
      keys.P = !keys.P;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft = true;
      break;
    case 'ArrowRight':
      keys.ArrowRight = true;
      break;
  }
};
/**
 * set boolean to true if key press is detected
 *
 * @param {KeyboardEvent} e keyboard event object
 */
window.onkeyup = (e) => {
  switch (e.code) {
    case 'KeyA':
      keys.A = false;
      break;
    case 'KeyD':
      keys.D = false;
      break;
    case 'KeyS':
      keys.S = false;
      break;
    case 'KeyW':
      keys.W = false;
      break;
    case 'Space':
      keys.Space = false;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft = false;
      break;
    case 'ArrowRight':
      keys.ArrowRight = false;
      break;
  }
};
