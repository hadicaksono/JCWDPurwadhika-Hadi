function numbersToText(arr) {
    const letterOrder = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";
  
    for (const num of arr) {
      if (num === 0) {
        text += " ";  // Add a space for 0
      } else {
        text += letterOrder[num];
      }
    }
  
    return text;
  }
  
  // Example array
  const exampleArray = [16, 21, 18, 23, 1, 4, 8, 9, 11, 1];
  
  // Convert the array to text
  const result = numbersToText(exampleArray);
  
  // Print the result
  console.log(result);