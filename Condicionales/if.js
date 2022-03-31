let nota1,nota2,nota3;
let dato1,dato2,dato3, media;



dato1= window.prompt("Ingresa Primer calificacion","");
nota1=parseInt(dato1);

dato2= window.prompt("Ingresa Segunda calificacion","0");
nota2=parseInt(dato2);

dato3= window.prompt("Ingresa Tercer calificacion","0");
nota3=parseInt(dato3);

media=(nota1+nota1+nota3)/3;


if(media < 7)
{
resultat= "USTED TIENE QUE PRESENTAR SEGUNDA VUELTA";
}
else{
    resultat= "FELICIDADES HAS PASADO LA MATERIA";
}
 document.write(`<h3>RESULTADO:  ${resultat} </h3>`);