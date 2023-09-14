function intersection(set1,set2){
    const res = new Set()
    for(let i of set2){
        if(set1.has(i))
        res.push(i)
    }
}