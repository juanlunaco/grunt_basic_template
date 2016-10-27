$(document).ready(function(){
  setTimeout(function(numero){
    console.log("Hola");
  }, 2000);

  // var testInterval = function() {
  //   counter ++;
  //   console.log(counter);
  //
  //   if (counter == 10){
  //       clearInterval(test);
  //   }
  // };
  // var test = setInterval(testInterval, 2000), counter = 0;
  // test();
});

// Object Constructor
function Programas (nombre, duracion, calificacion) {
  this.name = nombre;
  this.duracion = duracion;
  this.calificacion = calificacion;
}
var Primero = new Programas("Diseño Gráfico", 8, "A+");

// Call and Apply
var persona = {
  name : "Juan",
  age : 22
};
function presentacion (nuevo){
  console.log("Hola, " + nuevo + "," + " mi nombre es " + this.name + ", tengo " + this.age + " años.");
}
presentacion.call(persona, "Carlos");

// Date Object
var fecha = new Date();
console.log(fecha);
