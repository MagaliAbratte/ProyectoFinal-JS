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
  
const productos = [];

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
  
  
const contenedorProductos = document.getElementById('contenedorProductos');
  
productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.className = 'tarjetaProducto'
    divProducto.innerHTML = `
        <div class='datosTarjeta'>
        <div class="card-body">
        <img src="${producto.img}" class= "imagenesProductos">
        <h3 class="card-title"> ${producto.nombre} </h3>
        <p class="card-text-precio"> ${producto.precio} </p>
        <p class='card-text-descripcion'>${producto.descripcion}</p>
        <button id="boton${producto.id}" class="boton">Añadir</button>
        </div>
        </div>`;

    contenedorProductos.append(divProducto);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });
  
  const carrito = [];
  
  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
  };
  
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);
function actualizarCarrito() {
    let actualizar = '';
    carrito.forEach((producto) => {
        actualizar += `
        <div class="contenido-carrito">
        <h3 class="itemCarritoTitulo"> ${producto.nombre} </h3>
        <p class="itemCarrito">$${producto.precio}</p>
        <button onClick = "eliminarDelCarrito(${producto.id})" class="boton">Eliminar</button>
        </div>`;
    });
    
  contenedorCarrito.innerHTML = actualizar;
  calcularTotalCompra();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
  });
  
  const totalCompra = document.getElementById('totalCompra');
  
  const calcularTotalCompra = () => {
    total = 0
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
  };

  let total 

  const completar = document.getElementById ('completarCompra')

  completar.addEventListener ('click', function completarForm (){
    let datosUsuario = document.createElement ('div')
    datosUsuario.className = 'datos-usuario'
    datosUsuario.innerHTML = `
        <h3 class= 'titulo'>Datos personales</h3>
        <input id=nombreUsuario class= 'inputDatos' placeholder='Ingresa tu nombre'></input>
        <input id=apellidoUsuario class= 'inputDatos' placeholder='Ingresa tu apellido'></input>
        <input id=telefonoUsuario  class= 'inputDatos' placeholder='Ingresa tu telefono'></input>
        <input id=correoUsuario class= 'inputDatos' placeholder='Ingresa tu correo electronico'></input>
        <input id=direccionUsuario class= 'inputDatos' placeholder='Ingresa tu direccion'></input>
        <button id=botonEnviarDatos class='boton'>Enviar</button>
        `
    carritoDeCompras.append (datosUsuario); 
    completar.removeEventListener ('click', completarForm)

    let nombreUsuario = document.getElementById ('nombreUsuario');
    let apellidoUsuario = document.getElementById ('apellidoUsuario');
    let telefonoUsuario = document.getElementById ('telefonoUsuario');
    let correoUsuario = document.getElementById ('correoUsuario')
    let direccionUsuario = document.getElementById ('direccionUsuario');
    let botonEnviar = document.getElementById ('botonEnviarDatos')

    botonEnviar.addEventListener ('click', function final (){
      const datosIngresados = {
        nombre: nombreUsuario.value,
        apellido: apellidoUsuario.value,
        telefono: telefonoUsuario.value,
        correo: correoUsuario.value,
        direccion: direccionUsuario.value,
      }
      
      localStorage.setItem ('DatosCliente', JSON.stringify (datosIngresados))
      
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
      botonEnviar.removeEventListener("click", final);
    })
})  


  