(() => {
  const inputs = document.querySelectorAll(".input-group input");
  const muñeco = document.getElementById("muñequito");
  const mascotaBox = document.querySelector(".mascota .msg");

  if (!inputs.length || !muñeco || !mascotaBox) return; // seguridad por si el DOM no está listo

  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      muñeco.classList.add("awake");
      mascotaBox.textContent = "🙌 ¡Listo para ayudarte!";
    });

    input.addEventListener("blur", () => {
      muñeco.classList.remove("awake");
      mascotaBox.textContent = "💤 Estoy durmiendo...";
    });
  });
})();
