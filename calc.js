// 1. Track Operation History - empty array
let calculationHistory = [];

// 2. Helper function to add to history - used in all operations
function addToHistory(num1, operator, num2, result) {
  const calculation = {
    operand1: num1,
    operator: operator,
    operand2: num2,
    result: result
  };
  calculationHistory.push(calculation);
}

// 3. Simple Operations

function add(a, b) {
  const result = a + b;
  addToHistory(a, '+', b, result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  addToHistory(a, '-', b, result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  addToHistory(a, '*', b, result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Cannot divide by zero");
    return null;
  }
  const result = a / b;
  addToHistory(a, '/', b, result);
  return result;
}

// 4. Function to display history
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations stored yet.");
    return;
  }

  console.log("Calculation History:");
  calculationHistory.forEach((calc, index) => {
    console.log(`${index + 1}. ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`);
  });
}

// ----- TEST IT -----

console.log(add(10, 5));        // 15
console.log(subtract(10, 5));   // 5
console.log(multiply(10, 5));   // 50
console.log(divide(10, 5));     // 2

displayHistory();

// Expected output for displayHistory:
// 1. 10 + 5 = 15
// 2. 10 - 5 = 5
// 3. 10 * 5 = 50
// 4. 10 / 5 = 2