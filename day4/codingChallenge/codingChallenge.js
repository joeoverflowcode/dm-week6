// Write a function that takes a string of directions, separate by commas, and returns an array of numbered direction strings, with proper casing.
// Ex "crack eggs, fry in pan, flip once solid"
// ['1.crack eggs', '2.fry in pan', '3.flip once solid']

// let str = "crack egg, beat, fry, eat"





const directionSpliter = (str) => {
    let arr = str.split(", ")
    let newArr = []

    for(let i = 0 ; i < arr.length; i++) {
        let newAction = arr[i][0].toUpperCase() + arr[i].slice(1)
        newArr.push([ i + 1 ] +  ". "  + newAction)
    }
     
    return (newArr)
}

console.log(directionSpliter("crack egg, fry, eat, get coffee"))