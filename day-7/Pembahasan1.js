// 2 

const obj1 = { a: 1, b:2, d:4}
const obj2 = { a : 1, c:3, b:2}

function intersection (a,b){
    let res ={}

    for (const key in a){
        if(a[key]=== b[key]){
            res[key] = a[key]
        }
    }
    return res
}
console.log(intersection(obj1,obj2));