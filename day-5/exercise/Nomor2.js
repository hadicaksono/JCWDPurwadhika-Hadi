/**Write a function that takes an array of words and returns a string by concatenating the words in
the array, separated by commas and - the last word - by an 'and */
function concatAndLastWords(word){
    if (word.length === 0){
        return ''

    }else if (word.length === 1){
        return word[0]
    }else{
        const wordExceptLast =word.slice(0, -1).join(', ')
        const hasil =`${wordExceptLast} dan ${word[word.length-1]}`
        return hasil
    }
}
const array=['kamu', 'aku', 'dia']
const hasil= concatAndLastWords(array)
console.log(hasil);