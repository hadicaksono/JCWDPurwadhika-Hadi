/**Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10 */
function printNumberTriangle(height) {
    let currentNumber = 1;
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += `${currentNumber.toString().padStart(2, '0')} `;
        currentNumber++;
      }
      console.log(row);
    }
  }
  
  // Example usage:
  const height = 4;
  printNumberTriangle(height);
  
/** Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping*/

function LoopFizzBuzz(n){
    for (let i = 1;i <= n;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
         }else{
             console.log(i);
         }
    }
}
LoopFizzBuzz(21);
/**Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity” */
function BodyMassIndex(weight,height){
    let BMI=weight/(height*height)
    console.log(BMI)
    if(BMI<18.5 ) {
        console.log('less weight');
    }else if (BMI>=18.5 && BMI<=24.9){
        console.log('ideal');
    }else if (BMI>= 25.0 && BMI<= 29.9){
        console.log('overweight');
    }else if (BMI>=30.0 && BMI<=39.9){
        console.log('very overweight');
    }else if (BMI>39.9){
        console.log('obesity');
    }

}
BodyMassIndex(100,1.5)

/**Write a function to remove all odd numbers in an array and return a new array that contains
even numbers only */

function ROAE(arr){
    const evenNumbers = arr.filter(num=> num % 2 === 0)
    return evenNumbers
}

const oriArray=[1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenArray= ROAE(oriArray)
console.log(evenArray);

/**Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”] */

function ConvertArray(str){
    let strSplit= str.split(' ')
    return strSplit
}
let kata = 'Kamu Cabul'
console.log(ConvertArray(kata));



//5
function jumlahkanArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Contoh penggunaan:
  const arraySaya = [1, 2, 3, 4, 5];
  const hasilJumlah = jumlahkanArray(arraySaya);
  console.log(`[${arraySaya}] => ${hasilJumlah}`); // Output: 15
  