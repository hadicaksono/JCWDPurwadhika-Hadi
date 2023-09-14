function romanphrase(roman){
    let romanlang={
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }    
    
    let count = 0
    let sebelum=0

    for(let i=roman.length-1; i>=0;i--){
        let currentS=roman[i]
        let currentValue=romanlang[currentS]
        if(currentValue<sebelum){
            count-=currentValue
        }else{
            count+=currentValue
        }
        sebelum = currentValue
    }
    return count
}
console.log(romanphrase("MCMXCIV"));