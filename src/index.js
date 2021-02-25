module.exports = function reverse (n) {
    let numbers = String(n);
    if (numbers[0] === "-") {
        numbers = numbers.slice(1);
    }
    let newNumbers = numbers.split("").reverse().join("");
    return Number(newNumbers);
}
