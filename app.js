const sum = (a, b) => {
    return a + b
};
console.log(sum(7, 3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
};
const fromDollarToYen = function(euro) {
    let valueInYen = fromEuroToDollar(euro) * 127.9
    return valueInYen
};

const fromYenToPound = function(dollar) {
    let valueInPound = Math.round(fromDollarToYen(dollar) * 0.8)
    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }