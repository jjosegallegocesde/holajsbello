//CONDICIONES

//IF(SI?)

//NECESITO QUE JS ME AYUDE A IDENTIFICAR SI UNA PERSONA ES MAYOR DE EDAD EN COLOMBIA

//Entradas
let nombrePersona="EPA COLOMBIA"; //VARIABLES GLOBALES
let edadPersona=5;
let jugador="Juan"; //GLOBAL

//Proceso
if(edadPersona>=18){

    jugador="JAMES"; //VARIABLE LOCAL

    //SALIDA (camino verdad porque se cumplió la condicion)
    console.log(`señor/a ${nombrePersona} usted es mayor de edad`);
    //console.log(jugador);

}else{

    jugador="Falcao";
    //SALIDA (camino falso porque NO se cumplió la condicion)
    console.log(`señor/a ${nombrePersona} usted es menor de edad`);
    //console.log(jugador);
}

console.log(jugador);




