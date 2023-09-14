//Brute Force
function checkDuplicate(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0 ; j<arr.length;i++){
            if(arr[i]===arr[j]) return true
        }
    }
    return false
}
console.log(checkDuplicate([1,2,3,1]));

// Optimize with Extra Memory
function checkDuplicate2(arr){
    const uniqueData = new Set()
    for(let i = 0 ; i<arr.length;i++){
        if(uniqueData.has(arr[i]))return true
        else uniqueData.add(arr[i])
    }
    return false
}
console.log(checkDuplicate2([1,2,3,1]));

//Optimize without Extra Memory
function checkDuplicate3(arr){
    arr.sort()
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i] === arr[i+1]) return true
    }
    return false
}

console.log(checkDuplicate3([5,1,3,1]));

// Linear Search
function LinearSearch(arr, x){
    let i
    for(i=0; i <arr.length; i++){
        if(arr[i]== x){
            return i
        }
    }
    return-1
}

 console.log(LinearSearch([2,20,10,3],20))

//Binary Search

function binarySearch(arr,l,r,x){
    if (r>=l){
        let mid = l +Math.floor((r - l)/2)
        // if the element us present at the middle itself
        if(arr[mid]==x)return mid
        // if element is smaller than mid, then
        // it can only be present in left subarray
        if(arr[mid]>x)
            return binarySearch(arr,l,mid-1,x)
        // Else the element can only be present in right subarray
        return binarySearch(arr,mid+1,r,x)
    }
    return -1
}

let arr = [2,3,4,10,40]
let x = 10
console.log(binarySearch(arr,0,arr.length-1,x));

// Sort
// Bubble Sort

function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]= [arr[j],arr[j+1]]               
            }
        }

    }
    return arr
}
console.log(bubbleSort([5,3,8,4,6]));

// selection sort

function selectionSort(arr){
    let min
    for(let i = 0; i < arr.length;i++){
        min=i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) min = j
        }
        if(min != i) [arr[i],arr[min]]= [arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort([29,72,98,13,87,66,52,51,36]));