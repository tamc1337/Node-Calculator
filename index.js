// const { question } = require('readline-sync');
var readlineSync = require('readline-sync');

var operator;
var firstNum;
var secondNum;

const operations = ['+', '-', '*', '/', '%'];



var isOperator = readlineSync.question('Please enter an operator: + , - , * , / or % only.', {
    limit: operations,
    limitMessage: 'Please enter one of the following: x , - , * , / or %. Nothing else please.'
});
// isItAnOperator(isOperator);

firstNum = readlineSync.questionFloat('What is your first number?');
console.log("You have chosen " + firstNum + "!");
// isItANumberOne(isNumOne);

secondNum = readlineSync.questionFloat('What is your second number?');
console.log("You have chosen " + secondNum + "!");
// isItANumberTwo(isNumTwo);

console.log('You have selected ' + `${firstNum}` + `${operator}` + `${secondNum}` + '!');
console.log("Hmmm... Let me think...");

function theOperation(op, first, second) {
    if (op === "+") {
        return results = first + second;
    } else if (op === "-") {
        return results = first - second;
    } else if (op === "*") {
        return results = first * second;
    } else if (op === "/") {
        return results = first / second;
    } else if (op === "%") {
        return results = first % second;
    };

}

console.log('The result is ' + theOperation(operator, firstNum, secondNum) + '!');
