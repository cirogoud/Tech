function countChar(someString, someChar) {
    var count = 0;
    for (var i = 0; i < someString.length; i++) {
        if (someString.charAt(i) === someChar) {
            count++;
        }
    }
    return count;
}

function countBs(someString) {
    return countChar(someString, 'B');
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
