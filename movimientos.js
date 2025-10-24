movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]


cargarMovimiento=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}


buscar = function(){
    let cuenta = recuperarTexto("nroCuenta");
    filtrarMovimientos(cuenta);
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    let cuentaEncontrada = false;
    //Se barre el arreglo de movimientos
    for (let i=0;i<movimientos.length;i++){
        let objeto  = movimientos[i];
     //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
        if (objeto.numeroCuenta == numeroCuenta){
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
            movimientosCuenta.push(objeto);
            cuentaEncontrada = true;
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
        }
    }
    if (cuentaEncontrada == true){
        mostrarMovimientos(movimientosCuenta);
        mostrarTextoEnCaja ("nroCuenta","")
    } else {
        alert("No existe Movimientos asociadas a esta cuenta")
    }

    
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){

let tabla;

    let cmpTabla = document.getElementById("tablaMovimientos");
    let encabezado = "<tr><th>NUMERO CUENTA</th><th>MONTO</th><th>TIPO</th></tr>"
    tabla = `<table class="tabla-movimientos">` + encabezado;
        for(let i=0;i<misMovimientos.length;i++){
            let objeto = misMovimientos[i];

            tabla+= "<tr>"
            tabla+= "<td>" + objeto.numeroCuenta + "</td>"
            if(objeto.tipo == "D" ){
                tabla+= "<td>" + (objeto.monto * - 1).toFixed(2) + "</td>"
            } else {
                tabla+= "<td>" + (objeto.monto).toFixed(2) + "</td>"
            }
            tabla+= "<td>" + objeto.tipo + "</td>"
            tabla+="</tr>"
        }

    tabla += "</table>"
    cmpTabla.innerHTML = tabla;


    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
}