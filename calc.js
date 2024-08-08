let currentNum = "";
let prevNum = "";
let operator = "";

const text = document.querySelector("#text");
const clear = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");

digits.forEach((digit) =>
  digit.addEventListener("click", function (d) {
    getNumber(d.target.textContent);
    text.textContent = currentNum;
  })
);

function getNumber(num) {
  if (currentNum.length <= 7) {
    currentNum += num;
    console.log(prevNum, operator, currentNum);
  }
}

decimal.addEventListener("click", function () {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    text.textContent = currentNum;
    console.log(currentNum);
  }
});

operators.forEach((op) =>
  op.addEventListener("click", function (o) {
    getOperator(o.target.value);
  })
);

function getOperator(symbol) {
  if (operator == "") {
    if (currentNum != "" && prevNum == "") {
      prevNum = currentNum;
      currentNum = "";
      operator += symbol;
      console.log(currentNum, prevNum, operator);
    }
  } else {
    if (prevNum != "" && currentNum == "") {
      operator = "";
      operator += symbol;
      console.log(currentNum, prevNum, operator);
    } else if (currentNum != "" && prevNum != "") {
      operate(prevNum, operator, currentNum);
      operator = "";
      prevNum = text.textContent;
      currentNum = "";
      operator += symbol;
      console.log(currentNum, prevNum, operator);
    }
  }
}

clear.addEventListener("click", function () {
  currentNum = "";
  prevNum = "";
  operator = "";
  text.textContent = "0";
});

equal.addEventListener("click", function () {
  operate(prevNum, operator, currentNum);
});

function operate(num1, op, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (op == "add") {
    let sum = num1 + num2;
    return (text.textContent = sum.toString());
  } else if (op == "subtract") {
    let difference = num1 - num2;
    return (text.textContent = difference.toString());
  } else if (op == "multiply") {
    let product = num1 * num2;
    return (text.textContent = product.toString());
  } else if (op == "divide") {
    let quotient = num1 / num2;
    return (text.textContent = quotient.toString());
  }
}
