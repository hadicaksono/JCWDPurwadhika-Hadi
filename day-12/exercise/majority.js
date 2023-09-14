function majority(nums){
    let temp
    let count = 0 

    for(const num of nums){
        if(count===0){
            temp = num   
        }
        if(num===temp){
            count+=1
        }else{
            count+=-1
        }
    }
    return temp
}

const nums=[2,2,1,1,1,2,2,1,1,4,5,6,7,4,4,4,4,2,1,2,3,2,2,2,4,4,4,4,4]
console.log(majority(nums));