//FUNCION PARA CALCULAR LA DISTANCIA ENTRE 2 PUNTOS


function calcularDistancia(xinicial,yinicial,xfinal,yfinal){
    return(Math.sqrt(Math.pow((xfinal-xinicial),2)+Math.pow((yfinal-yinicial),2)));
}

console.log(calcularDistancia(0,0,70,-50));