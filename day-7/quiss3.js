function countSequence(t){
    const letter={
        'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6,'G':7, 'H':8,
        'I': 9, 'J':10, 'K' : 11, 'L': 12, 'M':13, 'N':14, 'O':15,
        'P':16, 'Q':17, 'R':18, 'S':19, 'T':20, 'U':21,'V':22,'W':23, 'X':23,
        'Y':24, 'Z':25
    }
    let total = 0
    for(let i = 0;i<t.length;i++){
        const char = t[i].toUpperCase()
        if(letter[char]){
            total += letter[char]
        }else if(char=== ' '){
            total+=5
        }else{
            total+=10
        }
    }
    return total

}
console.log(countSequence('Purwadhika'));