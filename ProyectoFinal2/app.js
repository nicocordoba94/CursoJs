const contenedor = document.getElementById("productos");

const PRODUCTOS = [
    {
        id:1,
        nombre: "zapatilla",
        precio: 15000,
        stock: 5, 
        imagen: "https://essential.vteximg.com.br/arquivos/ids/544184-454-423/316-0384_1.jpg?v=637850384428700000"
    },
    {
        id: 2, 
        nombre: "remera",
        precio: 5000,
        stock: 10,
        imagen: "https://static.dafiti.com.ar/p/koxis-2306-169039-1-product.jpg"
    },
    {
        id: 3,
        nombre: "gorra",
        precio: 1500, 
        stock: 0,
        imagen: "https://essential.vteximg.com.br/arquivos/ids/520554-454-423/308-0334_1.jpg?v=637795668424570000"
    }
];

const getCard = (item) => {
    return ( `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.precio}</p>
            <p class="card-text">stock: ${item.stock}</p>
            <a href="#" onclick= "agregarCarrito(${item.id})" class="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>
    `);
};


const cargarProductos = (datos, nodo) => {
    let acumulador = "";
    datos.forEach((elemento) => {
        acumulador += getCard(elemento);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = PRODUCTOS.find(item=>item.id === id);

    alert("Agregado al Carro: "+ seleccion.nombre)
}

cargarProductos(PRODUCTOS, contenedor);