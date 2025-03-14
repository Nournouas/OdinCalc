let total;
let a;
let b;
let operator;
let result = 0;

let operatorsList = ["divide", "multiply", "minus", "add", "reset", "equals"];

const display = document.querySelector(".Results");
const buttons = document.querySelectorAll(".button");
buttons.forEach(elem => elem.addEventListener("click" , function (e){
    let buttonId = e.target.id;
    updateDisplay(buttonId);
}));




function add(a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiple (a, b){
    return a * b;
}

function divide (a, b){
    return b != 0 ? a/b : "b cannot be 0";
}

function checkIfOperator(button){
    return operatorsList.includes(button);
}

// takes in the id of the button clicked, 
// if its a number add its to a temporary pointer, then updates the display with the temp pointer
// if its an operator that is not =, stores the current temp in A and the operator in operator, also resets temp to undefined
// if the operator is =, sets B to current temp value, resets temp, calculates reusult and displays the reult.
function updateDisplay(buttonId){
    
}

/*function updateDisplay(buttonId){
    if (!checkIfOperator(buttonId)){
        if (temp === undefined){
            temp = buttonId;
        }else {
            temp += buttonId;
        }
        display.textContent = temp
    } else if (buttonId === "equals"){
        b = parseInt(temp, 10);
        temp = undefined;
        let result = operate(operator, a, b);
        display.textContent = result;
    }
    
    else{
        if (a === undefined && firstOperation === undefined){
            a = parseInt(temp, 10);
            temp = undefined;
            firstOperation = 1;
        }
        operator = buttonId;
    }
}
    */

//takes in a value of a, b and operator, based on the operator, performs operation and returns the result value
function operate (operator, a, b){
    switch (operator) {
        case "add":
            result = add(a, b);
            break
        case "minus":
            result = subtract(a, b);
            break
        case "multiply":
            result = multiple(a, b);
            break
        case "divide":
            result = divide(a, b);
            break
    }

    return result;
}