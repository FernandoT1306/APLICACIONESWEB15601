function enviar_datos() {
    let mes = document.fdatos.dato1.value;

    
    if(mes==1 || mes==3 || mes==5|| mes==7|| mes==8|| mes==10|| mes==12)
    {
        document.write(`Este mes tiene 31 dias.`);
    }
    else{
        if(mes==2)
        document.write(`Este mes tiene 28 dias.`);
        else
        document.write(`Este mes tiene 30 dias.`);
    }
}


