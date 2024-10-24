/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button number');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let num1 = null, num2 = null; 
let operator = null;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
        if (operator === null) {
            if (num1 === null) {
                num1 = parseInt(event.target.innerText);
            }
            else {
                num1 = num1*10 + parseInt(event.target.innerText);
            }
            display.innerText = num1;
        }
        else {
            if (num2 === null) {
                num2 = parseInt(event.target.innerText);
            }
            else {
                num2 = num2*10 + parseInt(event.target.innerText);
            }
            display.innerText = num2;
        }
    }
    else if (event.target.innerText === '+') {
        operator = '+';
        display.innerText = operator;
    }
    else if (event.target.innerText === '-') {
        operator = '-';
        display.innerText = operator;
      }
    else if (event.target.innerText === '*') {
        operator = '*';
        display.innerText = operator;
    }
    else if (event.target.innerText === '/') {
        operator = '/';
        display.innerText = operator;
    }
    else if (event.target.innerText === 'C') {
        operator = null;
        num1 = null;
        num2 = null;
        display.innerText = 0;
    }
    else if (event.target.innerText === '=') {
        if(num1 === null || num2 === null || operator === null) {
            display.innerText = "Missing variable."
        }
        else {
            display.innerText = eval(num1+operator+num2);
            operator = null;
            num1 = null;
            num2 = null;
        }
    }
  });
  
/*-------------------------------- Functions --------------------------------*/
