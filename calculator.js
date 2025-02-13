const display = document.querySelector("#display");

let opNum1 = "";
let opNum2 = "";
let operator = "";
let result = "";
let time = 1;
let clearNext = false;
let opLast = false;
let numLast = true;

// Operations
const add = (num1, num2) => {return num1 + num2};
const subtract = (num1, num2) => {return num1 - num2};
const multiply = (num1, num2) => {return num1 * num2};
const divide = (num1, num2) => {return num1 / num2};

function operate(op, num1, num2) {
    opNum1 = Number(num1);
    opNum2 = Number(num2);
    op = operator;

    //console.log(`I completed ${opNum1} ${operator} ${opNum2} at ${time}!!`)

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

function roundNum(num) {
    return Number.parseFloat(num).toFixed(6);
};

// User Input Handling
function keyPress(key) {
    let displayText = display.textContent;
    if (displayText == 'TOO BIG') {
        display.textContent = '';
    }
    if (key == 'clear') {
        numLast = false;
        opNum1 = "0";
        opNum2 = "0";
        time = 1;
        display.textContent = '0';
        opLast = false;
    } else if (key == '.') {
        numLast = false;

        if (displayText.includes(".")) {
            display.textContent = displayText;
        } else {
            display.textContent = displayText + key;
        };
        opLast = false;
    } else if (key == '+' || key == '-' || key == '*' || key == '/') {
        numLast = false;

        if (opLast == true) {
            displayText = display.textContent;
        } else {
            opLast = true;
            operator = key;
            clearNext = true;
            if (time == 1) {
                opNum1 = displayText;
                //console.log('TIME +1')
                time++;
            } else if (time >= 2) {
                displayText = display.textContent
                opNum2 = displayText

                let operation = operate(operator, opNum1, opNum2).toString();
                display.textContent = operation;
                displayText = display.textContent
            
                if ((displayText.length >= 9) && displayText.includes('.')) {
                    displayText = roundNum(Number(display.textContent));
                    display.textContent = displayText.slice(0, 11)
                } else if ((displayText.length >= 9) && !displayText.includes('.')) {
                    display.textContent = "TOO BIG"
                };
                
                result = operate(operator, opNum1, opNum2).toString()
                opNum1 = result;
                //console.log('TIME +1')
                time++;
            }
        }; 
    } else if (key == '=') {
        opLast = false;
        numLast = false;
        let currentValue = display.textContent;
        if (time == 2) {
            opNum2 = displayText
            //console.log('TIME +1')
            time++;
        } else if (time >= 3) {
            opNum1 = result;
            opNum2 = displayText;
            //console.log('TIME +1')
            time++;
        }

        let operation = operate(operator, opNum1, opNum2).toString();
        display.textContent = operation;
        displayText = display.textContent
        
        if ((displayText.length >= 9) && displayText.includes('.')) {
            displayText = roundNum(Number(display.textContent));
            display.textContent = displayText.slice(0, 11)
        } else if ((displayText.length >= 9) && !displayText.includes('.')) {
            display.textContent = "TOO BIG"
        }

        if (time == 1) {
            display.textContent = currentValue;
        }

        time = 1;
        opNum1 = operation;
        opNum2 = "";
    } else {
        opLast = false;
        if (displayText.length <= 9) {
            display.textContent = displayText;
            if (displayText.charAt(1) == '+' || displayText.charAt(1) == '-' || displayText.charAt(1) == '×' || displayText.charAt(1) == '÷') {
                displayText = displayText.slice(1);
            };
            
            if (time == 1 && numLast == false) {
                if (clearNext == true) {
                    // console.log(key);
                    displayText = "";
                    clearNext = false;
                };
        
                if (displayText.includes('0.')) {
                    display.textContent = key;
                } else if (displayText == '0'){
                    display.textContent = key;
                } else {
                    display.textContent = key;
                };
            } else {
                if (clearNext == true) {
                    // console.log(key);
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

        numLast = true;
    };    
};

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key == ".") {
        keyPress(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        keyPress(key);
    } else if (key == "Enter") {
        keyPress("=");
    } else if (key == "Backspace") {
        display.textContent = display.textContent.slice(0, -1) || "0";
    } else if (key == "Escape") {
        keyPress("clear");
    };
});

display.textContent = "0";
