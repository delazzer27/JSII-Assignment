const btn = document.querySelectorAll(".numbers");
let input = document.getElementById("result");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".equal");
const clear = document.querySelector(".clear");
let addNumber = 0;
let numberDisplay = "";
let adding = false;
let subtracting = false;
let multiplying = false;
let dividing = false;
let flagFirstOperation = true;
let flagOperator = false;


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

function clearOperation (){
    addNumber = 0;
    numberDisplay = "";
    flagFirstOperation = true;
    flagOperator = false;
    input.value = addNumber;
}

//Show display
btn.forEach(element => {
    element.addEventListener("click", ()=> {
        if(!flagOperator){
            input.value = numberDisplay + element.value;
            numberDisplay = input.value;
        }
        else{
            numberDisplay = "";
            input.value = numberDisplay + element.value;
            numberDisplay = input.value;
            flagFirstOperation = false;
        }
        

        flagOperator = false;
        // calculate();
    })
});

clear.addEventListener("click", ()=>{
        clearOperation();
    })

operator.forEach(element => {
    element.addEventListener("click", ()=>{
        flagOperator = true;
        if(!flagFirstOperation){
            calculate();
            flagFirstOperation=true;
        }
        switch (element.value) {
            case "+":
                adding = true;
                subtracting = false;
                multiplying = false;
                dividing = false;
                break;
            case "-":
                adding = false;
                subtracting = true;
                multiplying = false;
                dividing = false;
                break;
            case "*":
                adding = false;
                subtracting = false;
                multiplying = true;
                dividing = false;
                break;
            case "/":
                adding = false;
                subtracting = false;
                multiplying = false;
                dividing = true;
        }
        addNumber = input.value;

    })
})

result.addEventListener("click", ()=>{
    calculate();
})


// function booleanValues (booleanAdd, booleanSub, booleanFO, booleanMul, booleanDiv) {
//     adding = booleanAdd;
//     subtracting = booleanSub;
//     firsOperate = booleanFO;
//     multiplying = booleanMul;
//     dividing = booleanDiv;
// }

function calculate (){
    if (adding){
        addNumber = add(parseInt(addNumber), parseInt(numberDisplay));
    } else if (multiplying){
        addNumber = multiply(parseInt(addNumber), parseInt(numberDisplay));
    } else if (dividing){
        addNumber = divide(parseInt(addNumber), parseInt(numberDisplay));
    } else if(subtracting) {
        addNumber = subtract(parseInt(addNumber), parseInt(numberDisplay));
    }
    input.value = addNumber;
}

// input.value = 0;

