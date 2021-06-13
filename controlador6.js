//PROGRAMA QUE SALUDE

//Entrada
let nombre="catalina perez";
let nombre2="Raul Perez";
let nombre3="Otoniel Perez";

//PROCESO
function saludar(nombreEmpleado){ 

    let mensaje="Buenos dias "+nombreEmpleado;
    return(mensaje);

}
//¿Como se usa? llamar la función
console.log(saludar("Juan")); // Buenos dias Juan
console.log(saludar(nombre));

