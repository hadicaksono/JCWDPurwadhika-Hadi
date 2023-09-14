// if(n==1){
    //     return
    // }
    // let i=0
    // while(i<n-1){
        //     while((i<n-1)&&(price[i+1]<=price[i])){
            //         i++
            //     }
            //     if(i==n-1){
                //         break
                //     }
                
                
                //     let buy =i++
                //     while((i<n)&&(price[i]>=price[i-1])){
                    //         i++
                    //     }
                    //     let sell =i-1
                    //     console.log(`Buy on day : ${buy}
                    //     Sell on day :${sell}`);
                    // }
function stock(price){
    let min = Math.min(...price);
    let slice = price.slice(price.indexOf(min));
    let max = Math.max(...slice);
    return max - min;
}
let price = [7,1,5,3,6,4]
console.log(stock(price));