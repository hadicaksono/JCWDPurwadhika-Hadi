class Student {
    name = ''
    // private property
    #age = ''
    program = ''
    static pi= 3.14

    constructor( name,age,program){
        this.name = name
        this.#age = age
        this.program = program
    }
    greeting(){
        console.log(`Hello ${this.name}`);
    }
    getAge(){
        console.log(this.#age);
    }
}

const student1 = new Student ('Andi', 25, 'Digital Marketing')
const student2 = new Student ('Budi', 26, 'Data Science')
console.log(student1.name);
student1.greeting()
student2.greeting()

class Employee{
    constructor(){
        return this.employeeName
    }
    getEmployeeName(){
        return this.employeeName
    }
    setEmployeeName(newName){
        this.employeeName = newName
    }
}

const employee1 = new Employee()
employee1.setEmployeeName('John')
console.log(employee1.getEmployeeName());


// inheritance 
class Gender{
    constructor(gender){
        this.gender = gender
    }
}

class Man extends Gender{
    constructor(name, age){
        super('male')
        this.name = name
        this.age = age
    }
}
class Woman extends Gender{
    constructor(name, age){
        super('female')
        this.name = name
        this.age = age
    }
}

let user1 = new Man('Andi', 25)
let user2 = new Woman('Bilqis', 25)
console.log(user1);
console.log(user2);

console.log(user1 instanceof Gender);
console.log(user1 instanceof Man);
console.log(user2 instanceof Woman);