let age = 21

if (age>=17){
    console.log('You can now create an ID Card')
}else{
    console.log('You are not old enough to create an ID card')
}

let grade = 'B'
if (grade=== 'A') {
    console.log('Excelent Result!')
}else if (grade === 'B'){
    console.log('Great Result!')
}else if (grade === 'C') {
    console.log('Average Result!')
}else {
    console.log('Invalid Grade!')
}
let now = new Date ()
let days = now.getDay()
switch (days){
    case 1:
        console.log('Hari Senin')
        break;
    case 2:
       console.log('Hari Selasa')
        break;
    case 3:
        console.log('Hari Rabu')
        break;
    case 4:
        console.log('Hari Kamis')
        break;
    case 5:
        console.log('Hari Jumat')
        break;
    default:
        console.log('Hari Sabtu')
        break;
}

//Logical Operators Example 
let car = 'BMW'
if(car ==='BMW' && car ==='TOYOTA'){
    console.log('This car is awesome')
}

// Ternary Operator
let word = 'Javascript'
console.log(word === 'Javascript' ? 'Javascript' : word === 'Python' ? 'Python' : 'Not Javascript or Python')