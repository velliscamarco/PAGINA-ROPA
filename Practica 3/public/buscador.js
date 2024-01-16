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

