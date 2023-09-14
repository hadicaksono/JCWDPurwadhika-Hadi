// object
const car = {
    brand: 'BMW',
    model: 'M135i xDrive',
    price: 80000000
}
const car2 = new Object ({
    brand: 'BMW',
    model: 'M135i xDrive',
    price: 80000000
})
console.log(car2);

// acessinng value 
console.log(car.brand);
console.log(car.model);

console.log(car['brand']);

// properties & method 
let user = {
    name: 'David',
    greet(){
        console.log('Hello!');
    }
}

user.greet()

// add property
user.age=25
console.log(user);

// update property
user.name='Budi'
console.log(user);

//delete property
delete user.greet
console.log(user);

let person ={
    name: 'Andi',
    age : '26',
    address :{
        city: 'Bandung',
        country: 'Indonesia'
    }
}

// error
console.log(person.address.city);

// optional chaining
console.log(person.address?.city);

// accessong keys
console.log(Object.keys(person));
console.log(Object.keys(person.address));

// for in
for(const key in person){
    console.log(key); // variable 
    console.log(person[key]); // value key
} 

let student={
    firstname:'Jhon',
    lastname :' Smith',

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullname(value){
        const splittedValue= value.split(' ')
        this.firstname = splittedValue[0]
        this.lastname = splittedValue[1]
    },
}

console.log(student.fullname);

// setter 
student.fullname = 'Alice Cooper'
console.log(student.fullname);

// destructuring
let arr =['apple','lemon']

let [b, a] =arr

console.log(a);
console.log(b);

let fruit={
    name:'apple',
    color :'red'
}

//object destructuring
let {name , color} = fruit

console.log(name);
console.log(fruit.name);

let fruit2 ={
    price : 5000,
    quantity : 10
}
//spread operator
let fruits = {...fruit,...fruit2}
console.log(fruits);

let fruits2 = Object.assign(fruit, fruit2)
console.log(fruits2);