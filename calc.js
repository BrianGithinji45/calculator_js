
let calculationHistory = [];
function addToHistory(num1, operator, num2, result) {
  const calculation = {
    operand1: num1,
    operator: operator,
    operand2: num2,
    result: result
  };
  calculationHistory.push(calculation);
}

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

console.log(add(10, 5)); 
console.log(subtract(10, 5)); 
console.log(multiply(10, 5));
console.log(divide(10, 5));

displayHistory();