const { GCD } = require('./GCD.js')

function LCM(a,b){
    return (a*b)/GCD(a,b)
}

let num1 = 15
let num2 = 20
let a=num1
let b=num2
let result
do{
    result = LCM(a, b)
    a = result
    b = Math.max(num1,num2)

}while(a%b!==0)
console.log(`LCM of ${num1} and ${num2} is ${result}`);