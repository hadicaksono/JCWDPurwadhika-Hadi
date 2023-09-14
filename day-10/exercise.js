/**
        exercise 1
        create a function
            input: 'Pig latin is cool!'
            return 'igPay atinlay siay oolcay !ay'
 */
            let kata = "Pig latin is cool !"
            function strAy(kata) {
                return kata.split(" ").map(item => item.substr(1) + item[0] + "ay").join(" ")
            }
            
            console.log(strAy(kata))

/**
   exercise 2
   create a function
    if begin with vocal, + 'way'
    input: 'Pig latin is cool!'
    return 'igPay atinlay siway oolcay !ay'      
 */

    function pigLatinTranslation(text) {
        // Split the text into words
        const words = text.split(' ');
        const result = [];
      
        // Define a function to check if a character is a vowel
        function isVowel(char) {
          return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
        }
      
        for (const word of words) {
          // Check if the word starts with a vowel
          if (isVowel(word[0])) {
            // If it starts with a vowel, add 'way' to the end
            result.push(word + 'way');
          } else {
            // If it starts with a consonant, move the consonants to the end until a vowel is found, then add 'ay'
            let i = 0;
            while (i < word.length && !isVowel(word[i])) {
              i++;
            }
            result.push(word.slice(i) + word.slice(0, i) + 'ay');
          }
        }
      
        // Join the words back into a sentence
        return result.join(' ');
      }
      
      // Test the function
      const inputText = 'Pig latin is cool !';
      const translatedText1 = pigLatinTranslation(inputText);
      console.log(translatedText1);
/**
        exercise 3
        create a function
        input: 'igPay atinlay siay oolcay !ay'
        return: 'Pig latin is cool!'
 */
function reverse(word){
    
}
     
/**
 *  exercise 4
 *          dataSensor=['anjing','babi']
 *          input : 'budi memberi makan anjing'
 *          output : 'budi memberi makan a****g'
 *          input2 : 'babi dan anjing'
 *          output2 : 'b**i dan a****g
 */

function sensorizeWords(input, dataSensor) {
    const words = input.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      for (let j = 0; j < dataSensor.length; j++) {
        const sensorWord = dataSensor[j].toLowerCase();
        if (word.includes(sensorWord)) {
          words[i] = words[i].replace(new RegExp(sensorWord, 'gi'), (match) => {
            const firstChar = match[0];
            const lastChar = match[match.length - 1];
            const middleStars = '*'.repeat(match.length - 2);
            return firstChar + middleStars + lastChar;
          });
          break;
        }
      }
    }
  
    return words.join(' ');
  }
  
  const dataSensor = ['anjing', 'babi'];
  
  const input1 = 'budi memberi makan anjing';
  const output1 = sensorizeWords(input1, dataSensor);
  console.log(output1);
  
  const input2 = 'babi dan anjing';
  const output2 = sensorizeWords(input2, dataSensor);
  console.log(output2); 
  