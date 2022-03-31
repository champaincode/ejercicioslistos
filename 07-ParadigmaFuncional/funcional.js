function duplicar(a) {
    return  a* 2
 }

function map(arr,duplicar) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(duplicar(arr[i]))
       
     }
     return newArr
}

function filter(arr,fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
     fn(arr[i]) === true ? newArr.push(arr[i]) : ''

    }
    return newArr
}

function contains(arr,num) {
    if(Array.isArray(arr) == true){
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === num)  {
                return true
            }
           
    } return false
   
    }
    for (const key in arr) {
       if (arr[key] === num) {
           return true
       }
      
   }

}
function cuentaPalabras(str) {
        return str.split(" ").length
}

function reduce(arr,valor,fn) {
    
    for (let i = 0; i < arr.length; i++) {
        valor=fn(valor,arr[i])
        
    }
    return valor
}
function cuentaPalabrasReduce(valor,arr) {
    return valor +=cuentaPalabras(arr)
}

function suma(arr) {
    return reduce(arr,0,function(a,b) { return a + b})
}


// function reduce(arr,valor,fn) {
    
//     for (let i = 0; i < arr.length; i++) {
//         valor=fn(valor,arr[i])
        
//     }
//     return valor
// }
//PREGUNTAR SOBRE EVERY Y ANY 
function every(arr,fn) {   //(valor, arr[i])
    return reduce(arr,true,(a,b) =>{
        return fn(b) == a && true 
    } )
}

function any(arr,fn) {
    return reduce(arr,false,(a,b) =>{
        return fn(b) !== a || false 
    } )
}


