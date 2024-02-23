const container = document.querySelector(".container");
const input = container.querySelector(".window");
const buttonClear = container.querySelector(".ac");
const buttons = container.querySelectorAll(".btn");
let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["-", "+", "X", "/"];

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  input.textContent = 0;
  input.classList.remove('error')
}

buttonClear.addEventListener("click", clearAll);

function examination(event) {
  input.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a = a + key;
      input.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      input.textContent = b;
    } else {
      b += key;
      input.textContent = b;
    }
  }
  if (actions.includes(key)) {
    sign = key;
    input.textContent = sign;
  }
  if (key === "=") {
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if(b==='0') {
          input.textContent='ERROR!'
          a=''
          b=''
          sign=''
          input.classList.add('error')
          return
        }
        a = a / b;
        break;
    }
    finish = true;
    input.textContent = a;
  } 
   if(key==='%') {
    input.textContent = a/100;
  }
  if(key==='+/-') {
    input.textContent = -a;
  }
}

buttons.forEach(function(button) {
  button.addEventListener("click", examination);
});
