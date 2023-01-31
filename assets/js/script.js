const container = document.querySelector(".container");
const gender = document.querySelectorAll(".gender");
const button = document.querySelector(".button");
const image = document.querySelector("img");
let result = document.querySelector(".result");

button.addEventListener("click", (e) => {
  container.style.height = "400px";
  const birthYear = document.querySelector("#birth-year").value;
  function ageCalc() {
    const age = 2023 - birthYear;
    return age;
  }
  if (gender[1].checked) {
    const genero = "homem";
    const phrase = `Detectamos um ${genero} com ${ageCalc()} anos de idade.`
    result.innerHTML = phrase;
    if (birthYear >= 1900 && birthYear <= 1960) {
      image.setAttribute("src", "assets/images/idosomasc.png");
    } else if (birthYear > 1960 && birthYear <= 1990) {
      image.setAttribute("src", "assets/images/adultomasc.png");
    } else if (birthYear > 1990 && birthYear <= 2010) {
      image.setAttribute("src", "assets/images/jovemmasc.png");
    } else if (birthYear > 2010 && birthYear <= 2023) {
      image.setAttribute("src", "assets/images/bebemasc.png");
    } else {
      result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
    }
  } else {
    const genero = "mulher";
    const phrase = `Detectamos um ${genero} com ${ageCalc()} anos de idade.`
    result.innerHTML = phrase;
    if (birthYear >= 1900 && birthYear <= 1960) {
      image.setAttribute("src", "assets/images/idosafem.png");
    } else if (birthYear > 1960 && birthYear <= 1990) {
      image.setAttribute("src", "assets/images/adultofem.png");
    } else if (birthYear > 1990 && birthYear <= 2010) {
      image.setAttribute("src", "assets/images/jovemfem.png");
    } else if (birthYear > 2010 && birthYear <= 2023) {
      image.setAttribute("src", "assets/images/bebefem.png");
    } else {
      result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
    }
  }
});
