// Write a code to check whether a string is a palindrome or not.
// let n = "racecar"
// let nlength=n.length
// let len = Math.floor(nlength/2)
// for( let i = 0; i<len; i++){
//     if(n[i]!== n[len-1-i]){
//         console.log(n+'bukan palindrome');
//     }else{
//     console.log(n+'palindrome');
//     }
// }
let str = 'kasur rusak'
let reverse = ''

for(let i =str.length-1; i>=0;i--){
    reverse += str.charAt(i)
    console.log(reverse)
}
console.log(reverse.toLowerCase() === str? 
    `${str} is palindrome`: 
    `${str} is not palindrom`)
