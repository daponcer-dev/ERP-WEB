
// Controla el estado dormido/despierto con los inputs existentes
(function(){
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const svg = document.getElementById('chibi');
  const estado = document.getElementById('chibi-estado');

  if (!username || !password || !svg) return; // seguridad si algún elemento falta

  const inputs = [username, password];

  // Cuando alguno recibe focus -> awake
  function setAwake() {
    svg.classList.add('awake');
    estado.textContent = '⚡ Despierto y ayudando...';
  }

  // Cuando todos pierden focus -> dormir
  function setSleep() {
    // si alguno sigue con focus, no duerme
    const stillFocused = inputs.some(i => i === document.activeElement);
    if (stillFocused) return;
    svg.classList.remove('awake');
    estado.textContent = '💤 Durmiendo...';
  }

  inputs.forEach(i => {
    i.addEventListener('focus', setAwake);
    i.addEventListener('blur', () => {
      // pequeño delay para permitir que otro input reciba focus seguidamente
      setTimeout(setSleep, 60);
    });
  });

  // opcional: parpadeo natural cuando despierto (más real)
  // agrega una clase temporal que hace una pequeña animación de parpadeo
  function blink() {
    if (!svg.classList.contains('awake')) return;
    const eyesOpen = svg.querySelector('.eyes-open');
    const eyesClosed = svg.querySelector('.eyes-closed');
    if (!eyesOpen || !eyesClosed) return;

    eyesOpen.style.opacity = 0;
    eyesClosed.style.opacity = 1;
    setTimeout(() => {
      eyesOpen.style.opacity = 1;
      eyesClosed.style.opacity = 0;
    }, 120);
  }
  // parpadea cada 3.5s cuando está awake
  let blinkInterval = null;
  function startBlinking() {
    if (blinkInterval) clearInterval(blinkInterval);
    blinkInterval = setInterval(blink, 3500);
  }
  function stopBlinking() {
    if (blinkInterval) clearInterval(blinkInterval);
    blinkInterval = null;
  }
  // arrancar/parar según estado
  const observer = new MutationObserver(muts => {
    muts.forEach(m => {
      if (m.attributeName === 'class') {
        if (svg.classList.contains('awake')) startBlinking();
        else stopBlinking();
      }
    });
  });
  observer.observe(svg, { attributes: true });
})();


