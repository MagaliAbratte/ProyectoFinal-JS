//SIMULADOR E-COMMERCE ESTUDIO CREA//

//PRODUCTOS//

class ProductosCrea {
    constructor (id,img, nombre, precio, descripcion, cantidad){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
  }
  
const productos = [];
const contenedorProductos = document.getElementById('contenedorProductos');

async function getProductsFromJSON() {
  let res = await fetch("./json/productos.json");
  let response = await res.json();
  response.forEach((product) => {
    let productoNuevo = new ProductosCrea (product.id, product.img, product.nombre, product.precio, product.descripcion, product.cantidad)
    productos.push(productoNuevo)
  });
  crearTarjetas();
}

function crearTarjetas () {
  productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.className = 'tarjetaProducto'
    divProducto.innerHTML = `
    <div class='datosTarjeta'>
    <div class="card-body">
    <img src="${producto.img}" class= "imagenesProductos">
    <h3 class="card-title"> ${producto.nombre} </h3>
    <p class='card-text-descripcion'>${producto.descripcion}</p>
    <p class="card-text-precio"> $${producto.precio} </p>
    <button id="boton${producto.id}" class="boton">Añadir</button>
    </div>
    </div>`;
    
    contenedorProductos.append(divProducto);
    
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });
}

//BUSCADOR//

document.addEventListener ('keyup', (e)=>{
  if (e.target.matches("#buscador")){
    document.querySelectorAll (".tarjetaProducto").forEach (elemento =>{
      elemento.textContent.toLowerCase().includes (e.target.value.toLowerCase())
      ? elemento.classList.remove ("filtro")
      : elemento.classList.add ("filtro")
    })
  }
})

//CARRITO//

const carrito = [];
const contenedorCarrito = document.getElementById('contenedorCarrito');
const contador = document.getElementById ('contador')
  
  const contadorCarrito = ()=>{
  contador.style.display = 'block'
  contador.innerText = carrito.length
  }
  
  const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push(producto);
    }
    actualizarCarrito();
    contadorCarrito ();
  };


  function actualizarCarrito() {
    let actualizar = '';
    carrito.forEach((producto) => {
        actualizar += `
        <div class="contenido-carrito">
        <h3 class="itemCarritoTitulo"> ${producto.nombre} </h3>
        <p class="itemCarrito">$${producto.precio}</p>
        <p class= "itemCarrito">${producto.cantidad}</p>
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
    contadorCarrito ();
  };
  
  const vaciarCarrito = document.getElementById('vaciarCarrito');
  vaciarCarrito.addEventListener('click', () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
    contadorCarrito ();
  });
  
  const totalCompra = document.getElementById('totalCompra');
  const completar = document.getElementById ('completarCompra')
  let total
  
  const calcularTotalCompra = () => {
    total = 0
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;

   if (total !== 0){
      completar.addEventListener ('click', completarForm)
    }
  };

  //DATOS DE USUARIO//

  const datosIngresados = {}

  function completarForm (){
    let datosUsuario = document.createElement ('div')
    datosUsuario.className = 'datos-usuario'
    datosUsuario.innerHTML = `
      <h3 class= 'titulo'>Datos Personales</h3>
      <input id="nombreUsuario" class= 'inputDatos' placeholder='Ingresa tu nombre'></input>
      <input id="apellidoUsuario" class= 'inputDatos' placeholder='Ingresa tu apellido'></input>
      <input id="telefonoUsuario"  class= 'inputDatos' placeholder='Ingresa tu telefono'></input>
      <input id="correoUsuario" class= 'inputDatos' placeholder='Ingresa tu correo electronico'></input>
      <input id="direccionUsuario" class= 'inputDatos' placeholder='Ingresa tu direccion - Localidad - Provincia'></input>
      <button id="botonEnviarDatos" class='boton'>Enviar</button>
      `
      carritoDeCompras.append (datosUsuario); 
      completar.removeEventListener ('click', completarForm)

      let nombreUsuario = document.getElementById ("nombreUsuario");
      let apellidoUsuario = document.getElementById ("apellidoUsuario");
      let telefonoUsuario = document.getElementById ("telefonoUsuario");
      let correoUsuario = document.getElementById ("correoUsuario");
      let direccionUsuario = document.getElementById ("direccionUsuario");
      let botonEnviar = document.getElementById ("botonEnviarDatos");  

      botonEnviar.addEventListener ('click', function final (){
        datosIngresados.nombre = nombreUsuario.value
        datosIngresados.apellido = apellidoUsuario.value
        datosIngresados.telefono = telefonoUsuario.value
        datosIngresados.correo = correoUsuario.value
        datosIngresados.direccion = direccionUsuario.value

      localStorage.setItem ('datosCliente', JSON.stringify (datosIngresados))
      
      if (nombreUsuario.value === '' || apellidoUsuario.value === '' || telefonoUsuario.value === '' || correoUsuario.value === '' || direccionUsuario.value === ''){
        Swal.fire ({
          icon: 'warning',
          title: 'Por favor, ingresa los datos solicitados.',
          timer: 3000,
          confirmButtonText: 'Continuar',
          background: '#D9D9D9',
          width: '550px',
          padding: '50px',
          confirmButtonColor: '#969696'
        })
      } else {
        let divFinal = document.createElement ('div')
        divFinal.className = 'div-final'
        divFinal.innerHTML = `
        <h2 class= 'texto'>¡Gracias por tu compra ${JSON.parse(localStorage.getItem("datosCliente")).nombre}!</h2>
        <p class= 'texto'>Esta es la informacion de tu compra:</p>
        <p class= 'texto'>Total a pagar: $${total}</p>
        <p class= 'texto'>Recibiras en tu correo electronico las indicaciones para realizar el pago.
        Una vez realizado el mismo, enviaremos tu pedido a ${JSON.parse(localStorage.getItem("datosCliente")).direccion}.
        En las siguientes 48 hs enviaremos el codigo de seguimiento de tu pedido a tu correo electronico.
        Ante cualquier inconveniente, comunicate a 3563487569 o estudiocrea@gmail.com.
        </p>
        `
        carritoDeCompras.append (divFinal)
        botonEnviar.removeEventListener("click", final);
      }
    })
  } 

getProductsFromJSON()