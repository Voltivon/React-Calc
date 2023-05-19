export default function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(currentOperand);
    const curr = parseFloat(previousOperand);
    let computation = "";
    if (isNaN(prev) && isNaN(curr)) return "";
    switch (operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "/":
        computation = prev / curr;
        break;
      case "*":
        computation = prev * curr;
        break;
  
      // no default
    }
  
    return computation.toString();
  }
  