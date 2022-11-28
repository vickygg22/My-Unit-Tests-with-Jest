const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app");

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
const dollars = fromEuroToDollar(3.5);
const expected = 3.5 * 1.2
expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 153.48", function(){
    const yens = fromDollarToYen(1);
    expect(fromDollarToYen(1)).toBe(153.48);
});

test("One yen should be 123", function() {
    const pounds = fromYenToPound(1);
    expect(fromYenToPound(1)).toBe(123);
});