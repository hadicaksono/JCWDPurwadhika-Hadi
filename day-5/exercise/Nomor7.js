/**Write a function to insert multiple given integer (not an array) to an array and have a maximum size
input. The array can only have a maximum size from a given input. (if the maximum size of the given
input is 5 than the array can only contain 5 elements). */

function insertMultiple(arr, maxsize, ...values){
    if (arr.length + values.length <= maxsize){
        arr.push(...values)
    }else{
        const remainingSpace = maxsize - arr.length
        arr.push(...values.slice(0,remainingSpace))
    }
}
const myArray = [1,2,3]
const maxsize = 5
console.log(insertMultiple(myArray, 5, 5,6,7));