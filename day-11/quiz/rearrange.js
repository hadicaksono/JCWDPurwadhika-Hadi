function rearrange(arr){
    arr.sort((a,b)=>a-b)
    let l= 0
    let r= arr.length-1
    let result = []
    let smallest= true
    while(l<=r){
        if(smallest){
            result.push(arr[l])
            l++
        }else{
            result.push(arr[r])
            r--
            
        }
        smallest=!smallest
    }
    return result
}
console.log(rearrange([4,2,9,7,1,8]));

  