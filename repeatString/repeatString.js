const repeatString = function(str, times) {
    if(times < 0){
        return 'ERROR';
    } else {
        let returnedStr = '';
        for(let i = 1; i <= times; i++){
            returnedStr += str;
        }
        return returnedStr;
    }
}

module.exports = repeatString
