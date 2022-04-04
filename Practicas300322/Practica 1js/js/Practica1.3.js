function enviar_datos() {
    let nota1 = document.fdatos.dato1.value;
    let nota2 = document.fdatos.dato2.value;
    let  resultado;
    d1 = parseInt(nota1);
    d2 = parseInt(nota2);


    if(d1>d2)
    {
    resultado= " el primero";
    }
    else{
     resultado= " el segundo";   
    }
     document.write(`<h3>El mayor es ${resultado}</h3>`);
    
}