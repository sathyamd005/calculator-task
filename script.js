//Creating Calculator
const calculatorContainer = document.getElementById('calculator');
const calculator = document.createElement('div');
calculator.classList.add('calculator');

// Creating Input Field
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'result';
// inputField.readOnly = true;

// Creating  Buttons 
const buttons = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['0', 'C', '=', '/']
];

buttons.forEach(buttonRow => {
  const row = document.createElement('div');
  row.classList.add('row');
  buttonRow.forEach(buttonText => {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.onclick = () => handleButtonClick(buttonText);
    row.appendChild(button);
  });
  calculator.appendChild(row);
});

calculatorContainer.appendChild(calculator);
calculator.prepend(inputField);

// Calculator Logic
function handleButtonClick(value) {
  const inputField = document.getElementById('result');
  if (value === '=') {
    calculate();
  } else if (value === 'C') {
    inputField.value = '';
  } else {
    inputField.value += value;
  }
}

function calculate() {
  const inputField = document.getElementById('result');
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    inputField.value = "Error";
  }
}

// Event listener for keyup event
document.addEventListener('keyup', (event) => {
  const keyValue = event.key;
  const inputField = document.getElementById('result');
  if (!isNaN(keyValue) || keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
    inputField.value += keyValue;
  } else if (keyValue === 'Enter') {
    calculate();
  } else if (keyValue === 'Escape') {
    inputField.value = '';
  } else if (/^[a-zA-Z]$/.test(keyValue)) {
    alert("Only numbers and operators are allowed!");
  }
});
