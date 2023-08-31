let num =7
// let i =1
// while(i<=10){
//     console.log(`${num} X ${i} = ${i*num}`);
//     i++
// }

for(let i=0; i<=10;i++){
    if(i===0) continue
    console.log(`${num} X ${i} = ${i*num}`);
}
for (let i=1;i<=10;i++){
    console.log(i%2==1? `${i} bilangan ganjil`:`${i} bilangan genap`);
}