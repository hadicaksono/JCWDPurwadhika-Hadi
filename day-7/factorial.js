function factorial(n){
    return n == 0 ? 1 : n * factorial(n-1)
}
console.log(factorial(n));

const factorial2 = (n) => n == 0 ? 1 : n * factorial2(n-1)