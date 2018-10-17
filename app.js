
//section1//
var marsRobot ={
  position:[0,0],
  direction:'N',
};
//section2//
function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='N';
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  
  switch(rover.direction) {
    case 'N':
      rover.direction ='E';
      break;
    case 'E':
      rover.direction ='S';
      break;
    case 'S':
      rover.direction ='W';
      break;
    case 'W':
      rover.direction ='N';
      break;
  }
console.log("turnRight was called!");
}
//ection3//
function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
}
console.log("moveForward was called");
}
//section4
function marsRobot{
 roverMove( (f)forward, (r)right, (l)left)
}
console.log("rover move");
//section5
function travelLog{
  travelLog.push=("coordinates"),
}
