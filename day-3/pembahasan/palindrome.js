// Write a code to check whether a string is a palindrome or not.

let str = 'kasur rusak'
let reverse = ''

for(let i =str.length-1; i>=0;i--){
    reverse += str.charAt(i)
    console.log(reverse)
}
console.log(reverse.toLowerCase() === str? 
    `${str} is palindrome`: 
    `${str} is not palindrom`)


