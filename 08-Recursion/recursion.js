function factorialIterativo(n) {
    let resultado = 1
   for (let i = 2; i <= n; i++) {
    resultado*= i
       
   }
   return resultado
}


function factorial(n) {
    if(n < 1) return 1
     return n*factorial(n-1)
}


function fib(n) {
    if(n <= 1) return 1
    return  n= fib(n-1) + fib(n-2)
}  
//sin comentarios 


// function factores(n,newArr = []) {
  
//     if(n <= 1) return arr

//     else if(n % n == 0){
//         newArr.push(n)
//     }
//     newArr.push(factores(divisor))
    
//     return newArr
// }




    function factores(n ,arr=[]){
    
   
        if(n <= 1) return arr
        
        if(n % 2 === 0 ){
           
          arr.push(2)
        }
        else if(n%3 === 0){
          arr.push(3)
        }
       
        else if(n%n === 0){
            arr.push(n)
        }
        
        
        n/= arr[arr.length-1]
        return factores(n, arr)
        }