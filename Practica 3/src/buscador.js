// Js encargado de filtrar los productos por nombre 
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    resultado.innerHTML = ''; //vaciamos el resultado para que no se acumulen los resultados de busquedas anteriores
    const texto = formulario.value.toLowerCase(); //pasamos el texto a minusculas
    for (let producto of productos) {
        let title = producto.title.toLowerCase(); //pasamos el nombre del producto a minusculas   
        if (nombre.indexOf(texto) !== -1) { //si el nombre del producto incluye el texto que el usuario ha escrito por pantalla
            resultado.innerHTML += `<li>${producto.title} - img: ${producto.img}</li>`; //añadimos el producto a la lista de resultados
        }
    }
    if (resultado.innerHTML === '') { //si no hay resultados
        resultado.innerHTML += `<li>Producto no encontrado...</li>`; //añadimos un mensaje de que no hay resultados
    }
}

boton.addEventListener('click', filtrar); //cuando el usuario haga click en el boton se ejecuta la funcion filtrar
formulario.addEventListener('keyup', filtrar); //cuando el usuario suelte una tecla se ejecuta la funcion filtrar
filtrar();
//Productos de ejemplo
const productos = [
    { title: 'HODDIE 28 PROGRAM', img: 'https://28clothing.com/cdn/shop/products/PINKHOODIE-2.png?v=1693234992&width=1280' },
    { title: 'Pantalón 28 PROGRAM', img: 'https://28clothing.com/cdn/shop/products/28-Evergreen-Pants-2-Front.png?v=1677854919&width=1280' },
]