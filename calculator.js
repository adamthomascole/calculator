const display = document.querySelector("#display");

let opNum1 = "";
let opNum2 = "";
let operator = "";
let time = 1;
let clearNext = false;

// Operations
const add = (num1, num2) => {return num1 + num2};
const subtract = (num1, num2) => {return num1 - num2};
const multiply = (num1, num2) => {return num1 * num2};
const divide = (num1, num2) => {return num1 / num2};

function operate(op, num1, num2) {
    opNum1 = Number(num1);
    opNum2 = Number(num2);
    op = operator;

    if ((op == '/') && (opNum2 == 0)) {
        display.textContent = 'NO! >:-('
        return 'NO! >:-(';
    } else {    
        if (op == "+") {return add(opNum1, opNum2)}
        else if (op == "-") {return subtract(opNum1, opNum2)}
        else if (op == "*") {return multiply(opNum1, opNum2)}
        else if (op == "/") {return divide(opNum1, opNum2)}
        else {return 'ERROR'};
    }
};

// User Input Handling
function keyPress(key) {
    let displayText = display.textContent;
    if (displayText == 'TOO BIG') {
        display.textContent = '';
    }
    if (key == 'clear') {
        console.log('time: ' + time);
        time = 1;
        display.textContent = '0';
    } else if (key == '.') {
        if (displayText.includes(".")) {
            display.textContent = displayText;
        } else {
            display.textContent = displayText + key;
        };
    } else if (key == '+' || key == '-' || key == '*' || key == '/') {
        operator = key;
        clearNext = true;
        if (time == 1) {
            opNum1 = displayText;
            console.log('num1 = ' + opNum1);
            console.log('time: ' + time);
            time++;
        }
    } else if (key == '=') {
        if (time != 1) {
            opNum2 = displayText
            console.log('num2 = ' + opNum2);
            console.log('time: ' + time);
            time++;
        }
        let operation = operate(operator, opNum1, opNum2).toString();
        display.textContent = operation;
        displayText = display.textContent
        
        if ((displayText.length >= 11) && displayText.includes('.')) {
            display.textContent = displayText.slice(0, 11)
        } else if ((displayText.length >= 11) && !displayText.includes('.')) {
            display.textContent = "TOO BIG"
        }

        time = 1;
        opNum1 = operation;
        opNum2 = "";
    } else {
        if (displayText.length <= 11) {
            display.textContent = displayText;
            if (displayText.charAt(1) == '+' || displayText.charAt(1) == '-' || displayText.charAt(1) == '×' || displayText.charAt(1) == '÷') {
                displayText = displayText.slice(1);
            };
    
            if (clearNext == true) {
                console.log(key);
                displayText = "";
                clearNext = false;
            };
    
            if (displayText.includes('0.')) {
                display.textContent = displayText + key;
            } else if (displayText == '0'){
                display.textContent = key;
            } else {
                display.textContent = displayText + key;
            };
        };
    };    
};

display.textContent = "0";
