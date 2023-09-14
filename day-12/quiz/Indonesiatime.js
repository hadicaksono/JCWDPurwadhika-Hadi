function timeIND(time){
     function isvalid(timestr){
        const [hh, mm] = time.split(':');
        let hour = parseInt(hh, 10);
        const minute = parseInt(mm, 10);
        return !isNaN(hour) && !isNaN(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
     }
    if(isvalid(time)){
        const [hh, mm] = time.split(':');
        let hour = parseInt(hh, 10);
        const minute = parseInt(mm, 10);
        let indonesiaTime =''
        if(hour===0&&minute===0){
            hour = 12   
        }else if(hour===0 &&minute>=1){
            hour=0
        }else if(hour>12){
            hour -=12
        }
        if(minute ===0){
            indonesiaTime = `jam ${hour}`
        }else if(minute>=1&&minute<=14){
            indonesiaTime = `jam ${hour} lewat ${minute}`
        }else if(minute===15){
            indonesiaTime=`jam ${hour} seperempat`
        }else if(minute>=16&&minute<=29){
            indonesiaTime = `jam ${hour} lewat ${minute} `
        }else if(minute===30){
            indonesiaTime = `jam setengah ${hour+1}`
        }else if(minute>=31&&minute<=44){
            indonesiaTime=`jam ${hour+1} kurang ${60-minute}`
        }else if(minute===45){
            indonesiaTime = `jam ${hour+1} kurang seperempat`
        }else if(minute>=46&&minute<=59){
            indonesiaTime=`jam ${hour+1} kurang ${60-minute}`
        }
        return indonesiaTime
    }else{
        let timeF=`${time} is not a valid time`       
        return timeF
    } 
}        
let times ='00.30'
console.log(timeIND(times)); 
    
    
    
