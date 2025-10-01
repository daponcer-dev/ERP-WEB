
const inputs = [document.getElementById("username"), document.getElementById("password")];
const char = document.querySelector(".character");
const estado = document.getElementById("estado");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    char.classList.add("despierto");
    estado.textContent = "⚡ Despierto y listo!";
  });
  input.addEventListener("blur", () => {
    if (!inputs.some(i => i === document.activeElement)) {
      char.classList.remove("despierto");
      estado.textContent = "😴 Durmiendo...";
    }
  });
});

