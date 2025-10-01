
const inputs = document.querySelectorAll(".input-group input);
const yunche = document.querySelector(".yunche");
const estado = document.getElementById("estado");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    yunche.classList.add("despierto");
    estado.textContent = "⚡ Despierto y listo!";
  });
  input.addEventListener("blur", () => {
    if (![...inputs].some(i => i === document.activeElement)) {
      yunche.classList.remove("despierto");
      estado.textContent = "😴 Durmiendo...";
    }
  });
});
