// function getFloors(floor) {
//     // Write your code here
//     const lockersPerFloor = [5, 6, 7, 5, 6, 7]
//     let highestLocker = []
//     for (let i = 0; i < floor; i++) {
//       highestLocker += lockersPerFloor[i]
//     }
  
//     return [floor, highestLocker]
// }
// console.log(getFloors(3));

function findFloor(roomNumber) {
  if (roomNumber <= 0) {
    return [];
  }

  let floor = 1;
  let roomsOnFloor = 5;
  let roomOnThisFloor = 1;

  while (roomNumber > roomOnThisFloor + roomsOnFloor - 1) {
    roomOnThisFloor += roomsOnFloor;
    floor++;
    roomsOnFloor = floor % 2 === 0 ? 6 : 7;
  }

  return [floor];
}

// Example usage:
const roomNumber = 3;
const result = findFloor(roomNumber);
console.log(result);  // Output: [8]
