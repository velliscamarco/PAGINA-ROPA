let clothes = [
    title = 'HODDIE 28 PROGRAM',
    prices = 70,
    description = 'Descubre la elegancia casual con nuestra sudadera 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. fabricada en España.',
    img = 'https://28clothing.com/cdn/shop/products/28-Evergreen-Pants-2-Front.png?v=1677854919&width=1280',
    sizes = ['XS', 'S', 'M', 'L', 'XL'],
    colors = ['pink'],

    title = 'Pantalón 28 PROGRAM',
    prices = 50,
    description = 'Descubre la elegancia casual con nuestro pantalón 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. Fabricado en España.',
    img = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6218f8cc55984cfe92d1a96d0110ac7e_9366/Zapatilla_Handball_Spezial_Negro_DB3021_01_standard.jpg',
    sizes = ['XS', 'S', 'M', 'L', 'XL'],
    colors = ['white'],

    //Hacer el resto de elemntos
]

function mostrarPaginaLibro(id) {

    let content = document.getElementById('content');

    let clothes = clothes[id];

    content.innerHTML = `
        <h2>Libro: ${clothes.title}</h2>

        <p>Precio: ${clothes.price}</p>
        <p>Descrpición: ${clothes.description}</p>
        <p> ${clothes.img}</p>
        <p> Tallas: ${clothes.sizes}</p>
        <p> Color: ${clothes.colors}</p>

        <button onclick='mostrarPaginaLibros()'>Volver a la lista</button>
    `;
}

function mostrarElementoPrincipal() {

    let content = document.getElementById('content');

    content.innerHTML = `<h2>Libros</h2>`;

    for (let i = 0; i < clothes.length; i++) {

        content.innerHTML +=
            `<p>
            ${clothes[i].titulo}
            <button onclick="paginasecundaria.html(${i});">Más info</button>            
        </p>`;
    }
}

//Mostar texto de que la prenda se ha eliminado correctamente después de que se haya ejecutado al función eliminar
//Despúes redirigir a paginaprincipal.html (Por hacer)
function eliminar() {
    alert('La prenda se ha eliminado correctamente');
}




mostrarElementoPrincipal();
