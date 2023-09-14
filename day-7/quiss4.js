// function convertToBanknotes(amount) {
   
//     const moneynotes = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
//     const banknotes = [];  
//   for (const moneynotes of moneynotes) {

//         while (amount >= money) {
//          banknotes.push(moneynotes);
//        }
//     }
  
//     return banknotes;
//   }
  
//   // Example usage:
//   const amount = 74000;
//   const result = convertToBanknotes(amount);
//   console.log(result); // Output: [100000, 75000, 10000, 5000]
  
function convertToBanknotes(amount) {
    // Define the available banknote fractions
    const fractions = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
  
    // Initialize an empty array to store the banknotes
    const banknotes = [];
  
    // Sort the fractions in descending order
    //fractions.sort((a, b) => b - a);
  
    // Iterate through the fractions to find the appropriate banknotes
    for (const fraction of fractions) {
      while (amount >= fraction) {
            banknotes.push(fraction);
            amount -= fraction;
        }
    }
  
    return banknotes;
  }
  
  // Example usage:
  const amount = 190000;
  const result = convertToBanknotes(amount);
  console.log(result); // Output: [100000, 75000, 10000, 5000]
  