const display = document.querySelector("#display");

let opNum1 = "";
let opNum2 = "";
let operator = "";

// Operations
const add = (num1, num2) => {return num1 + num2};
const subtract = (num1, num2) => {return num1 - num2};
const multiply = (num1, num2) => {return num1 * num2};
const divide = (num1, num2) => {return num1 / num2};

function operate(op, num1, num2) {
    opNum1 = toNumber(num1);
    opNum2 = toNumber(num2);
    op = operator;

    if (op == "+") {return add(opNum1, num2)}
    else if (op == "-") {return subtract(opNum1, opNum2)}
    else if (op == "*") {return multiply(opNum1, opNum2)}
    else if (op == "/") {return divide(opNum1, opNum2)};
};

// DOM Manipulation
function keyPress(key) {
    switch(key) {
        case 'clear':
            display.textContent = '0';
            break;
        case '7':
            display.textContent = key;
            break;
        case '8':
            display.textContent = key;
            break;
        case '9':
            display.textContent = key;
            break;
        case '/':
            display.textContent = key;
            break;
        case '4':
            display.textContent = key;
            break;
        case '5':
            display.textContent = key;
            break;
        case '6':
            display.textContent = key;
            break;
        case '*':
            display.textContent = key;
            break;
        case '1':
            display.textContent = key;
            break;
        case '2':
            display.textContent = key;
            break;
        case '3':
            display.textContent = key;
            break;
        case '-':
            display.textContent = key;
            break;
        case '0':
            display.textContent = key;
            break;
        case '.':
            display.textContent = key;
            break;
        case '=':
            display.textContent = key;
            break;
        case '+':
            display.textContent = key;
            break;
    } 
    console.log(key);
}

// display.textContent = "0";
