// concatenar = function(a,b) {
// let result = ""
// for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i]

// }
// return result
// }

concatenar = (...arg) => arg.join("");

function invocarFunciones() {
  let invocados = "";
  for (let i = 0; i < arguments.length; i++) {
    invocados += arguments[i]();
  }
  return invocados;
}

creadorDeIncrementos = (num) => {
  let Valor_num = num;
  return (num_args) => {
    return Valor_num + num_args;
  };
};

invocacionUnica = (fn) => {
  fn();
  return function () {};
};

function objetoConClousure() {
  let num = 0;
  obj = {
    incremento: () => (num += 1),
    incrementoPor10: () => (num += 10),
    pedirValor: () => num,
    cambiarValor: (a) => (num = a),
  };
  return obj;
}


ListaDeFuncionesInvitados = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(function (codigo) {
      return 404 == codigo ? arr[i] : "código secreto: invalido";
    });
  }

  return newArr;
};

let funcionesInvitados = ListaDeFuncionesInvitados(
  arregloInvitados,
  codigoSecreto
);

function armarListaDeInvitados(lista,codigoSecreto) {

  let arr =[]
  for (let i = 0; i < lista.length; i++) {
    arr.push(lista[i](codigoSecreto)) 
    
  }
  

return arr
  }



// function ListaDeFuncionesInvitados(arr) {

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(function (codigo) {
//       if (404 == codigo) {
//        return arr[i];
//       }else {
//         return "código secreto: invalido";
//       }
//     });
//   }

//   return newArr;
// }



