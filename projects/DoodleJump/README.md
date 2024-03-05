# Doodle Jump

This is my first ever game development project in Javascript using Canvas. A simple implementation of the Doodle Jump game using HTML5 Canvas and JavaScript.

## Demo

Enable sound for best experience.

[Demo](https://lfkaushal.github.io/projects/DoodleJump/dist/)

# Keyboard Control

- `a` - move Left.
- `d` - move right.
- `p` - pause / resume game.
- `spacebar` - start / restart the game

## Game Logic

- The doodler always jumps towards y direction with velocity of -8;
- The doodler looks left when moving left and looks right when moving right.
- The doodler can navigate to the most left and pop through the right side of the screen and vice-versa.
- Initially, 9 normal green platforms are rendered on the screen for the doodler to jump through.
- As the doodler jumps through the platforms, new platforms are generated when user reaches 3 / 4 of the canvas. The previous platforms are removed from the screen as well as the array accordingly.
- The probability of broken tile / platform being generated is 0.1 in this game. Meaning, for every 100 tile generated there is chance of 10 tile being broken increasing the difficulty in the game.
- Sounds are palyed at initial start, platform jump, broken tile and game over.
- Users can pause the game which would pause the whole animation temporarily.

# Project Folder Structure

The project follows a structured organization to keep code and assets organized. Here is an overview of the folder structure:

- `index.html` - Main html file for the project
- `style.css` - Stylesheet for our game
- `index.js` - Main entry point for our project that handles the game logic.
- `Doodler.js` - The logic and class implementation for our doodler
- `Platform.js` - The logic for our platforms / obstacles in the game using class.
- `input.js` - Keep track of the users keyboard input.

## How to run this project.

- In order to run this project install the dependencies using:
  `npm install`.

- Run the project using parcel.
  `npx parcel src/index.html`

- Go to the link `localhost:1234`

## Resources

- Sprite assets: https://www.spriters-resource.com/
- Sound assets: https://www.sounds-resource.com/
