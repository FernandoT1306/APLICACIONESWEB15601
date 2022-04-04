function enviar_datos() {
    let marca = document.fdatos.dato1.value;
    let modelo = document.fdatos.dato2.value;
    let descuento = 0;
    if (marca == "Ford" && modelo == "Fiesta") {
    descuento = 5;
    }
    if (marca == "Ford" && modelo == "Focus") {
    descuento = 10;
    }
    document.writeln(`<h3>Su descuento es ${descuento}</h3>`);
    }
