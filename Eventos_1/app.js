/**
 * @author Isaías FL.
 * @description Escuchador de eventos en el DOM
 */

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

// escuchamos los eventos

boton.addEventListener("click", (e) => {
  // e --> hace referencia al evento que genera la acción.
  // e.target --> elemento html que ha generado la acción.
  console.log(`Has pulsado ${e.target}`);
});
boton.addEventListener("dblclick", (e) => {
  caja.classList.replace("red", "blue");
});
caja.addEventListener("mouseenter", (e) => {
  // Método para cambiar o reemplazar una clase de CSS classList.replace(original,nuevo)
  caja.classList.replace("red", "blue");
});

caja.addEventListener("mouseleave", (e) => {
  // Método para cambiar o reemplazar una clase de CSS classList.replace(original,nuevo)
  caja.classList.replace("blue", "red");
});

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyS") {
    caja.classList.add("verde");
    caja.classList.remove("red");
  }
});

/*
Eventos del ratón
- mouseenter -> cuando entramos en la zona que tiene el evento.
- mouseleave -> cuando salimos de la zona que tiene el evento
- mousedown -> cuando pulsamos el botón izquiedo del ratón.
- mouseup -> cuando soltamos el botón izquierdo del ratón.
- mousemove -> cuando movemos el ratón.

Eventos del teclado
- keydown -> Pulso una tecla.
- keup -> Soltamos una tecla.
- Keypress -> Cuando pulsamos una tecla pero no la soltamos.
*/
