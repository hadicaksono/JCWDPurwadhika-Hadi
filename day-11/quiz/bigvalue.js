function bigv(arr){
    return arr.sort((a,b)=>b-a).join("")
}

console.log(bigv([1,2,3,4,5,6,7]));