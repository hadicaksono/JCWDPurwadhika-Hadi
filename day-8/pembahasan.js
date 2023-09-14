class Employee{
    hour = 0
    constructor(name){
        this.name = name
    }
    addWorkingour(hour){
        if (hour<= 0){
            console.log('Hour must be greater than 0');
        }else{
            this.hour += hour
        }
    }
}
class FulltimeEmployee extends Employee{
    getSalary(){
        if(this.hour<=6){
            console.log(this.hour*100000);
        }else{
            console.log(600000+(this.hour-6)*75000);
        }
    }
}
class FulltimeEmployee extends Employee{
    getSalary(){
        if(this.hour<=6){
            console.log(this.hour*50000);
        }else{
            console.log(600000+(this.hour-6)*30000);
        }
    }
}

const employee1 = new FulltimeEmployee('andi')
employee1.addWorkingour(17);