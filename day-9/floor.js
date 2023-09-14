function findHighestLocker(floorNumber) {
    // Calculate the number of lockers on each floor
    const lockersPerFloor = [5, 6, 7, 5, 6, 7]; // Pattern repeats every 3 floors
  
    // Calculate the highest locker number
    let highestLocker = 0;
    for (let i = 0; i < floorNumber; i++) {
      highestLocker += lockersPerFloor[i % 3];
    }
  
    return [floorNumber, highestLocker];
  }
  
  // Example usage:
  const floorNumber = 4;
  const result = findHighestLocker(floorNumber);
  console.log(result); // Output: [3, 18]
  