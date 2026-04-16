//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);
    texto("spnDisponible", disponible);

    let capacidadPagoDis = calcularCapacidadPago(disponible);
    texto("spnCapacidadPago",capacidadPagoDis);

    let monto = parseInt(document.getElementById("txtMonto").value);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value);
    let plazoAnios = parseInt(document.getElementById("txtPlazo").value);

    let mostrarInteres = calcularInteresSimple(monto, tasa, plazoAnios);
    texto("spnInteresPagar", mostrarInteres);

    let totalPagar = calcularTotalPagar(monto,mostrarInteres);
    texto("spnTotalPrestamo",totalPagar);

    let cuotaMensual = calcularCuotaMensual(totalPagar,plazoAnios);
    texto("spnCuotaMensual",cuotaMensual);

    let estadoCredito = aprobarCredito(capacidadPagoDis,cuotaMensual);
    if( estadoCredito == true){
        mostrarResultado("spnEstadoCredito","CREDITO APROBADO");
    }else{
        mostrarResultado("spnEstadoCredito","CREDITO RECHAZADO");
    }
    
    
    

}