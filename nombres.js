/* // 1. Entrada del programa Input (I)
nombres = ["Johanna", "Felipe","Valentina", "AlejoZapata", "Juanky", "Sebastián", "Daniel"];
//----------------------------------
// 2. Definición función
function contar(nombres) {
  for( let i = 0; i<nombres.length; i++ ){
    if(nombres[nombres.length-1] === nombres[i]){
      document.write(nombres[i] + ".");
    }
    else{
      document.write(nombres[i] + ", ");
    }
  }
}
//----------------------------------
// 3. Ejecución de la función:
var result = contar(nombres); */