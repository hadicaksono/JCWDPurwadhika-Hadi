let now = new Date()

function isWeekend(date){
    let day = now.getDay()
    return day ===0 || day ===6
    
}
if (isWeekend(now)){
    console.log("Today is Weekend");
}else{
    console.log("Today is not Weekend");
}