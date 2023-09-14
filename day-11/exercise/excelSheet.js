function titleToNumber(title) {
    let result = 0;
    for (let i = 0; i < title.length; i++) {
      result = result * 26 + (title.charCodeAt(i) - 65 + 1);
    }
    return result;
  }
  
  // Example usage:
  const columnTitle = "A";
  const columnNumber = titleToNumber(columnTitle);
  console.log(`The column number of ${columnTitle} is ${columnNumber}`);
  