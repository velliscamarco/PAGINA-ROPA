console.log(Storage);
function obtener_localStorage() {
    if (localStorage.getItem('clothes') == null) {
        let clothes = localStorage.getItem('clothes');
        conssole.log(clothes);

    } else {
        console.log('No hay prendas');
    }
}
function guardar_localStorage(clothes) {
    let clothes = [
        {
            id: 0,
            title: 'HODDIE 28 PROGRAM',
            price: 70,
            description: 'Descubre la elegancia casual con nuestra sudadera 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. fabricada en España.',
            img: 'https://28clothing.com/cdn/shop/products/28-Evergreen-Pants-2-Front.png?v=1677854919&width=1280',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['pink']
        },
        {
            id: 1,
            title: 'Pantalón 28 PROGRAM',
            price: 50,
            description: 'Descubre la elegancia casual con nuestro pantalón 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. Fabricado en España.',
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6218f8cc55984cfe92d1a96d0110ac7e_9366/Zapatilla_Handball_Spezial_Negro_DB3021_01_standard.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['white']
        }
    ];

    localStorage.setItem("clothes", JSON.stringify(clothes));
}



//Hacer el resto de elemntos
