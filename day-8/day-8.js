class Employee {
    constructor(jabatan, rategaji){
        this.jabatan = jabatan
        this.rategaji = rategaji
        this.workinghours=0
    }
    addworkinghour(hours){
        this.workinghours+= hours
    }
    calculateTotalSalary(){
        let total = this.rategaji*this.workinghours
        if(this.workinghours > 6 && this.jabatan=='full-time'){
         total +=(this.rategaji-25000)*(this.workinghours-6)
         }else if(this.workinghours>6 && this.jabatan==='part-time'){
             total +=(this.rategaji-20000)*(this.workinghours-6)
         }
         return total
        }

}

class FulltimeEmployee extends Employee{
    constructor(){
        super('full-time', 100000)
    }
    
    
}
class ParttimeEmployee extends Employee{
    constructor(){
        super('part-time', 50000)
    }
    
}
const fulltimeEmployee =new FulltimeEmployee()
const parttimeEmployee =new FulltimeEmployee()

fulltimeEmployee.addworkinghour(8)
parttimeEmployee.addworkinghour(5)

console.log(fulltimeEmployee.calculateTotalSalary());
console.log(parttimeEmployee.calculateTotalSalary());


