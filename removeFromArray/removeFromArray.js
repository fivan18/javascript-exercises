// Using rest operator to manage indefinite number of parameters
const removeFromArray = function(...args) {
    let arr = args.shift();
    let itemsToDelete = args;

    return arr.filter(item => !itemsToDelete.includes(item));

}

module.exports = removeFromArray
