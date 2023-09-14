//without sort minimum
// var array=[10, 40, 56, 72, 3, 8, 9]

// Array.min = function(array){
//     return Math.min.apply( Math, array)
// }

// var minimum = Array.min(array)
// console.log(minimum)
// with sort


const arr = [1,2,3,4,5,6,7]
// with sorting
function myFunc (number){
    let sortArray = number.sort((a,b)=> a-b)
    let low = sortArray[0]
    let high = sortArray[sortArray.length - 1]
    let avr = sortArray.reduce((a,b) => a+b) / sortArray.length

    return `lowest = ${low},highest = ${high} and average = ${avr}`

}
function myFunc2(number){
    let low = Mat.min(...number)
    let high = Math.max(...number)
    let avr =  number.reduce((a,b) => a+b) /number.length
}
console.log(myFunc(arr));
console.log(myFunc2(arr))