/**Write a function to find duplicate values in an array */
function findDuplicates(arr){
    const seen = []
    const duplicates = []
    for (const element of arr){
        if (seen[element]){
            duplicates.push (element)
        }else{
            seen[element]= true
        }
    }
    return duplicates
}

const myArray= [1,2,2,3,4,4,5]
const duplicates = findDuplicates(myArray)
console.log(duplicates);