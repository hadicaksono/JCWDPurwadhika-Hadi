let str = 'KkkkKkkkkkk IIiiiiiIL'

function MostCommonChar(str){
    let charcount={}
    let cleanchar= str.replace(' ','').toLowerCase()
    for(char of cleanchar){
       charcount[char] =(charcount[char]||0)+1
    }
    let mostchar=''
    let highestcount = 0
    for(char in charcount){
        if(charcount[char]>highestcount){
            highestcount = charcount[char]
            mostchar = char
        }
        
    }
    return [mostchar, highestcount]
}
console.log(myFunc(str));

function myFunc(str){
    let res=''
    let max = 1
    str.split("").map(v=>{
        let i=str.split(v).length-1
        if(i>max){
            max=i
            res=v
        }
    })
    return res
}
