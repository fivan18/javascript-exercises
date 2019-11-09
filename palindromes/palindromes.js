const palindromes = function(word) {
    const wordClean = word.replace(/[^\w]/g, "").toLowerCase();
    const reverseWord = wordClean.split("").reverse().join("");

    return wordClean === reverseWord;
}

module.exports = palindromes
