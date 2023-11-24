
//productos
const productos = [
    {
        id:"empanada-01",
        titulo:"empanadas",
        imagen:"./img/emp.png.jpg",
        categoria:{
            nombre: "Empanadas",
            id:"empanadas"
        },
        precio: 1000

    },
    {
        id:"hamburguesa-01",
        titulo:"Hamburguesa",
        imagen:"./img/hamb.png.jpg",
        categoria:{
            nombre: "Sandwich",
            id:"sandwich"
        },
        precio: 1500

    },
    {
        id:"fritas",
        titulo:"Fritas",
        imagen:"./img/fritascheddar.png.jpg",
        categoria:{
            nombre: "Fritas",
            id:"fritas"
        },
        precio: 2000

    },
    {
        id:"hamburguesaconfritas",
        titulo:"Hamburguesa con Fritas",
        imagen:"./img/hambcfritas.png.jpg",
        categoria:{
            nombre: "Sandwich",
            id:"sandwich"
        },
        precio: 2500

    },
    {
        id:"pizzas-01",
        titulo:"Pizzas",
        imagen:"./img/pizza1.png.jpg",
        categoria:{
            nombre: "Pizzas",
            id:"pizzas"
        },
        precio: 1000

    },
    {
        id:"pizzas-02",
        titulo:"Pizza2",
        imagen:"./img/pizza2.png.jpg",
        categoria:{
            nombre: "Pizzas",
            id:"pizzas"
        },
        precio: 3000

    },
    {
        id:"sandwich",
        titulo:"Sandwich Mila",
        imagen:"./img/sandwmila.png.jpg",
        categoria:{
            nombre: "Sandwich",
            id:"sandwich"
        },
        precio: 2800

    },
    {
        id:"MilaalPlato",
        titulo:"Milanesa al Plato",
        imagen:"./img/milplato.png.jpg",
        categoria:{
            nombre: "AlPlato",
            id:"alplato"
        },
        precio: 2400

    },
];

//DOM
const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');



//cargar los productos al html 
function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");        
        div.classList.add("producto");

        div.innerHTML = `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">                                                
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id=${producto.id}>Agregar al Carrito</button>
        </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

//filtro de categorias
botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e)=>{

        botonesCategorias.forEach (boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter (producto => producto.categoria.id === e.currentTarget.id);
           cargarProductos(productosBoton);
        } else  {
            tituloPrincipal.innerText = "Todos Los Productos";
            cargarProductos(productos);
        }
    })
        
    });

//actualizamos botones al carrito
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//Actualizamos productos del local storage cada vez que se actualiza la pagina de pedidos
let productosEnCarrito;
let productosEnCarritoLS =  JSON.parse(localStorage.getItem("productos-en-carrito"));


if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else{
    productosEnCarrito = []
}




function agregarAlCarrito(e){
    const idBoton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index= productosEnCarrito.findIndex(producto => producto.id === idBoton) ;
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();   

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}











