// var readlineSync = require('readline-sync');

// var operator = '';
// var firstNum = null;
// var secondNum = null;

// function isItAnOperator(z) {
//     if (z === "x" ||
//         z === "-" ||
//         z === "*" ||
//         z === "/") {
//         console.log("You have chosen " + z + " !");
//         return operator = z;
//     } else {
//         console.log('Oops, that wasn\'t an Operator. Please try again');
//         isItAnOperator(isOperator);
//     }
// }

// function isItANumberOne(x) {
//     if (x !== NaN) {
//         console.log("You have chosen " + x + " !");
//         return firstNum = x;
//     } else {
//         console.log('Oops, that wasn\'t a number. Please try again.');
//         isItANumberOne(isNumOne);
//     }
//     function isItANumberTwo(y) {
//         if (y !== NaN) {
//             console.log("You have chosen " + y + " !");
//             return secondNum = y;
//         } else {
//             console.log('Oops, that wasn\'t a number. Please try again.');
//             isItANumberTwo(isNumTwo);
//         }


//         var isOperator = readlineSync.question('Please enter an operator: + , - , * , or / only.');
//         isItAnOperator(isOperator);

//         var isNumOne = readlineSync.questionFloat('What is your first number?');
//         isItANumberOne(isNumOne);
//         var isNumTwo = readlineSync.questionFloat('What is your second number?');
//         isItANumberTwo(isNumTwo);


//         function theOperation(operator, firstNum, secondNum) {
//             if (operator === "+") {
//                 return results = firstNum + secondNum;
//             } else if (operator === "-"){
//                 return results = firstNum - secondNum; 
//             } else if (operator === "*") {
//                 return results = firstNum * secondNum; 
//             } else if (operator === "/") {
//                 return results = firstNum / secondNum; };
//         }
//         console.log('The result is ' + theOperation(operator, firstNum, secondNum) + '!')
//     }
// }
