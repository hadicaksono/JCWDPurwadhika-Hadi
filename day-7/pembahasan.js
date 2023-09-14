let obj1 ={
    name : 'andi',
    age : 20,
}

let obj2 = {
    name : 'andi',
    age : 20
}

console.log(JSON.stringify(obj1));

function compare (a,b){
    let sortA = {}
    let sortB = {}

    Object.keys(a).sort().map(item=> sortA[item] = a[item])
    Object.keys(b).sort().map(item=> sortB[item] = b[item])
    return JSON.stringify(sortA) === JSON.stringify(sortB)


}

console.log(compare(obj1,obj2));


