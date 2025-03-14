let a = null;
let b = null;
let current
let total = null;
let operator;

const display = document.querySelector(".Display");

const numberButtons = document.querySelectorAll(".Number-Button");
const operatorButtons = document.querySelectorAll(".Operator-Button");
const equalsButton = document.querySelector(".Equals-Button");
const resetButton = document.querySelector(".Reset-Button");


numberButtons.forEach(elem => elem.addEventListener("click" , function (e){
    let buttonId = e.target.id;
    updateDisplayWithNumber(buttonId);
}));

operatorButtons.forEach(elem => elem.addEventListener("click" , function (e){
    let buttonId = e.target.id;
    handleOperator(buttonId);
}));

function handleOperator(buttonId){
    if (a === null && total === null){
        operator = buttonId;
        a = parseInt(current, 10);
        current = null;
        console.log("howdy")
    } else if (a != null && total === null){
        console.log("gotcha");
        console.log("current "+current);
        current === null ? current = 0 : current;
        console.log("operator " +operator);
        let holder = a;
        console.log("a " + a);
        console.log("holder " + holder)
        a = operate(operator, holder, parseInt(current, 10));
        console.log("a 2 " + a)
        display.textContent = a;
        current = null;
        operator = buttonId;
    }
}

function updateDisplayWithNumber(buttonId){
    if (total === null && current){
        current += buttonId
    } else if (total != null && current){

    } else{
        current = buttonId
    }
    display.textContent = current;
}


function operate (operator, a, b){
    switch (operator) {
        case "add":
            return a + b;
        case "minus":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b != 0 ? a/b : "b cannot be 0";
    }
}
