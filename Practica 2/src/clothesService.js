console.log(Storage);

function obtener_localStorage() {
    if (localStorage.getItem('clothes') == null) {
        let clothes = localStorage.getItem('clothes');
        console.log(clothes);
    } else {
        console.log('No hay prendas');
    }
}

function guardar_localStorage() {
    let clothesArray = [
        {
            id: 0,
            title: 'HODDIE 28 PROGRAM',
            price: 70,
            description: 'Descubre la elegancia casual con nuestra sudadera 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. fabricada en España.',
            img: 'https://28clothing.com/cdn/shop/products/PINKHOODIE-2.png?v=1693234992&width=1280',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['pink']
        },
        {
            id: 1,
            title: 'Pantalón 28 PROGRAM',
            price: 50,
            description: 'Descubre la elegancia casual con nuestro pantalón 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. Fabricado en España.',
            img: 'https://28clothing.com/cdn/shop/products/28-Evergreen-Pants-2-Front.png?v=1677854919&width=1280',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['white']
        },
        {
            id: 2,
            title: 'Converse',
            price: 70,
            description: 'Descubre la elegancia casual con nuestras zapatillas de la más alta calidad. Fabricadas en España.',
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6218f8cc55984cfe92d1a96d0110ac7e_9366/Zapatilla_Handball_Spezial_Negro_DB3021_01_standard.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['white','black']
        },
        {
            id: 3,
            title: 'Sombrero North Face',
            price: 15,
            description: 'Nuestro clásico gorro de punto elástico con borde y logotipo es ideal para llevar si sales antes del amanecer o después de que se haya puesto el sol',
            img: 'https://www.coresurfingshop.com/36276-home_default/the-north-face-explore-beanie-black.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['black']
        },
        {
            id: 4,
            title: 'Chaleco acolchado Moncler',
            price: 250,
            description: 'El chaleco plumífero se inspira en los aventureros, desde los pilotos pioneros hasta los exploradores del K2, y ha sido diseñado para equipar a los más aventureros.',
            img: 'https://cdn-images.farfetch-contents.com/18/57/86/35/18578635_40108519_1000.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['white','red','blue','black']
        },
        {
            id: 5,
            title: 'Bañador Ralph Lauren',
            price: 60,
            description: 'Este bañador bermuda con forro de malla refleja el icónico estilo Polo tanto dentro como fuera del agua, gracias al caballo marca de la casa bordado.',
            img: 'https://img01.ztat.net/article/spp-media-p1/2661b23f60bc4a3b940e03de555ddbdb/d8a938c1218149d5bff5245a624dac68.jpg?imwidth=762&filter=packshot',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['pink','white','blue']
        },
        {
            id: 6,
            title: 'Gafas Versace',
            price: 150,
            description: 'La forma de aviador refresca la línea Medusa Biggie, con lentes tintadas y detalles metálicos reconocibles en las patillas',
            img: 'https://www.opticaibarreta.com/pub/media/catalog/product/cache/0fdffada69f00a88bfc211dbbe3909a4/v/e/versace-ve4361-gb1-87-030a.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['black']
        },
        {
            id: 7,
            title: 'Anillos',
            price: 100,
            description: 'Dale un toque sofisticado a tu look con el Anillo 28 program. El anillo se inspira en nuestra clásica colección 28 program. Acabado a mano con una aleación única de metales con un recubrimiento electrolítico de oro rosa de segunda ley de 14K',
            img: 'https://pngimg.es/d/ring_PNG75.png',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['']
        },
        {
            id: 8,
            title: 'Mochila Vans',
            price: 30,
            description: 'La mochila 28 program de MARNA cuenta con un amplio compartimento principal, un bolsillo delantero con cremallera que incluye un panel de organización de fácil acceso y un bolsillo para botellas de agua',
            img: 'https://invain.imgix.net/media/catalog/product/v/a/vanc230000-1.jpg?w=700&h=700&auto=format',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['black']
        },
        {
            id: 9,
            title: 'Calcetines Cars',
            price: 7,
            description: '¡Unos calcetines sencillos y prácticos para hacer deporte!',
            img: 'https://www.saitikids.com/wp-content/uploads/2021/10/calcetines-pack-cars-diferentes-colores-rojo-y-azul-nino-par2-frontal-CR2044-1281-.jpg',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['red','blue']
        },
        {
            id: 10,
            title: 'Jersey de punto',
            price: 7,
            description: 'Jersey con cuello perkins y punto jacquard fair isle',
            img: 'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dw6ca7c93f/images/DIS/61161WMCI031TL_0.png?sw=2000&sh=2000&sm=fit',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['red','blue', 'green']
        },
    ];

    localStorage.setItem("clothes", JSON.stringify(clothesArray));
}
// Borrar elementos
document.addEventListener('DOMContentLoaded', function () {
    var deleteButton = document.querySelector('.button-delete');

    deleteButton.addEventListener('click', function () {
        var itemId = 0; 
        var clothes = JSON.parse(localStorage.getItem('clothes'));
        var indexToRemove = clothes.findIndex(item => item.id === itemId);

        if (indexToRemove !== -1) {
            clothes.splice(indexToRemove, 1);
            localStorage.setItem("clothes", JSON.stringify(clothes));
            window.location.href = "PracticaPaginaprincipal.html";
        }
    });
});
//Añadir elementos
function guardar_localStorage(nuevaPrenda) {
    let clothes = JSON.parse(localStorage.getItem('clothes')) || [];
    
   
    nuevaPrenda.id = Date.now();

    clothes.push(nuevaPrenda);

    localStorage.setItem("clothes", JSON.stringify(clothes));
}


document.addEventListener('DOMContentLoaded', function () {
   
    var guardarPrendaButton = document.getElementById('guardarPrendaButton');

    guardarPrendaButton.addEventListener('click', function () {
    
        var nombrePrenda = document.getElementById('title').value;
        var urlImagen = document.getElementById('img').value;
        var precio = document.getElementById('price').value;
        var descripcion = document.getElementById('description').value;
        var checkboxesTallas = document.querySelectorAll('input[name="talla"]:checked');
        var tallas = Array.from(checkboxesTallas).map(checkbox => checkbox.value);
        var checkboxesColores = document.querySelectorAll('input[name="color"]:checked');
        var colores = Array.from(checkboxesColores).map(checkbox => checkbox.value);
       
        var nuevaPrenda = {
            id: Date.now(),
        title: nombrePrenda,
        img: urlImagen,
        price: precio,
        description: descripcion,
        sizes: tallas,
        colors: colores,
            
        };

        guardar_localStorage(nuevaPrenda);

        window.location.href = "PracticaPaginaprincipal.html";
    });
});

