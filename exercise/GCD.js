function GCD(a,b){
    a = Math.abs(a)
    b = Math.abs(b)

    while(b!==0){
        let temp = b
        b = a % b
        a= temp
    }
    return a

}
let num1 = 13
let num2 = 48
let result = GCD(num1, num2)
console.log(`The GCD of ${num1} and ${num2} is ${result} `);

module.exports={ GCD }