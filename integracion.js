cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

// PARTE CUENTAS

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

mostrarCuentas=function(){
    let compTabla=document.getElementById("mostrarTabla");
    let tabla="<table border='1'>";
  tabla+="<tr><th>NUMERO CUENTA</th>"+
            "<th>NOMBRE</th>"+
            "<th>SALDO</th></tr>";
            for(let i=0;i<cuentas.length;i++)
            {
                let cuenta=cuentas[i];
                tabla+="<tr><td>"+cuenta.numeroCuenta+"</td>"+
                          "<td>"+cuenta.nombre+" "+cuenta.apellido+"</td>"+
                          "<td>"+cuenta.saldo+"</td>"+
                       "</tr>";
            }
    tabla+="</table>";  
    compTabla.innerHTML=tabla;
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let cuentaEncontrada=null;
    for(let i=0;i<cuentas.length;i++)
    {
        let cuenta=cuentas[i];
        if(cuenta.numeroCuenta==numeroCuenta)
        {
            cuentaEncontrada=cuenta;
            break;
        }
    }
    return cuentaEncontrada;

}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    let cuentaExistente=buscarCuenta(cuenta.numeroCuenta);
    if(cuentaExistente==null)
    {
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    }
    else
    {
        alert("CUENTA EXISTENTE");
        return;
    }
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){
    let numeroCuenta=recuperarTexto("txtNumeroCuenta");
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let saldo=0.0;
    let cuentaNueva=[];
    cuentaNueva.numeroCuenta=numeroCuenta;
    cuentaNueva.cedula=cedula;
    cuentaNueva.nombre=nombre;
    cuentaNueva.apellido=apellido;
    cuentaNueva.saldo=saldo;
    agregarCuenta(cuentaNueva);
    mostrarCuentas();
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
}

// PARTE MOVIMIENTOS 

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

// PARTE TRANSACCIONES


cargarTransacciones=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
/*buscarCuenta=function(numeroCuenta){
    let cuentaEncontrada = null;
    let Numcuenta;
    for (let i = 0; i < cuentas.length; i++) {
        Numcuenta = cuentas[i];
        if (Numcuenta.numeroCuenta == numeroCuenta) {
            cuentaEncontrada = Numcuenta;
            break;
        }else{
            cuentaEncontrada = null;
        }
    }
    return cuentaEncontrada;

}*/

ejecutarBusqueda=function(){
    let valor;
    let cuentaHallada;
    valor = recuperarTexto("txtCuenta");
    cuentaHallada = buscarCuenta(valor);
    if (cuentaHallada === null) {
        mostrarTexto("lblError", "CUENTA INVALIDA");
        mostrarTextoEnCaja("txtCuenta","");
        mostrarTexto("lblCedulaT", "");
        mostrarTexto("lblNombreT", "");
        mostrarTexto("lblApellidoT", "");
        mostrarTexto("lblNumeroCuentaT", "");
        mostrarTexto("lblSaldoT", "");
    }else{
        mostrarTexto("lblError","");
        mostrarTexto("lblNumeroCuentaT", cuentaHallada.numeroCuenta);
        mostrarTexto("lblCedulaT", cuentaHallada.cedula);
        mostrarTexto("lblNombreT", cuentaHallada.nombre);
        mostrarTexto("lblApellidoT", cuentaHallada.apellido);

        mostrarTexto("lblSaldoT", cuentaHallada.saldo);
    }
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    cuentaAfectada = buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo+=monto;
    return cuentaAfectada.saldo;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos

ejecutarDeposito=function(){
    let numCuenta;
    let montoIngresado;
    let nuevoSaldo;
    numCuenta = recuperarTexto("txtCuenta");
    //Toma el numero de cuenta ingresado en la caja de texto
    montoIngresado = recuperarFloat("txtMonto");
    //Toma el monto ingresado en la caja de texto
    nuevoSaldo = depositar(numCuenta,montoIngresado);
    //invoca a depositar
    alert("TRANSACCION EXITOSA");
    //Muestra un mensaje TRANSACCION EXITOSA
    movimiento={};
    movimiento.numeroCuenta=numCuenta;
    movimiento.monto=montoIngresado;
    movimiento.tipo="C";
    movimientos.push(movimiento);
    mostrarTexto("lblSaldoT",nuevoSaldo);
    //Muestra en pantalla el nuevo saldo de la cuenta


}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    cuentaAfectada = buscarCuenta(numeroCuenta);
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    if (cuentaAfectada.saldo < monto){
        alert("SALDO INSUFICIENTE");
    }else if(cuentaAfectada.saldo>=monto){
        cuentaAfectada.saldo -= monto;
        alert("TRANSACCION EXITOSA");
        movimiento={};
        movimiento.numeroCuenta=numeroCuenta;
        movimiento.monto=monto;
        movimiento.tipo="D";
        movimientos.push(movimiento);
    }
    return cuentaAfectada.saldo;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

ejecutarRetirar=function(){
    let numCuenta;
    let montoIngresado;
    let nuevoSaldo;
    numCuenta = recuperarTexto("txtCuenta");
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    montoIngresado = recuperarFloat("txtMonto");
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    nuevoSaldo = retirar(numCuenta,montoIngresado);
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    mostrarTexto("lblSaldoT",nuevoSaldo);
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}

/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


