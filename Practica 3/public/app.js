const NUM_RESULTS = 3;

let loadMoreRequests = 0;
//Cargar mas prendas (hay que adaptarlo a la pagina de ropa)
async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/clothes?from=${from}&to=${to}`);

    const newClothes = await response.text();

    const clotheDiv = document.getElementById("Clothes");

    clotheDiv.innerHTML += newClothes;

    loadMoreRequests++;
}


