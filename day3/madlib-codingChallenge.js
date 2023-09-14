//Write a function that returns one of 3 different madlibs. 
//The madlib string should contain placeholders for a noun, adjective, ver and color. 
//Format these placeholders like this #noun#

// Write a function that receives a madlib, and a madlib object, containing the required Key value pairs.
// Use the object values to replace the madlib placeholders, then return the completeed madlib 




const generateLib = () => {
    const madlibs = [
        //Example: "The #color# #nown# likes to #verb# over the #adjective# lawn."
        //"The"

    ]
    const randIndex = Math.floor(Math.random() * madlibs.length)
    return madlibs[randIndex]
}

const createMadLib = (madlib, { noun, color, adjective, verb }) => {
    //let { noun, color, adjective, verb} = libObj

    madlib = madlib.replace('#noun#', noun)
    madlib = madlib.replace('#adjective#', adjective)
    madlib = madlib.replace('#verb#', verb)
    madlib = madlib.replace('#color#', color)

    return madlib
}

console.log(createMadLib(generateLib(), { noun: "dog", color: "brown", adjective: "lazy", verb: "sit"  }))

