/**
 * animation for our sprite
 *
 */

import { createImage } from '../utils';

class SpriteAnimation {
  images = [];
  /**
   *
   * @param {string[]} arrayImage array of images frames
   * @param {number} timerCount speed of frames
   * @param {string} state current state of our animation
   * @param {boolean} stopAtEnd should stop at end
   */
  constructor(arrayImage, timerCount, state, stopAtEnd) {
    for (let i = 0; i < arrayImage.length; i++) {
      const image = createImage(arrayImage[i]);
      this.images.push(image);
    }
    this.timerCount = timerCount;
    this.timerCountDefault = this.timerCount;
    this.imageIndex = 0;
    this.state = state;
    this.stopAtEnd = stopAtEnd;
  }

  /**
   * check if the passed arguments matches with the current state
   *
   * @param {string} state current state of the frame
   * @returns boolean
   */
  isFor(state) {
    return this.state === state;
  }

  /**
   * reset the image index
   *
   */
  reset() {
    this.imageIndex = 0;
  }

  /**
   * get the current image index
   *
   * @returns string
   */
  getImage() {
    this.setImageIndex();
    return this.images[this.imageIndex];
  }

  /**
   * sets the image index
   */
  setImageIndex() {
    this.timerCount--;
    if (this.timerCount <= 0 && !this.shouldStop()) {
      this.timerCount = this.timerCountDefault;
      this.imageIndex++;
      if (this.imageIndex >= this.images.length) {
        this.imageIndex = 0;
      }
    }
  }

  /**
   * if the animation should stop
   * @returns boolean
   */
  shouldStop() {
    return (
      this.stopAtEnd && this.imageIndex === this.images.length - 1
    );
  }
}

export default SpriteAnimation;
