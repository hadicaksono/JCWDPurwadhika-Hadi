/**Write a function to split a string and convert it into an array of words
a. Example : “Hello World” → [“Hello”, “World”] */
function ConvertArray(str){
    let strSplit= str.split(' ')
    return strSplit
}
let kata = 'Kamu Cabul'
console.log(ConvertArray(kata));