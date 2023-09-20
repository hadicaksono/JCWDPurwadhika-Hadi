function firsthalf(arr){
    if (arr.length % 2==0){
        return arr.splice(0,(arr.length/2))
    }else{
        return arr.splice(0,(arr.length/2)+1)
    }
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8 ,9]

console.log(firsthalf(arr));