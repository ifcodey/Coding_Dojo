var num1;
var num2;
var op;
var currentN = '';

function getDisplay() {
  return document.getElementById("display");
}

function pressit(number) {
  currentN += parseFloat(number);
  console.log(num1, num2);

  if (op) {
    num2 = parseFloat(currentN);
  } else {
    num1 = parseFloat(currentN);
  }
  getDisplay().innerText = currentN;
}

function setOp(operation) {
  op = operation;
  currentN = "";
  getDisplay().innerText = "0";
}

function calc() {
  var result;
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "/") {
    result = num1 - num2;
  } else if (op === "X") {
    result = num1 * num2;
  }
}
console.log(num1,num2);
getDisplay().innerText;
