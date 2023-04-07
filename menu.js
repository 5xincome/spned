// Función para desplegar el menú
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  
  // Función para redirigir al chatbot después de 2 segundos
  function redirectToChatbot() {
    setTimeout(function() {
      window.location.href = "chatbot.html";
    }, 7000);
  }
  
  // Agregar evento para desplegar el menú
  document.getElementById("menu-bar").addEventListener("click", menuOnClick);
  
  // Agregar evento para redirigir al chatbot
  document.getElementById("support-link").addEventListener("click", function(event) {
    event.preventDefault();
    menuOnClick(); // Ocultar menú
    redirectToChatbot(); // Redireccionar después de 2 segundos
  });
  