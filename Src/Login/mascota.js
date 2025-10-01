// Cuando el usuario enfoca un input
const inputs = document.querySelectorAll(".input-group input");
const muñeco = document.getElementById("muñequito");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    muñeco.classList.add("awake");
  });
  input.addEventListener("blur", () => {
    muñeco.classList.remove("awake");
  });
});
