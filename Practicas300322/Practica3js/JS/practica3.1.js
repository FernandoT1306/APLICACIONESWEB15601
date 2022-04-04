let Marca,Modelo,Descuento=0;
 
Marca= prompt("Marca?","0");
Modelo=prompt(" Modelo?","0");


if((Marca == "Ford")&&(Modelo=="Fiesta"))
{
Descuento= 5;
}
if((Marca == "Ford")&&(Modelo=="Focus"))
{
Descuento= 10;
}


 document.write(`<h3>Su descuento es de ${Descuento} </h3>`);
