let arr = ['a','b','c','d'] 
let arr2 = new Array ('a','b','c','d','e')

console.log(arr) //memanggil array
console.log (arr2) //memanggil array

console.log (arr[3]) // menampilkan value array ke-N

let data = [1,2,3]

data.push(4) // menambahkan value array dari belakang
console.log(data)

data.unshift(0) // menambahkan value ke dalam array dari depan
console.log(data)

data.pop()
console.log(data) //menghapus value array dari belakang

data.shift() // menghapus value array dari depan
console.log(data)

console.log(data.length)

let str = 'selamat datang di purwadhika bandung'
let strSplit = str.split(" ")//strig -> array
console.log (strSplit)

let strJoin = strSplit.join(" - ") // array->string
console.log(strJoin);

let student = ['budi','andi','doni'] // sorting array
console.log(student.sort());
console.log(student.sort().reverse());

let nilai = [80,100,90]
console.log(nilai.sort((a,b)=> a - b)); //ascending
console.log(nilai.sort((a,b)=> b - a)); //descending

let city =['jakarta','bandung','depok','jogja','padang']

// looping array forEach
city.forEach(item=>{
    console.log(item)
})

city.map((item,index,arr)=>{
    console.log(`${item} ada di index ke ${index} di dalam array ${arr}`);
})

let age = [20, 30, 40, 50, 60, 70]
console.log(age.filter(item => item>30));

//looping for of (array)
let fruits = ['apple','orange','plum']
for (let item of fruits) {
    console.log(item);
}
for (let i = 0; i< fruits; i++) {
  console.log(item);
    }