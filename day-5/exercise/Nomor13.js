/**Write a function from a given array of mixed data types and return the sum of all the number 
 * let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
*/
let arr = [1,'a', null, 2,3,'9']
function myFunc(input){
    return input.filter(item => typeof item == 'number').reduce((a,b)=>a+b)
}
console.log(myFunc(arr));