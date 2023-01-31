const select = document.querySelector("#operators");
const nextStageButton = document.querySelector("#send-option");
const calcButton = document.querySelector("#calc");
const inputs = document.querySelector(".inputs");
const resultField = document.querySelector(".resultado");
const firstInput = document.querySelector("#first-n");
const secondInput = document.querySelector("#second-n");
const firstLabel = document.querySelector("#first-label");
const secondLabel = document.querySelector("#second-label");
inputs.style.display = "none";

select.addEventListener("change", (e) => {
  resultField.innerHTML = "";
  firstInput.value = "";
  secondInput.value = "";
  var operator = select.value;
  if (operator === "exponentiation" || operator === "square") {
    secondInput.style.display = "none";
    firstLabel.innerHTML = "Número";
    secondLabel.style.display = "none";
  } else {
    secondInput.style.display = "flex";
    firstLabel.innerHTML = "Primeiro número";
    secondLabel.style.display = "flex";
  }
});

nextStageButton.addEventListener("click", (e) => {
  inputs.style.display = "flex";
  nextStageButton.style.display = "none";
});

calcButton.addEventListener("click", (e) => {
  var n1 = parseFloat(firstInput.value);
  var n2 = parseFloat(secondInput.value);
  let operator = select.value;
  switch(operator){
    case "addition":
      var result = n1 + n2;
      resultField.innerHTML = result;
      break

    case "subtraction":
      var result = n1 - n2;
      resultField.innerHTML = result;
      break

    case "multiplication":
      var result = n1 * n2;
      resultField.innerHTML = result;
      break

    case "division":
      var result = n1 / n2;
      resultField.innerHTML = result;
      break

    case "exponentiation":
      var result = n1 * n1
      resultField.innerHTML = result;
      break

    case "square":
      var result = n1 ** 0.5
      resultField.innerHTML = result;
      break
  }
});
