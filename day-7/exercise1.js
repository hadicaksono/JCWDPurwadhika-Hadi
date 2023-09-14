function equalObject(A, B){
    const keysA = Object.keys(A)
    const keysB = Object.keys(B)
    
    if (keysA.length !== keysB.length){
        return false
    }
    for (const key of keysA){
        const valueA = A[key]
        const valueB = B[key]

        if(typeof valueA === 'object' && typeof valueB === 'object'){
            if(valueA!= valueB){
                return false
            }else if(!equalObject(valueA,valueB)){
                return false
            }
        }

    }
    return true
}

const obj1 = {
    a:1,
    b:{
        c:2,
        d:{
            e:3
        }
    }
}
const obj2 = {
    a:1,
    b:{
        c:2,
        d:{
            e:3
        }
    }
}
const obj3 = {a:1,b:{c:2,d:{e:3}}}

console.log(equalObject(obj1,obj3));