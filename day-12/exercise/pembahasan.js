//majority
function myFunc(arr){
    return arr.filter(v=>arr.filter(item=>item==v).length>arr.length/2)[0]||0
}
console.log(myFunc([3,2,3]));

// stock
function stockMarket(arr){
    let minValue= Math.min(...arr)
    let indexMin = arr.indexOf(minValue)
    let tempArr = arr.splice(indexMin, arr.length - indexMin)
    let maxValueTemp = Math.max(...tempArr)
    console.log({
        minValue,indexMin,tempArr,maxValueTemp
    }); 
    return maxValueTemp - minValue
}

console.log(stockMarket([7,1,5,3,6,4]));