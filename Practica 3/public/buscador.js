//Productos de ejemplo
const products = [
    { name: 'HODDIE 28 PROGRAM' },
    { name: 'Pantalón 28 PROGRAM' },
    { name: 'Converse' },
    { name: 'Sombrero North Face' },
    { name: 'Chaleco acolchado Moncler' },
    { name: 'Bañador Ralph Lauren' },
    { name: 'Gafas Versace' },
    { name: 'Anillos' },
    { name: 'Mochila Vans' },
    { name: 'Calcetines Cars' },
    { name: 'Jersey de punto' },
]

const searchInput = document.getElementById('searchInput'); //obtenemos el input de busqueda
const resultsList = document.getElementById('resultsList'); //obtenemos la lista de resultados
const noResults = document.getElementById('noResults'); //obtenemos el mensaje de no resultados


const handleSearch = () => {
    const searchItem = searchInput.value.toLowerCase(); //obtenemos el texto de busqueda y lo pasamos a minusculas
    const filteredProducts = products.filter((products) => products.name.toLowerCase().startsWith(searchItem)); //filtramos los productos

    resultsList.innerHTML = ''; //vaciamos la lista de resultados

    if (filteredProducts.length === 0) { //si no hay resultados
        noResults.style.display = "block";
    } else { //mostramos el mensaje de no resultados
        filteredProducts.forEach((products) => { //por cada producto filtrado    
            const li = document.createElement('li'); //creamos un elemento li
            li.textContent = products.name; //le añadimos el nombre del producto
            resultsList.appendChild(li); //añadimos el elemento li a la lista de resultados
        });
        noResults.style.display = "none"; //ocultamos el mensaje de no resultados
    }

    if (searchInput.value === '') { //si el input de busqueda esta vacio
        resultsList.innerHTML = ''; //vaciamos la lista de resultados
    }
};

searchInput.addEventListener('input', handleSearch); //añadimos un listener al input de busqueda

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// Funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};


