// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
let num = 1234567 // Rp.1.234.567,00
let result = ''
let numString = num.toString()

for(let i =0;i < numString.length;i++){
    if(i % 3 === 0 && i > 0){
        result = '.'+result
        result= numString.charAt(s)
    }
}