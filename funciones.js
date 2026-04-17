//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos){
     let disponible = ingresos - egresos;
    if(disponible < 0){
     disponible = 0;
    }
    return disponible;
}

function calcularCapacidadPago(montoDisponicle){
    let capacidadPago = montoDisponicle * 0.5;
    return capacidadPago;
}

function texto(id,vari){
    const elemento = document.getElementById(id);
    elemento.innerText = vari.toFixed(2);
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes = plazoAnios * monto * (tasa/100);
    return interes;
}

function calcularTotalPagar(monto, interes){
    let contribucionSOLCA = 100;
    let totalPagar = monto + interes + contribucionSOLCA;
    return totalPagar;
}

function calcularCuotaMensual(total, plazoAnios){
    let plazoMeses = plazoAnios * 12;
    let cuotaMensual = total/plazoMeses;
    return cuotaMensual;
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if(capacidadPago > cuotaMensual){
        return true;
    }else{
        return false;
    }
}

function mostrarResultado(idComponente, texto){
    let estadoCredito = document.getElementById(idComponente);
    estadoCredito.textContent = texto;
}

