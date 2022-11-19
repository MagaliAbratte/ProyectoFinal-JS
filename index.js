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



const tarjetasProductos = document.getElementById ('tarjetasProductos')

class ProductosCrea {
    constructor (id, nombre, precio, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const productos = []

let mates1 = new ProductosCrea (1, 'Mates', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y flores celestes.');
productos.push (mates1)
let mates2 = new ProductosCrea (2, 'Mates', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y flores rosadas.');
productos.push (mates2)
let mates3 = new ProductosCrea (3, 'Mates', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y color liso.');
productos.push (mates3)
let almohadones1 = new ProductosCrea (4, 'Almohadones', 1500, 'Almohadon 50cm x 40cm, rayado con apliques sublimados, varios colores.');
productos.push (almohadones1)
let almohadones2 = new ProductosCrea (5, 'Almohadones', 1500, 'Almohadon 50cm x 40cm, rayado con bordes con apliques de broderi, varios colores.');
productos.push (almohadones2)
let almohadones3 = new ProductosCrea (6, 'Almohadones', 1500, 'Almohadon 50cm x 40cm, con apliques, bordados y flecos de broderi.');
productos.push (almohadones3)
let canastos1 = new ProductosCrea (7, 'Canastos', 1600, 'Canastos de produccion artesanal, armados con paja verde, diferentes tamaños.');
productos.push (canastos1)
let canastos2 = new ProductosCrea (8, 'Canastos', 1600, 'Canastos de produccion artesanal, armados con paja trenzada, diferentes tamaños.');
productos.push (canastos2)
let canastos3 = new ProductosCrea (9, 'Canastos', 1600, 'Canastos de produccion artesanal, armados con paja de dos colores, diferentes tamaños.');
productos.push (canastos3)
let plantas1 = new ProductosCrea (10, 'Plantas', 1800, 'Planta monstera de tamaño mediano o grande. Se entrega lista para transplantar.');
productos.push (plantas1)
let plantas2 = new ProductosCrea (11, 'Plantas', 1800, 'Planta schefflera de tamaño mediano o grande. Se entrega lista para transplantar.');
productos.push (plantas2)
let plantas3 = new ProductosCrea (12, 'Plantas', 1800, 'Planta croton de tamaño mediano o grande. Se entrega lista para transplantar.');
productos.push (plantas3) 


let carrito = []

productos.forEach (product =>{
    let contenido = document.createElement ("div");
    contenido.className = 'tarjetaProducto'
    contenido.innerHTML = `
    <div class="datosTarjeta">
    <p class="card-text-id">${product.id}</p>
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text-precio">$${product.precio}</p>
    <p class="card-text-descripcion">${product.descripcion}</p>
    </div>
    `
    tarjetasProductos.append (contenido)
    
    let botonCompra = document.createElement ("button");
    botonCompra.className = 'boton'
    botonCompra.innerText = 'Añadir'
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener ('click', ()=>{
        carrito.push ({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
        })
    })
})

const iconoCarrito = document.getElementById ('iconoCarrito')
const carritoDeCompras = document.getElementById ('carritoDeCompras')

iconoCarrito.addEventListener('click', ()=> {
    carritoDeCompras.innerHTML = '';
    carritoDeCompras.style.display = 'flex'
    const carritoHeader = document.createElement ("div");
    carritoHeader.className = 'header-carrito';
    carritoHeader.innerHTML = `
    <h1 class="tituloCarrito"> Carrito de Compras</h1>
    `;
    
    carritoDeCompras.append (carritoHeader);
    
    const carritoBoton = document.createElement ("button");
    carritoBoton.innerText = 'Cerrar';
    carritoBoton.className = 'boton';

    carritoBoton.addEventListener ('click', ()=>{
        carritoDeCompras.style.display = 'none';
    })
    
    carritoHeader.append (carritoBoton)

    carrito.forEach ((product) =>{
        let contenidoCarrito = document.createElement ("div")
        contenidoCarrito.className = 'contenido-carrito'
        contenidoCarrito.innerHTML= `
        <h1>${product.nombre}</h1>
        <h2>${product.precio}</h2>
        `

        carritoDeCompras.append (contenidoCarrito);
    });

    const total = carrito.reduce ((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement ("button");
    totalCompra.className = 'footer-carrito'
    totalCompra.innerHTML = `Total a pagar $${total}`

    carritoDeCompras.append (totalCompra)

    totalCompra.addEventListener ('click', ()=>{
        let datosUsuario = document.createElement ('div')
        datosUsuario.className = 'datos-usuario'
        datosUsuario.innerHTML = `
        <h3 class= 'titulo'>Datos personales</h3>
        <input id=nombreUsuario class= 'inputDatos' placeholder='Ingresa tu nombre'></input>
        <input id=apellidoUsuario class= 'inputDatos' placeholder='Ingresa tu apellido'></input>
        <input id=telefonoUsuario  class= 'inputDatos' placeholder='Ingresa tu telefono'></input>
        <input id=correoUsuario class= 'inputDatos' placeholder='Ingresa tu correo electronico'></input>
        <input id=direccionUsuario class= 'inputDatos' placeholder='Ingresa tu direccion'></input>
        <button id=botonPagar class='boton'>Enviar</button>
        `
        carritoDeCompras.append (datosUsuario);

        let nombreUsuario = document.getElementById ('nombreUsuario');
        let apellidoUsuario = document.getElementById ('apellidoUsuario');
        let telefonoUsuario = document.getElementById ('telefonoUsuario');
        let direccionUsuario = document.getElementById ('direccionUsuario');
        let botonPagar = document.getElementById ('botonPagar')

        botonPagar.addEventListener ('click', ()=>{
            const datosIngresados = {
                nombre: nombreUsuario.value,
                apellido: apellidoUsuario.value,
                telefono: telefonoUsuario.value,
                correo: correoUsuario.value,
                direccion: direccionUsuario.value,
            }
            localStorage.setItem ('DatosCliente', JSON.stringify (datosIngresados))
          })

        let opcionPago = document.createElement ('div')
        opcionPago.className = 'divPago'
        opcionPago.innerHTML = `
            <select id="selectPago" class= 'select'>
                <option selected>Seleccione un metodo de pago</option>
                <option id= "opcion1">Pago unico con transferencia bancaria</option>
                <option id= "opcion2">3 cuotas sin interes con credito</option>
                <option id= "opcion3">6 cuotas sin interes con credito</option>
            </select>
           <button id= "seleccionPago" class= 'boton'>Seleccionar opcion</button>
           `
        carritoDeCompras.append (opcionPago);
        
        let selector = document.getElementById ('selectPago')
        let seleccionPago = document.getElementById ('seleccionPago')
        
        seleccionPago.addEventListener ('click', ()=>{
            const numeroSelector = selector.selectedIndex
            let opcionSeleccionada = numeroSelector
            
            function opcionTres (monto, seis){
                resultado = monto/seis
            }

            function opcionSeis (monto, seis){
                resultado = monto/seis
            }

            
            if (opcionSeleccionada === 1){
                let pagoUnico = document.createElement ('div')
                pagoUnico.className = 'div-pagounico'
                pagoUnico.innerHTML = `
                <h3 class='titulo'>PAGO UNICO CON TRANSFERENCIA BANCARIA</h3>
                <p class= 'texto'>Informacion para realizar el pago: </p>
                <p class= 'texto'>CBU: 1111111111111111111 </p>
                <p class= 'texto'>TITULAR: Sofia Scolari </p>
                <p class= 'texto'>TIPO DE CUENTA: Caja de ahorro en pesos </p> 
                <p class= 'texto'>ALIAS: estudio.crea </p>

                <p class= 'texto'>Envia el comprobante de pago a estudiocrea@gmail.com. IMPORTANTE: Si no envias el comprobante en las 24 hs posteriores a la compra, la misma se da baja automaticamente.
                </p>
                <button id= botonFinal class='boton'>Finalizar compra</button>
                `
                opcionPago.append (pagoUnico);
                
                let finCompra = document.getElementById ('botonFinal')
                finCompra.className = 'boton'
                
                finCompra.addEventListener ('click', ()=>{
                    let divFinal = document.createElement ('div')
                    divFinal.className = 'div-final'
                    divFinal.innerHTML = `
                    <p class= 'texto'>¡Gracias por tu compra ${nombreUsuario.value}!</p>
                    <p class= 'texto'>Enviaremos tu pedido a ${direccionUsuario.value}.
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido.
                    Ante cualquier inconveniente, comunicate a 3563487569 o estudiocrea@gmail.com.
                    </p>
                    `
                carritoDeCompras.append (divFinal)
                })
                
            } else if (opcionSeleccionada === 2){
            opcionTres (total, 3)
            let tresCuotas = document.createElement ('div')
            tresCuotas.className = 'div-trescuotas'
            tresCuotas.innerHTML = `
            <h3 class= 'titulo'>Pago en tres cuotas con credito, de $${resultado} cada una.</h3>
            <p class= 'texto'>A continuacion, ingresa los datos de la tarjeta en el formulario</p>
            <input id= "nombreTarjeta"  class= 'inputDatos' placeholder="Nombre y apellido del titular"> </input>
            <input id= "numeroTarjeta" class= 'inputDatos' placeholder= "Numero de la tarjeta"> </input>
            <input id= "vencimientoTarjeta" class= 'inputDatos' placeholder = "Vencimiento"> </input>
            <input id= "codigoTarjeta" class= 'inputDatos' placeholder = "Codigo de seguridad"> </input>
            <button id= "botonTarjeta" class= 'boton'>Enviar datos</button>
            <button id= botonFinal class='boton'> Finalizar compra</button>
            `
            opcionPago.append (tresCuotas)

            let nombreTarjeta = document.getElementById ('nombreTarjeta')
            let numeroTarjeta = document.getElementById ('numeroTarjeta')
            let vencimiento = document.getElementById ('vencimientoTarjeta')
            let codigo = document.getElementById ('codigoTarjeta')
            let botonTarjeta = document.getElementById ('botonTarjeta')

            botonTarjeta.addEventListener ('click', ()=>{
                const datosTarjeta = {
                    nombre: nombreTarjeta.value,
                    numero: numeroTarjeta.value,
                    vencimiento: vencimiento.value,
                    codigo: codigo.value
                }
            })

            let finCompra = document.getElementById ('botonFinal')
                finCompra.className = 'boton'
                
                finCompra.addEventListener ('click', ()=>{
                    let divFinal = document.createElement ('div')
                    divFinal.className = 'div-final'
                    divFinal.innerHTML = `
                    <p class= 'texto'>¡Gracias por tu compra ${nombreUsuario.value}!</p>
                    <p class= 'texto'>Enviaremos tu pedido a ${direccionUsuario.value}
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido.
                    Ante cualquier inconveniente, comunicate a 3563487569 o estudiocrea@gmail.com.
                    </p>
                    `
                carritoDeCompras.append (divFinal)
                })

            } else if (opcionSeleccionada === 3){
                opcionSeis (total, 6)
                let seisCuotas = document.createElement ('div')
                seisCuotas.className = 'div-seiscuotas'
                seisCuotas.innerHTML = `
                <h3 class= 'titulo'>Pago en seis cuotas con credito, de $${resultado} cada una.</h3>
                <p class= 'texto'>A continuacion, ingresa los datos de la tarjeta en el formulario</p>
                <input id= "nombreTarjeta"  class= 'inputDatos' placeholder="Nombre y apellido del titular"> </input>
                <input id= "numeroTarjeta"  class= 'inputDatos' placeholder= "Numero de la tarjeta"> </input>
                <input id= "vencimientoTarjeta" class= 'inputDatos' placeholder = "Vencimiento"> </input>
                <input id= "codigoTarjeta"  class= 'inputDatos' placeholder = "Codigo de seguridad"> </input>
                <button id= "botonTarjeta" class= 'boton'>Enviar datos</button>
                <button id= botonFinal class= 'boton'> Finalizar compra</button>
                `
                opcionPago.append (seisCuotas)
    
                let nombreTarjeta = document.getElementById ('nombreTarjeta')
                let numeroTarjeta = document.getElementById ('numeroTarjeta')
                let vencimiento = document.getElementById ('vencimientoTarjeta')
                let codigo = document.getElementById ('codigoTarjeta')
                let botonTarjeta = document.getElementById ('botonTarjeta')
    
                botonTarjeta.addEventListener ('click', ()=>{
                    const datosTarjeta = {
                        nombre: nombreTarjeta.value,
                        numero: numeroTarjeta.value,
                        vencimiento: vencimiento.value,
                        codigo: codigo.value
                    }
                })

                let finCompra = document.getElementById ('botonFinal')
                finCompra.className = 'boton'
                
                finCompra.addEventListener ('click', ()=>{
                    let divFinal = document.createElement ('div')
                    divFinal.className = 'div-final'
                    divFinal.innerHTML = `
                    <p class= 'texto'>¡Gracias por tu compra ${nombreUsuario.value}!</p>
                    <p class= 'texto'>Enviaremos tu pedido a ${direccionUsuario.value}
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido.
                    Ante cualquier inconveniente, comunicate a 3563487569 o estudiocrea@gmail.com.
                    </p>
                    `
                carritoDeCompras.append (divFinal)
                })
            }
        })
    })      
})


