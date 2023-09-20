
//----------------------------------
// 1. Entrada del programa Input (I)
//----------------------------------
var items = [2, 3, 5, 7, 11, 13, 17]; // index es el cursor
console.log("en la posición 3 tenemos: " + items[0])
//----------------------------------
// 2. Definición función de búsqueda
//----------------------------------
// a la función de busqueda le vamos a pasar dos parametros: el array items y el elemento_a_buscar y el objetivo del algoritmo es encontrar en que posición está el elemento_a_buscar
function search(items, posicion_elemento) { 
  var contador = 0;
  var total_itemsArray = items.length;
  while (contador < total_itemsArray) {
    if (items[contador] == posicion_elemento) { 
      return items[contador];
    }
    posicion++; // sumar de a un
  }
  return null;
}
//-----------------------------------------------------------
// 3. Ejecución de la función: buscar un elemento en el array
//-----------------------------------------------------------
var resultado = search(items, 2);
console.log(resultado)
//----------------------------------
// 4. Salida del programa Output (O)
//----------------------------------
var resultadoHTML = document.createElement('p');

resultadoHTML.id = 'resultado'; // Asigna el ID que desees
if (resultado !== null) {
  resultadoHTML.textContent = 'El elemento que se encuentra en la posicion 2 es: ' + resultado + ' :)';
} else {
  resultadoHTML.textContent = 'Debes ingresar un numero entre 0 y 6 :(';
}
document.body.appendChild(resultadoHTML);

