//1 Write a code to convert celsius to fahrenheit
let c = 25
let f = 0
f= (c*(9/5)) + 32
console.log('maka jika celcius dengan nilai '+ c +' dapat dirubah ke suhu fahrenheit dengan nilai '+ f)

//2 Write a code to check whether the number is odd or even

const n= 40
if(n%2==0){
    console.log('genap')
}else if(n%2==1 ){
    console.log('ganjil')
}else{
    console.log('undefined')
}

//3 Write a code to check whether the number is prime number or not
// const isPrime = num =>{
//     for(let i = 2, s= Math.sqrt(num);i<=s;i++){
//         if(num %2===0)
//     }
// }
let value = 19;
let prime = true
if(value===1){
    console.log('1 bukan blangan prima');
}else if( value>1){
    for(let i = 2;i<value;i++){
        value%i==0? prime = false : true
    }
    console.log(prime? `${value} bilangan prima ` : `${value} bukan bilangan prima`);
}else{
    console.log('bukan bilangan');
}


//4 Write a code to find the sum of the numbers 1 to N.
let N = 6
let hasil = 1
let desc ='1'
for(let i = 2;i<=N;i++){
    desc += ` + ${i}`
    hasil  += i 
}
//console.log(`jadi hasil dari penjumlahan mulai dari 1 hingga ${N} adalah ${hasil}`)
console.log(`${N} -> ${desc} = ${hasil}`)

//5 Write a code to find factorial of a number
let hasilF=1
let NX=5
let temp= `${NX}`
for(let i = NX;i>1;i--){
    temp += ` X ${i-1}`
    hasilF = hasilF * i 
}
console.log(`${NX}! -> ${temp} = ${hasilF}`)

//6 Write a code to print the first N fibonacci numbers
let hasilFibo, n1 = 0, n2= 1
let NF=10
let tempF='0'
for(let i = 1;i<=NF;i++){
    //hasilFibo = hasilFibo + i
    tempF += ` ${n1} `
    //console.log(n1)
    hasilFibo = n1+n2
    n1=n2
    n2= hasilFibo
}
console.log(`${NF}-> ${tempF}`);