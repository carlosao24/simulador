//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function validarInput(input) {
    const errorContainer = document.getElementById('error-' + input.id);
    const valor = input.value.trim();
    let mensaje = "";

    // Regla 1: No debe estar vacío
    if (valor === "") {
        mensaje = "Este campo no puede estar vacío.";
    } 
    //Regla 2: Valor mayor de Cero
    else if(valor <= 0){
        mensaje = "Ingrese un numero válido";
    } 
    // Regla 3: Máximo 5 dígitos
    else if (valor.length > 5) {
        mensaje = "El máximo permitido son 5 dígitos.";
    }
    // Regla 4: Solo números
    else if (!/^\d+$/.test(valor)) {
        mensaje = "Solo se aceptan números.";
    }

    // Mostrar el mensaje en el contenedor correspondiente
    errorContainer.innerText = mensaje;
}

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

function reiniciar(){
    location.reload();
}