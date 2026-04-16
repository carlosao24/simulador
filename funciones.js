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