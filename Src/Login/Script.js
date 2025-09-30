function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const btn = document.getElementById('loginBtn');

  btn.classList.add('loading');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove('loading');
    btn.disabled = false;

    if(username === "" && password === "") {
      showToast("Por favor ingresa tu usuario y contraseña");
    } else if(username === "") {
      showToast("Por favor ingresa tu usuario");
    } else if(password === "") {
      showToast("Por favor ingresa tu contraseña");
    } else if(username !== "admin" || password !== "1234") {
      showToast("Usuario o contraseña incorrecta");
    } else {
      showToast("¡Bienvenido, " + username + "!");
    }
  }, 1200);
}

function socialLogin(platform) {
  showToast(`Simulación: Login con ${platform}`);
}
