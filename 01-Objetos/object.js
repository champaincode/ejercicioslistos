
    function setPropsOnObj(obj) {
      obj.p = 5
      obj["plataforma"] = 5
      obj.proximo = (e) => e + 1
      obj.la = {
        clave : {
        secreta: {
        es: 404
            }
            
          }
        }
        obj.la.clave.secreta.es
        return obj
      }
        
      function setPropsOnArr(array) {
         array["hola"] = () => 'Hola!'
          
        array['river'] = 'plate'
        array[0] = 5
        array['doble'] = (num) => num *2
      }


function setPropsOnFunc(fn) {
  
  
  functionObject = () => 'Soy una función con propiedades!';
  const año = new Date()
  fn.year = año.getFullYear()
  
  fn.mitad = (numero) => numero  / 2
  fn.prototype.helloWorld = () => 'Hello World';
  
  }

 
  

     
      
