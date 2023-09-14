function calculateResults(arr) {
    const [n, totalPoints] = arr;
    const win = Math.floor(totalPoints / 3);
    const draw = totalPoints % 3;
    const lose = n - win - draw;
    return [win, draw, lose];
  }
  
  const arr = [2, 20, 60]; // Example input
  const results = calculateResults(arr);
  
  console.log(results);