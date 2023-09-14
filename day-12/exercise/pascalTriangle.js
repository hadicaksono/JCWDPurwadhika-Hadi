function SegitigaPascal(n){
    let arr={}
    
    for(let i=0;i<n;i++){
        arr[i]=[]
        for(let j=0;j<i+1;j++){
            if(j===0||j===i){
                arr[i][j]=1
            }else{
                arr[i][j]=arr[i-1][j-1]+arr[i-1][j]
            }
        }
    }
    let arrbaru=Object.values(arr)
    return arrbaru
}

console.log(SegitigaPascal(5));