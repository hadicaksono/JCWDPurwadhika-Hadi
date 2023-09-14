let arr1 = [10,20,40,5,3,6,11]
function secondsmall(arr1){
    let sortArray= arr1.sort((a,b)=>a-b)
    console.log(`second array and the smallest values ${sortArray[1]}`);
}
secondsmall(arr1)