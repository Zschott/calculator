let currentOperation = null;
let firstOperand = null;
let secondOperand = null;
let setNewOutput = 0;

let outputDiv = document.getElementById('output');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply')
const operatorButtons = document.getElementsByClassName('opButton');
  
function showValue(value) {
    if (value === '.' && outputDiv.textContent.includes('.')){
        return
    } else if (currentOperation !== null && setNewOutput == 0) { // starts input for second variable
        setNewOutput = 1;
        outputDiv.textContent = '';
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent); // continues input for second variable
    } else if (setNewOutput == 1) {
        outputDiv.textContent += value;
        secondOperand = parseFloat(outputDiv.textContent);
    } else if (currentOperation == null && setNewOutput == 2){ // starts input for first variable after a calculation has already been started
        setNewOutput = 0;
        outputDiv.textContent = '';
        outputDiv.textContent += value;
        firstOperand = parseFloat(outputDiv.textContent);
    } else { // starts input for first variable, or contines input for first varaible after a calculation has already been started
        outputDiv.textContent += value;
        firstOperand = parseFloat(outputDiv.textContent);
    }
}

function setOperation(operation) {      
    if(firstOperand === null){
        return
    } 

    if (currentOperation !== null){
        removeOperatorHighlight()
    }

    if(setNewOutput == 0){
        currentOperation = operation
        highlightOperator()
    } else {
        operate()
        currentOperation = operation;
        highlightOperator();
        secondOperand = null;
        setNewOutput = 0;
    }
}

function operate(){
    removeOperatorHighlight()
    if (currentOperation === '+') {
        outputDiv.textContent = sum(firstOperand, secondOperand);
    } else if (currentOperation === '-') {
        outputDiv.textContent = subtract(firstOperand, secondOperand);
    } else if (currentOperation === '*') {
        outputDiv.textContent = multiply(firstOperand, secondOperand);
    } else if (currentOperation === '/') {
        outputDiv.textContent = divide(firstOperand, secondOperand);
    } else if (currentOperation === null || secondOperand === null) {
        return
    }
    
    let result = parseFloat(outputDiv.textContent);
    let decimalPart = (result.toString().split('.')[1] || '').length;
    if (decimalPart >= 7) {
        outputDiv.textContent = result.toFixed(7);
    } else {
        outputDiv.textContent = result;
    }
}

function calculate() {
    if (currentOperation == '/' && secondOperand == 0){
        setNewOutput = 0
        return alert(`Error. You can't divide by zero.`)
    } else {
    operate()
    currentOperation = null;
    secondOperand = null;
    setNewOutput = 2;
    }
}

function clearOutput() {
    outputDiv.textContent = '';
    removeOperatorHighlight()
    currentOperation = null;
    firstOperand = null;
    setNewOutput = 0;
}

function clearButton(button){
    button.setAttribute('style', 'color: null; background: null;')
}

function collorButton(button){
    button.setAttribute('style', 'color: white; background: #9a0303;');
}

function highlightOperator(){
    return currentOperation == '+' ?  collorButton(addButton):
        currentOperation == '-' ? collorButton(subtractButton):
        currentOperation == '/' ? collorButton(divideButton):
        collorButton (multiplyButton);
}

function removeOperatorHighlight(){
    return currentOperation == '+' ?  clearButton(addButton):
    currentOperation == '-' ? clearButton(subtractButton):
    currentOperation == '/' ? clearButton(divideButton):
    clearButton (multiplyButton);
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
        return alert("Error. You still can't divide by zero, smarty pants. Would you kindly do us both a favor and press the A/C button when you're finished up here. Also, maybe let me know what you did before getting this alert, please and thanks.");
    } else {
        firstOperand = a / b;
        return a / b;
    }
}