let currentNum = "";
let prevNum = "";
let operator = "";

const text = document.querySelector("#text");
const clear = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelectorAll(".decimal");
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

operators.forEach((op) =>
  op.addEventListener("click", function (o) {
    getOperator(o.target.value);
    text.textContent = o.target.textContent;
  })
);

function getOperator(symbol) {
  if (currentNum != "" && prevNum == "") {
    prevNum = currentNum;
    currentNum = "";
    operator += symbol;
    console.log(currentNum, prevNum, operator);
  } else if (s) {
  }
}

equal.addEventListener("click", function () {
  operate(prevNum, operator, currentNum);
});

clear.addEventListener("click", function () {
  currentNum = "";
  prevNum = "";
  operator = "";
  text.textContent = "0";
});

function operate(num1, op, num2) {
  if (op == "add") {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    sum = num1 + num2;
    return (text.textContent = sum.toString());
  }
}
