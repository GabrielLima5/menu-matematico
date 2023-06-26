const select = document.querySelector("#operators");
const nextStageButton = document.querySelector("#send-option");
const calcButton = document.querySelector("#calc");
const inputs = document.querySelector(".inputs");
const resultField = document.querySelector(".resultado");
const firstInput = document.querySelector("#first-n");
const secondInput = document.querySelector("#second-n");

inputs.style.display = "none";

function calculate(operator, n1, n2){
  switch(operator){
    case "addition":
      var result = n1 + n2;
      
      break

    case "subtraction":
      var result = n1 - n2;
      break

    case "multiplication":
      var result = n1 * n2;
      break

    case "division":
      var result = n1 / n2;
      break

    case "exponentiation":
      var result = n1 * n1
      break

    case "square":
      var result = n1 ** 0.5
      break
  }

  if (isNaN(result) || !isFinite(result)){
    return
  }

  resultField.innerHTML = result.toString().length > 4 ? result.toFixed(2) : result;
}

function displayInputs(onlyOneInput = true){
  const firstLabel = document.querySelector("#first-label");
  const secondLabel = document.querySelector("#second-label");

  if (onlyOneInput) {
    secondInput.style.display = "none";
    firstLabel.innerHTML = "Número";
    secondLabel.style.display = "none";
  } else {
    secondInput.style.display = "flex";
    firstLabel.innerHTML = "Primeiro número";
    secondLabel.style.display = "flex";
  }
}

function initEvents(){
  select.addEventListener("change", (e) => {
    resultField.innerHTML = "";
    firstInput.value = "";
    secondInput.value = "";
  
    var operator = select.value;
    displayInputs(operator === "exponentiation" || operator === "square")
  });
  
  nextStageButton.addEventListener("click", (e) => {
    inputs.style.display = "flex";
    nextStageButton.style.display = "none";
  });
  
  calcButton.addEventListener("click", (e) => {
    var n1 = parseFloat(firstInput.value);
    var n2 = parseFloat(secondInput.value);
    let operator = select.value;
    calculate(operator, n1, n2)
  })
}

initEvents()
