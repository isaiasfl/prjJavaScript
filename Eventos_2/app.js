/**
 * @author Isaías FL.
 * @description Crear un efecto acordeón al pulsar sobre los botones.
 */

const eleAcordeon = document.getElementsByClassName("acordeon");

//console.log(eleAcordeon);

for (let elemento of eleAcordeon) {
  elemento.addEventListener("click", (e) => {
    elemento.classList.toggle("active");
    let panel = elemento.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  //elemento.classList.toggle(xxxxx) <-- cambia un elemento de una clase
}
