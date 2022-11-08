const compareArrays = (a, b) => {
  return a.toString() === b.toString();
};


const command = "FLFFFRFLB";

const headings = ["NORTH", "EAST", "SOUTH", "WEST"];

let inputRegEx = /^[fblrFBLR]+$/;

const rover = {
    x: 0,
    y: 0,
    heading: 0,
  };
  

const implementingCommand = (command) => {


    if (inputRegEx.test(command) === true) {

    const movingFunctions = {
        F: moveForward,
        B: moveBackward,
        L: roteteLeftBy90,
        R: roteteRightBy90,
      };
      
      const obstacles = [
        [0, 1],
        [1, 4],
        [3, 5],
        [7, 4],
      ];
      
      const rover = {
        x: 0,
        y: 0,
        heading: 0,
      };
      
      
      // an object that contains 4 directions as a properties, in each step, I,ll use one from the four directions (Based on the current heading (north or east or south or weast))
      const forwardDirections = {
        0: (obj) => obj.y++,
        1: (obj) => obj.x++,
        2: (obj) => obj.y--,
        3: (obj) => obj.x--,
      };
      
      const backwardDirections = {
        0: (obj) => obj.y--,
        1: (obj) => obj.x--,
        2: (obj) => obj.y++,
        3: (obj) => obj.x++,
      };
      
      // moveForward Function => a function that moves the rovers current position (x or y) based on its heading
      function moveForward() {
        forwardDirections[rover.heading](rover);
      }
      
      // moveBackward Function => a function that moves the rovers current position (x or y) based on its heading
      function moveBackward() {
        backwardDirections[rover.heading](rover);
      }
      
      // rotate left Function => a function that rotates the rovers and changes its heading;
      //
      function roteteLeftBy90() {
        rover.heading =
          rover.heading - 1 < 0 ? headings.length - 1 : rover.heading - 1;
        /*(rover.heading - 1 < 0) ===> if the rovers heading was north  ,, equals to (0) ===> then make a rotate left (make its heading to the west (3) */
        /*else : (if its heading was 1, 2, 3 "east or south or weast ?") ===> then makes its heading = current heading - 1 */
        /*which means if it was 2 (south) make it to 1 (east) and so on... */
      }
      
      function roteteRightBy90() {
        rover.heading = rover.heading + 1 > 3 ? 0 : rover.heading + 1;
      
        // to make a rotate right, you just want to increase the heading by 1 ==> if it was 2 make it 3 , if it was north, your right will be east, so make the heading to 1 and so on...
        // but an importnat thing, you will not increase to an infinity number,
        // if you reached the east direction (3) ==> then you should reset the direction to zero
        // (which means return it to the north direction)
      }


  for (let i = 0; i < command.length; i++) {
    let isfoundedObstacle = false;

    movingFunctions[command[i]]();

    obstacles.map((obs) => {
      compareArrays([rover.x, rover.y], obs) ? (isfoundedObstacle = true) : "";
    });

    if (isfoundedObstacle == true) {
      break;
    }
  }

  const finalResult = `(${rover.x} , ${rover.y}) ${headings[rover.heading]} STOPPED`;

  return finalResult;


}else{
    return "Please Enter A Valid Command"
}
}

module.exports = { implementingCommand , headings, rover };
