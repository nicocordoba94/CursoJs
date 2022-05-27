const contenedor = document.getElementById("productos");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];

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
    return (
        `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <p class="card-text">Stock: ${item.stock}</p>
                <button onclick=agregarCarrito(${item.id}) class="btn ${item.stock ? 'btn-primary' : 'btn-secondary'}" ${!item.stock ? 'disabled' : '' } >Agregar al carrito</button>
            </div>
        </div>
    `);
};

const btn = document.querySelector('#btnCarro');
btn.addEventListener('click', () => {
    Swal.fire({
        icon: 'succes',
        title: 'Cargando',
        text: 'Carga completa',
    })
})


const getRow = (item) => {
    return(
        `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>$${item.precio * item.cantidad} ($${item.precio})</td>
        <td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
    </tr>
        `
    )
}

const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = PRODUCTOS.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1,
            imagen: seleccion.imagen,
        })
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
    }
    
    cargarProductos(carrito, tablaCarrito, true);
    
    let ponerStorage = (clave, valor) => {
        localStorage.setItem(clave, valor);
    }
    
    for(const producto of PRODUCTOS){
        ponerStorage(producto.id, JSON.stringify(producto))
    }

    localStorage.setItem("PRODUCTOS", JSON.stringify(PRODUCTOS));
}

cargarProductos(PRODUCTOS, contenedor, false);