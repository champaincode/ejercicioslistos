// class Mamifero{
//     constructor(nombre){
//         this.nombre = nombre

//     }
// }
// Mamifero[descendencia] = []


function Mamifero(nombre) {
   this.nombre = nombre
   this.descendencia = []

  
}
Mamifero.prototype.saludar = function () {
    return `Hola, mi nombre es ${this.nombre}`
}
Mamifero.prototype.nuevoHijo = function (hijo) {
    hijo = new Mamifero(`${this.nombre} Jr`)
    this.descendencia.push(hijo);
    return hijo;

}

function Gato(nombre,color,descendencia,) {
    Mamifero.call(this,nombre,descendencia)
     //con mamifero.call llamo a la función contructora mamifero para usarla 
    // en la función gato ("no olvidarse pasarlos por parametro")
    this.color = color
   // agregar la propiedad color a la funcion constructora gato 
    this.nuevoHijo = function (OtherColor) {
     batman = new Gato(`${this.nombre} Jr`, OtherColor)
     this.descendencia.push(batman)
     return batman
    }   
    
 }
 Gato.prototype = Object.create(Mamifero.prototype)
 
 Gato.prototype.constructor = Gato


