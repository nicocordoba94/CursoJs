const contenedor = document.getElementById("productos");

const PRODUCTOS = [
    {
        id:1,
        nombre: "Notebook",
        precio: 150000,
        stock: 5, 
        imagen: "https://www.venex.com.ar/products_images/1647962114_noteook-bangho-max-l4-i1-f-celeron-5205u-4gb-ssd-120gb-14-free.jpg"
    },
    {
        id: 2, 
        nombre: "Playstation 5",
        precio: 195000,
        stock: 10,
        imagen: "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/1/2/12344_800_3_1.jpg"
    },
    {
        id: 3,
        nombre: "Tablet",
        precio: 15000, 
        stock: 0,
        imagen: "https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/y/o/yoga_tab_11_ct2_05.png"
    }
];

const getCard = (item) => {
    return ( `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">$ ${item.precio}</p>
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