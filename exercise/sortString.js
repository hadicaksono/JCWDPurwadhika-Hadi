/*
Write a code to sort a string alphabetically 
(with and without sort function)
*/

let str = ['hadi','aku','kamu']
str.sort()

console.log(str);

let str2 = ['ikan','burung','mamalia']
function bubbleSort (arr){
    for (let i= 0; i<arr.length;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1,arr[j]]] = [arr[j],arr[j+1]]

            }
        }
    }
    return arr
}
function selectionSort(arr){
    let min
    for(let i = 0; i<arr.length;i++){
        min=i
        for(let j =i+1;j<arr.length;j++){
            if (arr[j]<arr[min]) min = j
        }
        if(min!=i)[arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort(str2));
