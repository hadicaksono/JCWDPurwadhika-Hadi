/**Write a function to calculate each element in the same position from two arrays of integer.
Assume both arrays are of the same length. */
function sumArray(arr1, arr2){
    const result=[]
    for(let i= 0;i<arr1.length;i++){
        const sum= arr1[i] + arr2[i]
        result.push(sum)
    }
    return result
}
const array1 =[1,2,3]
const array2= [4,5,6]
const resultArr=sumArray(array1, array2)
console.log(resultArr);