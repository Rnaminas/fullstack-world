let numberVar = 123;
let bigIntVar = 1234567890123456789012345678901234567890n;
let stringVar = "Hello";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = {
    name: "First Object",
}
var symbolVar = Symbol("First symbol");
function myFirstFunc() {}
alert(
    'numberVar' + ' is ' + typeof(numberVar) + '\n' +
    'bigIntVar' + ' is ' + typeof(bigIntVar) + '\n' +
    'stringVar' + ' is ' + typeof(stringVar) + '\n' +
    'booleanVar' + ' is ' + typeof(booleanVar) + '\n' +
    'nullVar' + ' is ' + typeof(nullVar) + '\n' +
    'undefinedVar' + ' is ' + typeof(undefinedVar) + '\n' +
    'symbolVar' + ' is ' + typeof(symbolVar) + '\n' +
    'myFirstFunc' + ' is ' + typeof(myFirstFunc) + '\n'
);