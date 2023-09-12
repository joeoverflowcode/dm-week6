import lodash from 'lodash'

// Write a function that capitalizes the first letter of a string.

export function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1)
}


// Write a function that creates an object out of 4 parameters: name, age, state, lovesCode
const createObj = (name, age, state, lovesCode) => {
    return { name, age, state, lovesCode }
}

// Write a function that generates an array of 10 random numbers between 1-100.
//use lodash
const createArray = () => {
    let arr = []
    for (let i = 0 ; i <10; i++){
        let randInt = lodash.random(1, 100)
        // let randInt = Math.ceil(Math.random() * 100)
        arr.push(randInt)
    }
    return arr
}

// write a function that takes in and returns a number reversed. Only use math.
const reverseNum = num => {
    let reverse = 0
    while (num) {
        let digit = num % 10
        reverse += digit

        num -= digit
        num /= 10
        if (num){
            reverse *= 10
        }
    }
    return reverse
}

console.log(reverseNum(9281))


export { createObj, createArray, reverseNum}