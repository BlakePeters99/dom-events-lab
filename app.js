/*-------------------------------- Constants --------------------------------*/
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
  
    // Process numbers
    if (event.target.classList.contains('number')) {
        // Check which number is being created
        if (operator === null) {
            // If creating initial number
            if (num1 === null) {
                num1 = parseInt(event.target.innerText);
            }
            // If adding digit to number, shift initial number and add new one
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
    // Process operators
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
    // Clear resets variables
    else if (event.target.innerText === 'C') {
        operator = null;
        num1 = null;
        num2 = null;
        display.innerText = 0;
    }
    // Process final eval
    else if (event.target.innerText === '=') {
        // Checks if missing variable
        if(num1 === null || num2 === null || operator === null) {
            display.innerText = "Missing variable."
        }
        else {
            // Learned about eval function from classmate
            display.innerText = eval(num1+operator+num2);
            operator = null;
            num1 = null;
            num2 = null;
        }
    }
  });
  
/*-------------------------------- Functions --------------------------------*/
