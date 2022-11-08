# Mars Rover Task:

its a simple javascript application, in which you can type a command to the rover,
and the rover will follow this command and gives you its current positon (x, y) and heading (North or East or South or Weast)

# To run this application:

(pure javascript app)

1. Navigate to the desired location on your computer
2. Open the command prompt and run `git clone https://github.com/michael-172/Penta-b-Mars-Rover.git`
3. just open index.html file in the browser, and you can find a simple input to write the command inside it,
   and a calculate button.

(react app):

1. firstly run the following commands:
   npm install @reduxjs/toolkit react-redux sweetalert2
2. npm start

# Instructions:

-your command must have on of the following four characters :
for example: if the Command was "FLBRFF" you will get a result "(1 , 3) North",
F , B, R, L (capital or small).
-any other character will be ignored, and you will see an error message ("Please enter a valid command");

# Obstacles:

Note : if The rover faced an obstacle from the following:
[0, 1],
[1, 4],
[3, 5],
[7, 4],

it will stop, and gives you its x, y, heading + "STOPPED";

# example:

if you type "FLFFFRFLB" or just "F",
the rover will gives you (0, 1) North STOPPED,

if you want to remove or add obstacle, you can find the obstacles array in the first few lines.

# Testing:

I've used jest to test this project,
you can find the tests in this file : "utils.test.js"
to run the test, please run the following commands in your terminal :

1. "npm install jest --save-dev" (if you are using yarn, type "yarn add jest --save-dev");
2. "npm test" (if you are using yarn, type: "yarn test");
