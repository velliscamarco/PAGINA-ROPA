export const clothes = new Map();
let nextId = 0;

// localStorage.setItem('clothes', JSON.stringify([...clothes.values()]));
addClothes({
    id: nextId,
    title: 'HODDIE 28 PROGRAM',
    price: 70,
    description: 'Descubre la elegancia casual con nuestra sudadera 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. fabricada en España.',
    img: 'https://28clothing.com/cdn/shop/products/PINKHOODIE-2.png?v=1693234992&width=1280',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Rosa'],
    comentarios: [
        {
            name: 'Pablo',
            comment: 'Me encanta'
        }

    ]
})

addClothes({
    id: nextId,
    title: 'Pantalón 28 PROGRAM',
    price: 50,
    description: 'Descubre la elegancia casual con nuestro pantalón 28 programm de la más alta calidad. Confeccionada en algodón orgánico, esta sudadera no solo es una declaración de estilo, sino también un compromiso con la sostenibilidad. Fabricado en España.',
    img: 'https://28clothing.com/cdn/shop/products/28-Evergreen-Pants-2-Front.png?v=1677854919&width=1280',
    colors: ['Blanco']
}),
    addClothes({
        id: nextId,
        title: 'Converse',
        price: 70,
        description: 'Descubre la elegancia casual con nuestras zapatillas de la más alta calidad. Fabricadas en España.',
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6218f8cc55984cfe92d1a96d0110ac7e_9366/Zapatilla_Handball_Spezial_Negro_DB3021_01_standard.jpg',
        colors: ['Blanco', 'Negro']
    }),
    addClothes({
        id: nextId,
        title: 'Sombrero North Face',
        price: 15,
        description: 'Nuestro clásico gorro de punto elástico con borde y logotipo es ideal para llevar si sales antes del amanecer o después de que se haya puesto el sol',
        img: 'https://www.coresurfingshop.com/36276-home_default/the-north-face-explore-beanie-black.jpg',
        colors: ['Negro']
    }),
    addClothes({
        id: nextId,
        title: 'Chaleco acolchado Moncler',
        price: 250,
        description: 'El chaleco plumífero se inspira en los aventureros, desde los pilotos pioneros hasta los exploradores del K2, y ha sido diseñado para equipar a los más aventureros.',
        img: 'https://cdn-images.farfetch-contents.com/18/57/86/35/18578635_40108519_1000.jpg',
        colors: ['Blanco', 'Rojo', 'Azul', 'Negro']
    }),
    addClothes({
        id: nextId,
        title: 'Bañador Ralph Lauren',
        price: 60,
        description: 'Este bañador bermuda con forro de malla refleja el icónico estilo Polo tanto dentro como fuera del agua, gracias al caballo marca de la casa bordado.',
        img: 'https://img01.ztat.net/article/spp-media-p1/2661b23f60bc4a3b940e03de555ddbdb/d8a938c1218149d5bff5245a624dac68.jpg?imwidth=762&filter=packshot',
        colors: ['Rosa', 'Blanco', 'Azul']
    }),
    addClothes({
        id: nextId,
        title: 'Gafas Versace',
        price: 150,
        description: 'La forma de aviador refresca la línea Medusa Biggie, con lentes tintadas y detalles metálicos reconocibles en las patillas',
        img: 'https://www.opticaibarreta.com/pub/media/catalog/product/cache/0fdffada69f00a88bfc211dbbe3909a4/v/e/versace-ve4361-gb1-87-030a.jpg',
        colors: ['Negro']
    }),
    addClothes({
        id: nextId,
        title: 'Anillos',
        price: 100,
        description: 'Dale un toque sofisticado a tu look con el Anillo 28 program. El anillo se inspira en nuestra clásica colección 28 program. Acabado a mano con una aleación única de metales con un recubrimiento electrolítico de oro rosa de segunda ley de 14K',
        img: 'https://pngimg.es/d/ring_PNG75.png',
        colors: ['Oro']
    }),
    addClothes({
        id: nextId,
        title: 'Mochila Vans',
        price: 30,
        description: 'La mochila 28 program de MARNA cuenta con un amplio compartimento principal, un bolsillo delantero con cremallera que incluye un panel de organización de fácil acceso y un bolsillo para botellas de agua',
        img: 'https://invain.imgix.net/media/catalog/product/v/a/vanc230000-1.jpg?w=700&h=700&auto=format',
        colors: ['Negro']
    }),
    addClothes({
        id: nextId,
        title: 'Calcetines Cars',
        price: 7,
        description: '¡Unos calcetines sencillos y prácticos para hacer deporte!',
        img: 'https://www.saitikids.com/wp-content/uploads/2021/10/calcetines-pack-cars-diferentes-colores-rojo-y-azul-nino-par2-frontal-CR2044-1281-.jpg',
        colors: ['Rojo', 'Azul']
    }),
    addClothes({
        id: nextId,
        title: 'Jersey de punto',
        price: 7,
        description: 'Jersey con cuello perkins y punto jacquard fair isle',
        img: 'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dw6ca7c93f/images/DIS/61161WMCI031TL_0.png?sw=2000&sh=2000&sm=fit',
        colors: ['Rojo', 'Azul', 'Verde']
    });


export function deleteClothes(id) {
    clothes.delete(id);
}

export function addClothes(clothe) {
    let id = nextId++;
    clothe.id = `${id}`;
    clothes.set(clothe.id, clothe);
    return clothe;
}


export function getClothe() {
    return [...clothes.values()];
}

export function getClothes(id) {
    return clothes.get(id);
}



export function editClothes(id, title, img, price, description, sizes, colors) {
    let clothes = getClothes(id);
    clothes.title = title;
    clothes.img = img;
    clothes.price = price;
    clothes.description = description;
    clothes.colors = colors;
    localStorage.setItem('clothes', JSON.stringify([...clothes.values()]));
}

//Subelemento comentarios
export const comentarios = new Map();


export function addcoment(comentario) {
    comentarios.set(comentario.name, comentario);
}

export function getComentarios() {
    return [...comentarios.values()];
}

export const colors = [
    { "color": "Rojo" },
    { "color": "Azul" },
    { "color": "Amarillo" },
    { "color": "Verde" },
    { "color": "Gris" },
    { "color": "Morado" },
    { "color": "Rosa" }
];

