function crearCalculadora() {
    let num = 0
    const newObj= {
    valor :() => num, 
    sumar :(sum)=>num += sum,
    restar:(res)=> num -= res,
    reset: () => num = 0
        
    }

return newObj
}

function crearCalculadora() {
    let num = 0
    const newObj= {
    valor : function(){return num}, 
    sumar : (sum) =>num += sum,
    restar: function (res) {
        return num -= res
        
    },
    reset: function() {
        return num = 0
        
    }
  
}
return newObj
} 





