let currentOperation = null;
let firstOperand = null;
let secondOperand = null;
let setSecondOutput = 0;

let outputDiv = document.getElementById('output');
  
function showValue(value) {
    if (currentOperation !== null && setSecondOutput == 0) {
        setSecondOutput = 1;
        outputDiv.textContent = '';
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent);
    } else if (setSecondOutput == 1) {
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent);
    } else {
        outputDiv.textContent += value;
        firstOperand = parseFloat(outputDiv.textContent);
    }
}
  
function setOperation(operation) {      
    currentOperation = operation;
}
  
function calculate() {
    if (currentOperation === '+') {
        outputDiv.textContent = sum(firstOperand, secondOperand);
    } else if (currentOperation === '-') {
        outputDiv.textContent = subtract(firstOperand, secondOperand);
    } else if (currentOperation === '*') {
        outputDiv.textContent = multiply(firstOperand, secondOperand);
    } else if (currentOperation === '/') {
        outputDiv.textContent = divide(firstOperand, secondOperand);
    } else if (currentOperation === null) {
        return
    }

    currentOperation = null;
    secondOperand = null;
    setSecondOutput = 0;
}

function clearOutput() {
    outputDiv.textContent = '';
    currentOperation = null;
    firstOperand = null;
}

function sum(a, b) {
    firstOperand = a + b;
    return a + b;
}

function subtract(a, b) {
    firstOperand = a - b;
    return a - b;
}

function multiply(a, b) {
    firstOperand = a * b;
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Error. You can't divide by zero, smartass. Just pretend you pressed the A/C button.");
        clearOutput();
    } else {
        firstOperand = a / b;
        return a / b;
    }
}