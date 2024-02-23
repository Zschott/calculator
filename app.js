let currentOperation = null;
let firstOperand = null;
let secondOperand = null;
let setNewOutput = 0;

let outputDiv = document.getElementById('output');
  
function showValue(value) {
    if (currentOperation !== null && setNewOutput == 0) {
        setNewOutput = 1;
        outputDiv.textContent = '';
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent);
    } else if (setNewOutput == 1) {
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent);
    } else {
        outputDiv.textContent += value;
        firstOperand = parseFloat(outputDiv.textContent);
    }
}
  
function setOperation(operation) {      
    if(setNewOutput == 0){
        currentOperation = operation
    } else {
        operate()
        currentOperation = operation;
        secondOperand = null;
        setNewOutput = 0;
    }
}

function operate(){
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
}

function calculate() {
    operate()
    currentOperation = null;
    secondOperand = null;
    setNewOutput = 0;
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

/*
operand1 != null
operator != null
operand2 != null
setNewOutput = 1

press operator
    setOperation()
    checks setNewOutput to see if a second variable has been inputted already
        if no => currentOperation = operation(v)
        if yes
            run operate() based on current settings

*/
