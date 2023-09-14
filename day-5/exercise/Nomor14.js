/**Write a function from the above array of number that will return sum of duplicate values */

let arr = [10,20,40,10,50,30,10,60,10] 

function myFunc(input){
    let res =[]
    for (let i=0;i<input.length; i++){
        if(input.filter(item => item ==input[i].length>1)){
            res.push(input[i])
        }

    }
    return res.reduce((a,b)=>a+b)
}
console.log(myFunc(arr));