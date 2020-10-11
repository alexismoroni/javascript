let cantidadVentas = prompt("Ingrese la cantidad de ventas");
for(let i = 0; i < cantidadVentas; i++) {
    let temp    = i;
        if(i == 3 || i == 4) {
            continue
        }
    alert("Esta es la venta número " + (++temp));
    let montoIngresado = prompt("Ingrese el monto a pagar")
    let iva = montoIngresado*0.215;
    let importeTotal = montoIngresado + iva;
    alert("Debe abonar $" + iva + " en concepto de IVA.");
    confirm("¿Quiere ver el resumen?");
        if(confirm) {
            alert("Importe sin IVA: $" + montoIngresado + "\nMonto IVA: $" + iva + "\nImporte TOTAL: $" + importeTotal);            
        }
        
    let salir = confirm("¿queres salir del bucle?");
    if(salir)
         break;
 }