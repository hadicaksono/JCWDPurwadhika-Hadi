let array1= [1,2,3,4,5,6,7,8,8,9,10]
function lenghtMaxNumber(arr){
    let count = 1
    const arraysort = arr.sort((a,b)=>b-a)
    for (let i=0;i<arraysort.length; i++ ){
        if (arraysort[i]==arraysort[i-1]){
            count++
        }
    }
    return count
}
console.log(lenghtMaxNumber(array1));