function timeIND(time){
    
    const [hour, minute] = time.split(':').map(Number);
    
    let indonesianHour=hour
    let indonesiaTime =''
    if(hour===0&&minute===0){
        indonesianHour = 12   
    }else if(hour===0 &&minute>=1){
        indonesianHour=0
    }else if(hour>12){
        indonesianHour -=12
    }
    if(minute ===0){
        indonesiaTime = `jam ${indonesianHour}`
    }else if(minute>=1&&minute<=14){
        indonesiaTime = `jam ${indonesianHour} lewat ${minute}`
    }else if(minute===15){
        indonesiaTime=`jam ${indonesianHour} seperempat`
    }else if(minute>=16&&minute<=29){
        indonesiaTime = `jam ${indonesianHour} lewat ${minute} `
    }else if(minute===30){
        indonesiaTime = `jam setengah ${indonesianHour+1}`
    }else if(minute>=31&&minute<=44){
        indonesiaTime=`jam ${indonesianHour+1} kurang ${60-minute}`
    }else if(minute===45){
        indonesiaTime = `jam ${indonesianHour+1} kurang seperempat`
    }else if(minute>=46&&minute<=59){
        indonesiaTime=`jam ${indonesianHour+1} kurang ${60-minute}`
    }
    return indonesiaTime
    
}   
console.log(timeIND('00:30'));     