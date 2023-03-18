const btn = document.querySelectorAll(".numbers");
let input = document.getElementById("result");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".equal");
const clear = document.querySelector(".clear");
let addNumber = 0;
let numberDisplay = "";
let adding = false;
let subtracting = false;
let firsOperate = true;
let multiplying = false;
let dividing = false;


//FUNCTIONS
function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1*num2;
}

function divide (num1, num2){
    return num1/num2;
}

// function operate (operator, num1, num2){
//     switch (operator) {
//         case add:
//         return add(num1, num2);
//         case subtract:
//         return subtract(num1, num2);
//         case multiply:
//         return multiply(num1, num2);
//         case divide:
//         return divide(num1, num2)
//     }
// }

function clearOperation (){
    input.value = 0;
}

//Show display
btn.forEach(element => {
    element.addEventListener("click", ()=> {
        input.value = numberDisplay + element.value;
        numberDisplay = input.value;
    })
});

clear.addEventListener("click", ()=>{
        clearOperation();
    })

operator.forEach(element => {
    element.addEventListener("click", ()=>{
        switch (element.value) {
            case "+":
                if (subtracting){
                    addNumber = subtract(addNumber, parseInt(numberDisplay));
                    input.value = addNumber;
                } else if (multiplying) {
                    addNumber = multiply(addNumber, parseInt(numberDisplay));
                    input.value = addNumber;
                } else if (dividing){
                    addNumber = divide(addNumber, parseInt(numberDisplay));
                    input.value = addNumber;
                } else {
                    addNumber = add(addNumber, parseInt(numberDisplay));
                    input.value = addNumber;
                }
                adding = true;
                subtracting = false;
                firsOperate = false;
                multiplying = false;
                dividing = false;
                break;
            case "-":
                if (firsOperate == false){
                    if (adding){
                        addNumber = add(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else if (multiplying){
                        addNumber = multiply(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else if (dividing){
                        addNumber = divide(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else {
                        addNumber = subtract(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    }
                } else {
                    addNumber = parseInt(numberDisplay);
                    firsOperate = false;
                }
                adding = false;
                subtracting = true;
                multiplying = false
                dividing = false;
                break;
            case "*":
                if (firsOperate == false){
                    if (adding){
                        addNumber = add(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else if (subtracting){
                        addNumber = subtract(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else if (dividing){
                        addNumber = divide(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    } else {
                        addNumber = multiply(addNumber, parseInt(numberDisplay));
                        input.value = addNumber;
                    }
                } else {
                    addNumber = parseInt(numberDisplay);
                    firsOperate = false;
                }
                adding = false;
                subtracting = false;
                multiplying = true;
                dividing = false;
                break;
                case "/":
                    if (firsOperate == false){
                        if (adding){
                            addNumber = add(addNumber, parseInt(numberDisplay));
                            input.value = addNumber;
                        } else if (subtracting){
                            addNumber = subtract(addNumber, parseInt(numberDisplay));
                            input.value = addNumber;
                        } else if (multiplying){
                            addNumber = multiply(addNumber, parseInt(numberDisplay));
                            input.value = addNumber;
                        } else {
                            addNumber = divide(addNumber, parseInt(numberDisplay));
                            input.value = addNumber;
                        }
                    } else {
                        addNumber = parseInt(numberDisplay);
                        firsOperate = false;
                    }
                    adding = false;
                    subtracting = false;
                    multiplying = false;
                    dividing = true;
        }
        numberDisplay = "";
    })
})

result.addEventListener("click", ()=>{
    if (adding) {
        input.value = add(addNumber, parseInt(numberDisplay));
    } else if (subtracting) {
        input.value = subtract(addNumber, parseInt(numberDisplay));
    } else if (multiplying) {
        input.value = multiply(addNumber, parseInt(numberDisplay));
    } else if (dividing){
        input.value = divide(addNumber, parseInt(numberDisplay));
    }
})
    input.value = 0;








