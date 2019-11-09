function shiftChar(range, num, char) {
    const codeA = range[0].charCodeAt(0);
    const codeZ = range[1].charCodeAt(0);
    let charChanged;
    if (char.charCodeAt(0) + num > codeZ) {
        charChanged = String.fromCharCode(
            char.charCodeAt(0) + num - codeZ + (codeA - 1)
        );
    } else if (char.charCodeAt(0) + num < codeA) {
        charChanged = String.fromCharCode(
            char.charCodeAt(0) + num - codeA + (codeZ + 1)
        );
    } else {
        charChanged = String.fromCharCode(
            char.charCodeAt(0) + num
        );
    }
    return charChanged;
}

const caesar = function (sentence, num) {
    num = num % 26; // 26 is the number of letters

    const arrSentence = sentence.split("");
    return arrSentence.map(char => {
        let charReturned = char;
        if (/[a-zA-Z]/.test(char)) {
            if (/[A-Z]/.test(char)) {
                charReturned = shiftChar(["A", "Z"], num, char);
            } else {
                charReturned = shiftChar(["a", "z"], num, char);
            }
        }
        return charReturned;
    }).join("");
}

module.exports = caesar
