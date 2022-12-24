/**
 * Collatz conjecture
 * {@link https://es.wikipedia.org/wiki/Conjetura_de_Collatz}
 */

let value:number = 27
let numberOfIterations = 0

console.log(`for the value of ${value} the path of 3n+1`)

while(value != 1){
    if(value % 2 === 0) {
    value  = value/2
    }else{
        value = value * 3 +1
    }
    numberOfIterations++
    console.log(value)
}

console.log(`iterations: ${numberOfIterations}`)