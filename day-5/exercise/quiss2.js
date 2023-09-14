const vowels =['a','i','u','e','o']
function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}
const string = 'Congratulations'
console.log(countVowel(string));