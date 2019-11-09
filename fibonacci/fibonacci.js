const fibonacci = function(num) {
    let position = Number(num);

    if(position < 1) return "OOPS";

    let current = 1;
    let last = 1;
    while(position > 2){
        let temp = current;
        current = current + last;
        last = temp;
        position--;
    }
    return current;

}

module.exports = fibonacci
