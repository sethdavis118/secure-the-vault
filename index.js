const seven = 7;
const three = 3;
let code1;
code1 = seven + three;

const oneHundred = 100;
const two = 2;
const ten = 10;
const code2 = oneHundred / two - ten;

const thirtySix = 36;
const fortyThree = 43;
const five = 5;
const code3 = thirtySix + (fortyThree % five);

const message = "The vault has been secured. The combination is:";

const codeA = code1 + "-" + code2 + "-" + code3;

const codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
