// find single

function myFunc (arr){
    return arr.filter(v=> arr.filter(item => item==v).length==1)
}
console.log(myFunc([4,1,2,1,2]));

// anagram 

function myFuncA(a,b){
    let newA = a.split("").sort().join("")
    let newB = b.split("").sort().join("")
    
    return newA == newB
}

console.log(myFuncA("anagram","nagaram"));

// climbing stairs(fibbonaci)

function fib(n){
    let res =[0,1]
    for(let i = 2;i<=n+1;i++){
        res.push(res[i-1]+res[i-2])
    }
    return res[n+1]
}

console.log(fib(6));

//excelSheet sama 