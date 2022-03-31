

function CalculadoraNPI() {
      this.arr = []
     
}
/// pushie [num1+num2 = la suma de esos dos] 
//el num1 es el penultimo en el orden de la suma 
// y num2 es el ultimo en el orden de la suma 

CalculadoraNPI.prototype.agregar = function (num) {
    this.arr.push(num)
 
CalculadoraNPI.prototype.sumar = function () {

    let num2 = this.arr.pop() 
    let num1 = this.arr.pop() 
    this.arr.push(num1+num2)
    if (isNaN(num2) || isNaN(num1)) {
        throw 'La calculadoraNPI necesita por lo menos 2 números';
    }
}
CalculadoraNPI.prototype.restar = function () {

    let num2 = this.arr.pop() 
    let num1 = this.arr.pop() 
    this.arr.push(num1-num2)
    if (isNaN(num2) || isNaN(num1)) {
        throw 'La calculadoraNPI necesita por lo menos 2 números';
    }


}

CalculadoraNPI.prototype.dividir = function () {

    let num2 = this.arr.pop() 
    let num1 = this.arr.pop() 
    this.arr.push(num1/num2)
    if (isNaN(num2) || isNaN(num1)) {
        throw 'La calculadoraNPI necesita por lo menos 2 números';
    }


}


CalculadoraNPI.prototype.valor = function () {
    return this.arr[this.arr.length-1]

}



CalculadoraNPI.prototype.multiplicar = function () {

    let num2 = this.arr.pop() 
    let num1 = this.arr.pop() 
    this.arr.push(num2*num1)
    
    if (isNaN(num2) || isNaN(num1)) {
        throw 'La calculadoraNPI necesita por lo menos 2 números';
    }

}}