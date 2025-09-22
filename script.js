// Capturar el formulario y mostrar un mensaje
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  document.getElementById(
    "respuesta"
  ).innerText = `Gracias ${nombre}, hemos recibido tu mensaje. Nos pondremos en contacto al correo ${email}.`;

  // Reiniciar el formulario
  this.reset();
});
