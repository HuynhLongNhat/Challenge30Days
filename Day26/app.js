const input = document.querySelector("input");
const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const characters = document.querySelector(".characters");
const eye = document.querySelector(".form-input i");

eye.addEventListener("click", function () {
  input.getAttribute("type") === "text"
    ? input.setAttribute("type", "password")
    : input.setAttribute("type", "text");
  this.classList.toggle("show-eye");
});

input.addEventListener("input", function () {
  let val = this.value;

  //lower case
  /[a-z]/.test(val)
    ? lowercase.classList.add("valid")
    : lowercase.classList.remove("valid");

  //upper case
  /[A-Z]/.test(val)
    ? uppercase.classList.add("valid")
    : uppercase.classList.remove("valid");

  //number
  /[0-9]/.test(val)
    ? number.classList.add("valid")
    : number.classList.remove("valid");

  //symbol ki tu dac biet
  /[\W]/.test(val)
    ? symbol.classList.add("valid")
    : symbol.classList.remove("valid");

  // check length >=8
  val.length >= 8
    ? characters.classList.add("valid")
    : characters.classList.remove("valid");
});
