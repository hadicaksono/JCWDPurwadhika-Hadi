//1 Write a code to find area of rectangle
//define variable
const p = 10 //panjang
const l = 5 // lebar

const areaR = p*l // menghitung luas
console.log(areaR) // menampilkan hasil luas persegi panjang


//2 Write a code to find perimeter of rectangle.
const perimeter = p+p+l+l // menghitung keliling persegi panjang
console.log(perimeter) // menampilkan hasil keliling persegi panjang


//3 Write a code to find diameter, circumference and area of a circle
const R= 7 // membuat variable jari-jari
const phi= 3.14 // mendefinisikan nilai phi
const d = 2*R // menghitung diameter lingkaran
const circumference = phi*d// menghitung keliling lingkaran
const areaC = phi *(R**2) //luas lingkaran
console.log(d)// diameter
console.log(circumference) // menampilkan hasil keliling lingkaran
console.log(areaC) // menampilkan hasil luas lingkaran


//4 Write a code to find angles of triangle if two angles are given. ini sudut angle 
// const tt =4 // mendefinisikan tinggi segitiga
// const ts =3 // mendefisikan sisi siku atau dasar segitiga
// //const tm = (tt**2) + (ts**2)
// console.log(Math.sqrt((tt**2) + (ts**2)))//menentukan sisi miring segitiga tm**2=tt**2+ts**2
let s1 = 80
let s2 = 40
let s3 = 180 - s1 - s2
console.log('s3 = '+ s3 )

//5 Write a code to get difference between dates in days.
let now = new Date() // mendefinikan variable now dengan tanggal hari ini
let lastDate= new Date('1/1/2024')// mendefinisikan variable lastDate dengan hari pada tahun baru
let difference = lastDate.getTime()-now.getTime()// menghitung perbedaan dalam milisecond
console.log(difference)
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))//mengkonversikan hasil difference ke jumlah hari 
console.log(TotalDays + ' days to last year')


//6 Write a code to convert days to years, months and days.
let Days= TotalDays // mendefinisikan jumlah hari
var year = Math.floor(Days/365) // menghitung tahun 
var month = Math.floor(Days%365/30) // menghitung banyaknya bulan dari sisa tahun
var days = Math.floor(Days%365%30) // banyaknya hari dari sisa bulan

console.log(year + ' year ' + month + ' month ' + days + ' days')