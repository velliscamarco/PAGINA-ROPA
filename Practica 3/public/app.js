const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/clothes?from=${from}&to=${to}`);

    const newClothes = await response.text();

    const clotheDiv = document.getElementById("clothes");

    clotheDiv.innerHTML += newClothes;

    loadMoreRequests++;
}


