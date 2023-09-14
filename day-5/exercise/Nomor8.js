/**Write a function that will combine 2 given array into one array */
function combine (arr1, arr2){
    return arr1.concat(arr2)
    // return [...a,...b]
}

const myArray1 = [1,2,3]
const myArray2 =[4,5,6]
console.log(combine(myArray1,myArray2));