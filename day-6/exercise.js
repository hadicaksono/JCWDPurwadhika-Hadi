/** Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average*/
let student = {
    Name : 'Hadi',
    Email : 'hadiw219@gmail.com',
    Age : new Date('12/12/1996'),
    Score: 80,
    realAge(){
        let now = new Date()
        let difference = now.getTime()-this.Age.getTime()
        let TotalDays = Math.floor(difference / (1000 * 3600 * 24))
        var year = Math.floor(Days/365)
    }


}
class Student{
    constructor(name,email,birthdate,score){
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.score =score
    }
}
const student1 = new Student('andi', 'andi@gmail.com', '1997/02/02', 80)
const student2 = new Student('budi', 'budi@gmail.com', '1998/02/02', 60)
const student3 = new Student('erik', 'erik@gmail.com', '1995/02/02', 90)

const arrStudent =[student1,student2, student3]

console.log(arrStudent);

function convertAge(date){
    let birthdate = new Date(date).getTime()
    let now = new Date().getTime()
    let diff = now - birthdate

    return Math.floor(diff/(24*60*60*1000)/365)
    
}
function calculate{
    let maxScore = Math.max(...arr.map(item => item.score))
    let minScore = Math.min(...arr.map(item => item.score))
}

