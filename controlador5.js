//codigo EPM
//caminos (1,2,3,4,5,6)


//entradas
let valorDeuda=600000;
let identificacionCliente="1017170603";
let estratoSocioeconomico=1;
let valorDescuento=0;

//Proceso
//comparar el estrato y a partir de esta datoc alcular la deducción a la cuenta

if(estratoSocioeconomico==1){

    valorDescuento=valorDeuda*0.4;
    valorDeuda=valorDeuda-valorDescuento; 

    console.log("Tiene descuento del 40%");


}else if(estratoSocioeconomico==2){

    valorDescuento=valorDeuda*0.3;
    valorDeuda=valorDeuda-valorDescuento; 
    
    console.log("Tiene descuento del 30%");

}else if(estratoSocioeconomico==3){

    valorDescuento=valorDeuda*0.2;
    valorDeuda=valorDeuda-valorDescuento; 
    
    console.log("Tiene descuento del 20%");

}else if(estratoSocioeconomico==4 || estratoSocioeconomico==5 || estratoSocioeconomico==6){

    console.log("No tienes derecho a descuento");

}else{
    console.log("Revisar los datos ingresados, su estrato no es valido");

}

console.log(`El valor de su deuda queda en: ${valorDeuda}`);

