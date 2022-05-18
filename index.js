import { createRequire } from 'module';
const require = createRequire(import.meta.url);
/*C:\Users\BigGameJames\Desktop\Node Calculator>node index.js
(node:10224) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
C:\Users\BigGameJames\Desktop\Node Calculator\index.js:1
import { createRequire } from 'module';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1033:15)
    at Module._compile (node:internal/modules/cjs/loader:1069:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 */


var readlineSync = require('readline-sync');

var operator = '';
var firstNum = null;
var secondNum = null;

function isItAnOperator(z) {
    if (z === "x" ||
        z === "-" ||
        z === "*" ||
        z === "/") {
        console.log("You have chosen " + z + " !");
        return operator = z;
    } else {
        console.log('Oops, that wasn\'t an Operator. Please try again');
        isItAnOperator(isOperator);
    }
}

function isItANumberOne(x) {
    if (x !== NaN) {
        console.log("You have chosen " + x + " !");
        return firstNum = x;
    } else {
        console.log('Oops, that wasn\'t a number. Please try again.');
        isItANumberOne(isNumOne);
    }
    function isItANumberTwo(y) {
        if (y !== NaN) {
            console.log("You have chosen " + y + " !");
            return secondNum = y;
        } else {
            console.log('Oops, that wasn\'t a number. Please try again.');
            isItANumberTwo(isNumTwo);
        }


        var isOperator = readlineSync.question('Please enter an operator: + , - , * , or / only.');
        isItAnOperator(isOperator);

        var isNumOne = readlineSync.questionFloat('What is your first number?');
        isItANumberOne(isNumOne);
        var isNumTwo = readlineSync.questionFloat('What is your second number?');
        isItANumberTwo(isNumTwo);


        function theOperation(operator, firstNum, secondNum) {
            if (operator === "+") {
                return results = firstNum + secondNum;
            } else if (operator === "-"){
                return results = firstNum - secondNum; 
            } else if (operator === "*") {
                return results = firstNum * secondNum; 
            } else if (operator === "/") {
                return results = firstNum / secondNum; };
        }
        console.log('The result is ' + theOperation(operator, firstNum, secondNum) + '!')
    }
}
