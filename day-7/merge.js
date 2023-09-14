let arr1 = [
    {name : 'Student 1 ', email : 'Student1@mail.com'},
    {name : 'Student 2 ', email : 'Student2@mail.com'},


]



function merge (a,b){
    let combine = [...a,...b]
    let res = []

    combine.forEach(item =>{
        let stringed = JSON.stringify(item)
        if (!res.includes(stringed)){
            res.push(stringed)
        }
    })
    return res.map(item => JSON.parse(item))
}