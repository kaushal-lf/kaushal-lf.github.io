# 2D Platform Shooting Game

This is a 2D platform shooting game built using JavaScript and the HTML5 Canvas. Your mission is to navigate through the platform, defeat enemies, and achieve the highest score possible.

## Features

- Player character with shooting capabilities.
- Various types of enemies such as zombies, copters, towers, wizards with unique behaviors.
- Score tracking, Time Tracking and display.
- You get 3 lives when you start. You lose life if you fall off the death pit or your health bar is 0.
- Awesome sounds for a good gaming experience.

## Running this project

Run `npm run build` to build the project.
You can also use `npm start` to run development server.

## Controls

1. `Left Arrow`: Move Left
2. `Right Arrow`: Move right
3. `z`: Shoot
4. `x`: Jump
5. `UpArrow + z`: 'Shoot Top'

## Enemies

##### Troop

- Health: 100
- Score: 5

##### Tower

- Health: 120
- Score: 10

##### Surprise Zombie

- Health: 100
- Score: 5

##### Flying Choppers

- Health: 100
- Sore: 15

## Logic

More waves of enemy spawn as you progress throughout the game. The interval is set to 5 seconds after you complete `18500` scrolloffset and you cannot move any further. There ar ehuge waves of enemy swarming at you. This is the hardest part in the game.

## Completing The Game

You will need score of more than 5000 in order to win the game. The waves of enemy are your best chance for collecting score.
