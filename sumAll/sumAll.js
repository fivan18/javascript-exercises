const sumAll = function(...args) {
    if(
        isNaN(args[0]) || isNaN(args[1]) || 
        args[0] < 0 || args[1] < 0 ||
        typeof args[0] === "string" || typeof args[1] === "string"
        ){
        return 'ERROR';
    }

    args.sort((a,b) => a-b);

    let count = 0;
    for(let i = args[0]; i <= args[1]; i++){
        count += i;
    }
    return count;
    
}

module.exports = sumAll
