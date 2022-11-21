//DOM, EVENTOS Y STORAGE PARA PROYECTO FINAL - ESTUDIO CREA

const tarjetasProductos = document.getElementById ('tarjetasProductos')

class ProductosCrea {
    constructor (id,nombre,img, precio, descripcion, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

const productos = []

let mates1 = new ProductosCrea (1,'MATE CELESTE','./assets/img/sliders/mate1.jpg', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y flores celestes.',1);
productos.push (mates1)
let mates2 = new ProductosCrea (2, 'MATE LISO','./assets/img/sliders/mates2.jpg', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y flores rosadas.',1);
productos.push (mates2)
let mates3 = new ProductosCrea (3, 'MATE ROSADO','./assets/img/sliders/mates3.jpg', 1200, 'Mate de ceramica moldeado a mano, con detalles en relieve y color liso.',1);
productos.push (mates3)
let almohadones1 = new ProductosCrea (4, 'ALMOHADON BORDADO','./assets/img/sliders/almohadon1.jpg', 1500, 'Almohadon 50cm x 40cm, rayado con apliques sublimados, varios colores.',1);
productos.push (almohadones1)
let almohadones2 = new ProductosCrea (5, 'ALMOHADON RAYADO','./assets/img/sliders/almohadon2.jpg', 1500, 'Almohadon 50cm x 40cm, rayado con bordes con apliques, varios colores.',1);
productos.push (almohadones2)
let almohadones3 = new ProductosCrea (6, 'ALMOHADON CON BORDE','./assets/img/sliders/almohadon3.jpg', 1500, 'Almohadon 50cm x 40cm, con apliques, bordados y flecos de broderi.',1);
productos.push (almohadones3)
let canastos1 = new ProductosCrea (7, 'CANASTO TEJIDO','./assets/img/sliders/canastos1.jpg', 1600, 'Canastos de produccion artesanal, armados con paja verde.',1);
productos.push (canastos1)
let canastos2 = new ProductosCrea (8, 'CANASTO BICOLOR','./assets/img/sliders/canastos2.jpg', 1600, 'Canastos de produccion artesanal, armados con paja trenzada.',1);
productos.push (canastos2)
let canastos3 = new ProductosCrea (9, 'CANASTO TRENZADO','./assets/img/sliders/canastos3.jpg', 1600, 'Canastos de produccion artesanal, armados con paja de dos colores.',1);
productos.push (canastos3)
let plantas1 = new ProductosCrea (10, ' PLANTA MONSTERA','./assets/img/sliders/monstera.jpg', 1800, 'Planta monstera de tamaño mediano o grande. Se entrega lista para transplantar.',1);
productos.push (plantas1)
let plantas2 = new ProductosCrea (11, 'PLANTA SCHEFFLERA','./assets/img/sliders/schefflera.jpg', 1800, 'Planta schefflera de tamaño mediano o grande. Se entrega lista para transplantar.',1);
productos.push (plantas2)
let plantas3 = new ProductosCrea (12, 'PLANTA CROTON','./assets/img/sliders/croton.jpg', 1800, 'Planta croton de tamaño mediano o grande. Se entrega lista para transplantar.',1);
productos.push (plantas3) 

let carrito = []

productos.forEach (product =>{
    let contenido = document.createElement ('div');
    contenido.className = 'tarjetaProducto'
    contenido.innerHTML = `
    <div class='datosTarjeta'>
    <p class='card-text-id'>${product.id}</p>
    <h5 class='card-title'>${product.nombre}</h5>
    <img src="${product.img}" class= "imagenesProductos">
    <p class='card-text-precio'>$${product.precio}</p>
    <p class='card-text-descripcion'>${product.descripcion}</p>
    </div>
    `
    tarjetasProductos.append (contenido);
    
    let botonCompra = document.createElement ('button');
    botonCompra.className = 'boton'
    botonCompra.innerText = 'Añadir'
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener ('click', ()=>{
        const repetido = carrito.some ((productoRepetido) => productoRepetido.id === product.id)

        if (repetido){
            carrito.map ((prod)=>{
                if (prod.id === product.id){
                    prod.cantidad++
                }
            })
        } else {
            carrito.push ({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
        }
        contadorCarrito()
    })
})

const iconoCarrito = document.getElementById ('iconoCarrito')
const carritoDeCompras = document.getElementById ('carritoDeCompras')
const contador = document.getElementById ('contador')

const contadorCarrito = ()=>{
    contador.style.display = 'block'
    contador.innerText = carrito.length
}

iconoCarrito.addEventListener('click', ()=> { 
    carritoDeCompras.innerHTML = ''
    carritoDeCompras.style.display = 'flex'
    const carritoHeader = document.createElement ('div')
    carritoHeader.className = 'header-carrito'
    carritoHeader.innerHTML = `
    <h1 class='tituloCarrito'>Carrito de Compras</h1>
    `
    
    carritoDeCompras.append (carritoHeader);
    
    const carritoBoton = document.createElement ('button')
    carritoBoton.innerText = 'Cerrar'
    carritoBoton.className = 'boton'

    carritoBoton.addEventListener ('click', ()=>{
        carritoDeCompras.style.display = 'none'
    });
    
    carritoHeader.append (carritoBoton)

    carrito.forEach ((product) =>{
        let contenidoCarrito = document.createElement ('div')
        contenidoCarrito.className = 'contenido-carrito'
        contenidoCarrito.innerHTML= `
        <h1 class='itemCarritoTitulo'>${product.nombre}</h1>
        <h2 class= 'itemCarrito'>$${product.precio}</h2>
        <p class= 'itemCarrito'> ${product.cantidad}</p>
        <p> ${product.cantidad * product.precio} </p>
        `
        carritoDeCompras.append (contenidoCarrito);
    });

    const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement ('button');
    totalCompra.className = 'footer-carrito'
    totalCompra.innerHTML = `Total a pagar $${total}`

    carritoDeCompras.append (totalCompra)

    totalCompra.addEventListener ('click', ()=>{
        totalCompra.innerHTML = '';
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
        let correoUsuario = document.getElementById ('correoUsuario')
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
            <select id='selectPago' class= 'select'>
                <option selected>Seleccione un metodo de pago</option>
                <option id= 'opcion1'>Pago unico con transferencia bancaria</option>
                <option id= 'opcion2'>3 cuotas sin interes con credito</option>
                <option id= 'opcion3'>6 cuotas sin interes con credito</option>
            </select>
           <button id= 'seleccionPago' class= 'boton'>Seleccionar opcion</button>
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
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido en tu correo electronico.
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
            <input id= 'nombreTarjeta'  class= 'inputDatos' placeholder="Nombre y apellido del titular"> </input>
            <input id= 'numeroTarjeta' class= 'inputDatos' placeholder= "Numero de la tarjeta"> </input>
            <input id= 'vencimientoTarjeta' class= 'inputDatos' placeholder = "Vencimiento"> </input>
            <input id= 'codigoTarjeta' class= 'inputDatos' placeholder = "Codigo de seguridad"> </input>
            <button id= 'botonTarjeta' class= 'boton'>Enviar datos</button>
            <button id= 'botonFinal' class='boton'>Finalizar compra</button>
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
                    <p class= 'texto'>Enviaremos tu pedido a ${direccionUsuario.value}.
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido en tu correo electronico.
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
                <input id= 'nombreTarjeta'  class= 'inputDatos' placeholder="Nombre y apellido del titular"> </input>
                <input id= 'numeroTarjeta'  class= 'inputDatos' placeholder= "Numero de la tarjeta"> </input>
                <input id= 'vencimientoTarjeta' class= 'inputDatos' placeholder = "Vencimiento"> </input>
                <input id= 'codigoTarjeta'  class= 'inputDatos' placeholder = "Codigo de seguridad"> </input>
                <button id= 'botonTarjeta' class= 'boton'>Enviar datos</button>
                <button id= 'botonFinal' class= 'boton'> Finalizar compra</button>
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
                    <p class= 'texto'>Enviaremos tu pedido a ${direccionUsuario.value}.
                    En las siguientes 48 hs recibiras el codigo de seguimiento de tu pedido en tu correo electronico.
                    Ante cualquier inconveniente, comunicate a 3563487569 o estudiocrea@gmail.com.
                    </p>
                    `
                carritoDeCompras.append (divFinal)
                })
            }
        })
    })  
}) 


