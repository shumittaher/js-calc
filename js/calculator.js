const displayWindow = document.getElementById('display-results')
const equationWindow = document.getElementById('full-equation')

var firstNumber
let firstNumberOpen
var secondNumber
var operationNotDone
let newNumbers
let newEquation

reset()

var numberButtons = document.getElementsByClassName('number-button')
for (const numberButton of numberButtons) {
    
    numberButton.addEventListener('click', function () {

        const number = numberButton.dataset.value


        if (newEquation == true) {

            cleanEquationWindow()

        }

        equationWindow.innerText = equationWindow.innerText + number;

        if (newNumbers == true) {

            displayTextRefresh()
            newNumbers = false
        }

        displayWindow.innerText = displayWindow.innerText + number;

        if (firstNumberOpen == true) {

            firstNumber = parseFloat(displayWindow.innerText);

        } else {

            secondNumber = parseFloat(displayWindow.innerText);

        }

    })
}

var operatorButtons = document.getElementsByClassName('operator-button')


for (const operatorButton of operatorButtons) {

    operatorButton.addEventListener('click', function () {

        if (newEquation == true) {
            resultInEquationWindow()
        }

        equationWindow.innerText = equationWindow.innerText + operatorButton.innerText

        if (newNumbers == true) { firstNumber = parseFloat(displayWindow.innerText) }
      
        equalsTo()

        switch (operatorButton.dataset.value) {
            case 'add':


                operationNotDone = '+'

                firstNumberOpen = false

                displayTextRefresh()


                break;

            case 'minus':


                operationNotDone = '-'

                firstNumberOpen = false

                displayTextRefresh()

                break;


            case 'multiply':
                operationNotDone = 'X'

                firstNumberOpen = false

                displayTextRefresh()

                break;

            case 'divide':
                operationNotDone = '/'

                firstNumberOpen = false

                displayTextRefresh()

                break;

            case 'equal':

                showResult()
                reset()
                newEquation = true
                break;


            case 'AC':
                reset();
                displayTextRefresh();
                cleanEquationWindow();

                break;
            default:
                break;
        }




    })
}

function equalsTo() {
    switch (operationNotDone) {
        case '+':
            addUp()

            break;
        case '-':

            minus()

            break;

        case 'X':

            multiply()

            break;

        case '/':

            divide()

            break;
        default:
            break;
    }



}


function addUp() {
    firstNumber = firstNumber + secondNumber;

}

function minus() {

    firstNumber = firstNumber - secondNumber;


}
function divide() {

    firstNumber = firstNumber / secondNumber;


}

function multiply() {

    
    firstNumber = firstNumber * secondNumber;


}

function reset() {

    firstNumber = 0;
    firstNumberOpen = true;
    secondNumber = 0;
    operationNotDone = '';
    newNumbers = true

}

function showResult() {

    displayWindow.innerText = firstNumber
    newNumbers = true;

}


function displayTextRefresh() {

    displayWindow.innerText = ''

}

function cleanEquationWindow() {

    equationWindow.innerText = ''
    newEquation = false
}

function resultInEquationWindow() {

    equationWindow.innerText = displayWindow.innerText
    newEquation = false

}




