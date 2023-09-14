/**Write a function to find the difference in 2 given array */
// const myArray1 = [1,2,3]
// const myArray2 = [2,3,4]

function difference(arr1, arr2){
    const difference1 = arr1.filter(element => !arr2.includes(element))
    const difference2 = arr2.filter(element => !arr1.includes(element))
    return difference1.concat(difference2)
    
}
const array1=[1,2,3,4,5]
const array2 = [3,4,5,6,7]
const diff = difference(array1,array2)
console.log(diff);