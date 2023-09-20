// const { apply } = require("function-bind");

/*
Write a code to get minimum date from array of dates.
*/
let arrDate= ['2023-09-18','2023-09-15','2023-09-06']
let date= arrDate.map(arrDate=> new Date(arrDate))
// find minimum date
let mindate= new Date(Math.min.apply(null,date))
// make output to string if needed
let mindateSTR=mindate.toISOString().split('T')[0]
console.log(mindateSTR);  