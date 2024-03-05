/**
 * Manage audio in our game
 *
 */

class Audio {
  /**
   * get the audio DOM
   *
   */
  constructor() {
    this.backgroundMusic = document.querySelector('#bg-music');
    this.shootSound = document.querySelector('#shoot-music');
    this.zombieSound = document.querySelector('#zombie-music');
    this.enemyDeadSound = document.querySelector('#enemy-dead-music');
    this.heliMusic = document.querySelector('#heli-music');
    // Add more audio elements for other sounds as needed
  }

  /**
   * play bg music
   *
   */
  playBackgroundMusic() {
    this.backgroundMusic.play();
  }

  /**
   * stop bg music
   *
   */
  stopBackgroundMusic() {
    this.backgroundMusic.pause();
  }

  /**
   * play shoot sound
   *
   */
  playShootSound() {
    this.shootSound.play();
  }

  /**
   * play zombie sound
   *
   */
  playZombieSound() {
    this.zombieSound.play();
  }

  /**
   * play heli sound
   *
   */
  playHeliSound = () => {
    this.heliMusic.play();
  };
}

export default Audio;
