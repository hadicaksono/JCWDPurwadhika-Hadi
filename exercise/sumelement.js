

// let arr1 = [4,5,6,7]
// let arr2 = [1,2,3,4]

let arr=[
    [1,2,3,4],
    [4,5,6,7],
    [7,8,9,0]
]
function sumel(arr){
    let sum = 0

    for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum +=arr[i][j]
        }
    }
    return sum
}

console.log(sumel(arr));

function myFunc(input){
    let res = 0
    input.map(item=> item.map(v=>res+=v))
    return res
}

