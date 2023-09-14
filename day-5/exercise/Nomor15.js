/**Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will
randomly pick between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win */
function myFunc(str){
    let numRandom = Math.ceil(Math.random()*3)
    let com = numRandom == 1? 'rock' : numRandom == 2 ? 'paper': 'scissor'
    let res 
    return numRandom
}
console.log(myFunc('rock'));