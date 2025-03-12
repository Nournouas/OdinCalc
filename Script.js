let temp;
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

function updateDisplay(buttonId){
    if (!checkIfOperator(buttonId)){
        if (temp === undefined){
            temp = buttonId;
        }else {
            temp += buttonId;
        }
        display.textContent = temp
    } else if (buttonId === "equals"){
        b = parseInt(temp, 10);
        let result = operate(operator, a, b);

        console.log(result);
        display.textContent = result;
    }
    
    else{
        if (a === undefined){
            a = parseInt(temp, 10);
            temp = undefined;
        }
        operator = buttonId;
    }
}


function operate (operator, a, b){
    console.log(b);
    console.log(a);
    console.log(operator);
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