function upperLower(s) {
    // Write your code here    
    let upper = 0
    let lower = 0
    for(let i = 0;i<s.length;i++){
        if (s[i]>= 'A'&& s[i]<= 'Z')upper++
        else if (s[i]>='a'&& s[i]<='z')lower++
    }
    return [lower,upper]
}
console.log(upperLower('Hello world!'));