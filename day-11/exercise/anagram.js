function Anagram(str1,str2){
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
    return str1.split("").sort().join("") === str2.split("").sort().join("");
    }

const str1 = 'rat'
const str2 = 'car'

result = Anagram(str1,str2)

if (result){
    console.log('Anagram : '+true);
}else{
    console.log('Anagram : '+false);
}