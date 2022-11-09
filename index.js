/* // E-COMMERCE, VENTA DE PRODUCTOS DE DECORACION DE ESTUDIO CREA (Estudio de Arquitectura, Diseño de Jardines y venta de decoracion.)

//OBJETOS y ARRAYS
class Productos {
    constructor (id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Clientes {
    constructor (nombre, apellido, telefono, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

class TarjetaCredito {
    constructor (titular, numero, fechaVencimiento, codigo){
        this.titular = titular;
        this.numero = numero;
        this.fechaVencimiento = fechaVencimiento;
        this.codigo = codigo;
    }
}

const productosDisponibles = []

let mate = new Productos (1, 'Mate', 1200)
productosDisponibles.push (mate)
let almohadones = new Productos (2, 'Almohadones', 1000)
productosDisponibles.push (almohadones)
let canastos = new Productos (3, 'Canastos', 1500)
productosDisponibles.push (canastos)
let plantas = new Productos (4, 'Plantas', 1800)
productosDisponibles.push (plantas)



//BIENVENIDA AL USUARIO
alert ('-ESTUDIO CREA - Arquitectura, Diseño, Decoración & más.')
alert (`Bienvenidx a la sección DECORACION! Encontraras muchas cosas útiles y modernas para tu hogar. Comencemos...`)

//COMPRA
function sumaProductos (total, monto){
    return resultado = total + monto
 }
 
 let productos = parseInt(prompt('Que producto deseas comprar? (Indique el número correspondiente a la opción elegida, 1 - 2 - 3 - 4 ): 1. Mates - 2. Almohadones - 3. Canastos - 4.Plantas'))
 let totalCompra = 0
 let seguirComprando = true 
 let decision
 
 while (seguirComprando === true){
const seleccionCliente = productosDisponibles.find (seleccion => seleccion.id === productos)
if (seleccionCliente){
    totalCompra = sumaProductos (totalCompra, seleccionCliente.precio)
} else {
    productos = parseInt(prompt('Selecciona un producto disponible en nuestro catalogo (Indica el número correspondiente a la opción elegida, 1 - 2 - 3 - 4 ): 1.Mates - 2.Almohadones - 3.Canastos - 4.Plantas'))
     continue
}

decision = prompt('Deseas comprar algo mas? Si - No')
 if (decision === 'si' || decision === 'Si' || decision === 'SI'){
    productos = parseInt(prompt('Que producto deseas comprar? (Indica el número correspondiente a la opción elegida, 1 - 2 - 3 - 4 ): 1.Mates - 2.Almohadones - 3.Canastos - 4.Plantas'))
 } else {
    seguirComprando = false
 }
}

alert (`El total de tu compra es de $${totalCompra}`)

// DESCUENTO 
function descuento (total, resta){
    let resultadoDes = total - resta
    return resultadoDes
}

let precioFinal 

if (totalCompra < 3500){
    precioFinal = totalCompra
} else if (totalCompra > 3500){
    precioFinal = descuento (totalCompra, 500)
    alert (`Con el descuento aplicado, el total de tu compra es de $${precioFinal}`)
} 

//PAGO
alert ('Para realizar el pago ingresa los siguientes datos:')
let nombreCliente = prompt('Ingresa tu nombre:')
let apellidoCliente = prompt ('Ingresa tu apellido:')
let telefonoCliente = prompt ('Ingresa tu telefono:')
let direccionCliente = prompt ('Ingresa la direccion para el envio:')
const datosClientes = new Clientes (nombreCliente, apellidoCliente, telefonoCliente, direccionCliente)

let pago = parseInt(prompt('Como deseas realizar el pago? (Indica el número correspondiente a la opción elegida, 1 - 2 - 3) 1.Pago único con transferencia bancaria - 2. 3 cuotas sin interes con crédito - 3. 6 cuotas sin interes con crédito')) 

let nombreTitular
let numeroTarjeta
let vencimientoTarjeta
let codigoSeguridad 

function tresCuotas (total, tres){
    resultado = total/tres
}
function seisCuotas (total, seis){
    resultado = total/seis
}

if (pago === 1){
    alert (`Datos de la compra:
    ${nombreCliente} ${apellidoCliente}
    ${telefonoCliente}
    Direccion de envio: ${direccionCliente}
    Pago único de $${precioFinal}. Recibiras un mensaje a tu telefono con los datos para realizar la transferencia. Envia el comprobante a comprobantes@estudiocrea.com`)
} else if (pago === 2){
    tresCuotas (precioFinal, 3)
    alert (`Datos de la compra:
    ${nombreCliente} ${apellidoCliente}
    ${telefonoCliente}
    Direccion de envio: ${direccionCliente}
    Pago en tres cuotas de $${resultado} cada una.`)
    alert ('A continuacion, solicitaremos los datos de tu tarjeta de credito para realizar el pago:')
    nombreTitular = prompt ('Ingrese el nombre y apellido del titular:')
    numeroTarjeta = parseInt(prompt('Ingrese el numero de la tarjeta'))
    vencimientoTarjeta = parseInt(prompt('Ingrese la fecha de vencimiento'))
    codigoSeguridad = parseInt(prompt('Ingrese el codigo de seguridad'))
    alert ('Datos ingresados correctamente. Recibiras el comprobante y el numero de seguimiento de tu envio a tu numero de telefono.')
} else if (pago === 3){
    seisCuotas (precioFinal, 6)
    alert (`Datos de la compra:
    ${nombreCliente} ${apellidoCliente}
    ${telefonoCliente}
    Direccion de envio: ${direccionCliente}
    Pago en seis cuotas de $${resultado} cada una.`)
    alert ('A continuacion, solicitaremos los datos de tu tarjeta de credito para realizar el pago:')
    nombreTitular = prompt ('Ingrese el nombre y apellido del titular:')
    numeroTarjeta = parseInt(prompt('Ingrese el numero de la tarjeta'))
    vencimientoTarjeta = parseInt(prompt('Ingrese la fecha de vencimiento'))
    codigoSeguridad = parseInt(prompt('Ingrese el codigo de seguridad'))
    alert ('Datos ingresados correctamente. Recibiras el comprobante y el numero de seguimiento de tu envio a tu numero de telefono.')
} 

const tarjetaDeCredito = new TarjetaCredito (nombreTitular, numeroTarjeta, vencimientoTarjeta, codigoSeguridad)
alert (`Agradecemos tu compra y esperamos volver a verte pronto :) - ESTUDIO CREA -`) 

 */