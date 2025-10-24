cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
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

}

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