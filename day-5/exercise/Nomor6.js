/**Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only */
function ROAE(arr){
    const evenNumbers = arr.filter(num=> num % 2 === 0)
    return evenNumbers
}

const oriArray=[1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenArray= ROAE(oriArray)
console.log(evenArray);

