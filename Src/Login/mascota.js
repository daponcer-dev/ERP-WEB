const inputs = document.querySelectorAll(".input-group input");
const muñeco = document.getElementById("muñequito");
const mascotaMsg = document.querySelector(".mascota .msg");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    muñeco.classList.add("awake");
    mascotaMsg.textContent = "🙌 ¡Listo para ayudarte!";
  });
  input.addEventListener("blur", () => {
    muñeco.classList.remove("awake");
    mascotaMsg.textContent = "💤 Estoy durmiendo...";
  });
});
