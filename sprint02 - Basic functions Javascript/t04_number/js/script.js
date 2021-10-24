let firstNumber = prompt('Enter a first number of range from 1 to 100');
let secondNumber = prompt('Enter a second number of range from 1 to 100');
let regexNumb = new RegExp(/^([0-9]{1,2}|100)$/);
if((regexNumb.test(firstNumber) === true) && (regexNumb.test(secondNumber))) {
    firstNumber = Number.parseInt(firstNumber);
    secondNumber = Number.parseInt(secondNumber);
    checkDivision(firstNumber, secondNumber);
}

function checkDivision(beginRange = 1, endRange = 100) {
    for (let i = beginRange; i <= endRange;i++){
        let result = '';
        if(Number.isInteger(i / 2) === true) {
            result = ' is even';
        }
        if(Number.isInteger(i / 3) === true) {
            result += ' is a multiple of 3';
        }
        if(Number.isInteger(i / 10) === true) {
            result += ' is a multiple of 10';
        }
        console.log(i + ' - ' + result);
    }
}