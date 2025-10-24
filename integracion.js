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




/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


