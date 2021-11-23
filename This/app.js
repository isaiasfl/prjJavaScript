/**
 * @author Isaías FL.
 * @description Ámbitos del uso del this
 */
console.log(this);
console.log(window);
this.nombre = "contexto Global";
console.log(this.nombre);

function saludo() {
  console.log(this.nombre);
}
saludo();

const objeto = {
  nombre: "contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};
objeto.imprimir();

const objeto2 = {
  nombre: "contexto Objeto2",
  imprimir: () => {
    console.log(this.nombre);
  },
  dato: {
    nombre: "contexto dato",
    imprimir: () => {
      console.log(this.nombre);
    },
  },
};
objeto2.imprimir();
objeto2.dato.imprimir();

/*las funciones flecha el problema 
que acarrean es que heredan el contexto
donde han sido creadas.

*/
