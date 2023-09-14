// Write a conditional statement to sort three numbers
let n1= 8
let n2 = 11
let n3 = 10

if ((n1>n2)&& (n1>n3) ){
    if(n2>n3){
        console.log(n1,n2,n3)
    }else if (n3>n2){
        console.log(n1,n3,n2)
    }


// }else if(n2>n1>n3){
//     console.log(n2,n1,n3)

// }else if(n2>n3>n1){
//     console.log(n2,n3,n1)
// }else if (n1>n3>n2){
//     console.log(n1,n3,n2)
}else if ((n2>n1) && (n2>n3)){
    if (n1>n3){
        console.log(n2,n1,n3);
    }else if (n3>n1){
        console.log(n2,n3,n1);
    }
}else if((n3>n1) && (n3>n2)){
    if(n1>n2){
        console.log(n3,n1,n2)
    }else if(n2>n1){
        console.log(n3,n2,n1)
    }
}else{
    console.log(n1,n2,n3)
    
}
