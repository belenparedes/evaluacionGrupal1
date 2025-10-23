cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
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
