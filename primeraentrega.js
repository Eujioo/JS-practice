// let operacion = prompt("Ingrese el tipo de operacion (+ , - , * , /)");
// let numUno = prompt("ingrese el primer numero")
// numUno = parseInt(numUno)
// let numDos = prompt ("ingrese el segundo numero")
// numDos= parseInt(numDos)
// let numRep = prompt("ingrese el numero de veces que desea repetir la operacion")
// let res = numUno

// function suma(res, numDos) {
//   res = res + numDos;
//   return res;
// }
// function resta(res, numDos) {
//   res = res - numDos;
//   return res;
// }
// function division(res, numDos) {
//   res = res / numDos;
//   return res;
// }
// function multiplicacion(res, numDos) {
//   res = res * numDos;
//   return res;
// }


// switch (operacion) {
//   case "+":
    
//     for(let i=0; i<numRep; i++){
//         res=suma(res,numDos)
//     }
//     alert("el resultado de sumarle "+numDos+" a "+ numUno + " un total de "+ numRep + " veces es: "+res)
//     break;

//   case "-":
    
//     for(let i=0; i<numRep; i++){
//         res=resta(res,numDos)
//     }
//     alert("el resultado de restarle "+numDos+" a "+ numUno + " un total de "+ numRep + " veces es: "+res)
//     break;

//   case "*":

//     for(let i=0; i<numRep; i++){
//       res=multiplicacion(res,numDos)
//   }
//   alert("el resultado de multiplicar "+numDos+" con "+ numUno + " un total de "+ numRep + " veces es: "+res)
//     break;

//   case "/":

//     if (numDos == 0){
//       alert("no se puede dividir por 0")
//       break;

//     }
//     else{
      
//       for(let i=0; i<numRep; i++){
//       res=division(res,numDos)
//       }

//     }
//     alert("el resultado de dividir "+numUno+" por "+ numDos + " un total de "+ numRep + " veces es: "+res)
//     break;

//   default:
//     alert("ingrese una operacion valida")
//     break;

// }