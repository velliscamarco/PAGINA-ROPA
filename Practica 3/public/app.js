const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/superheroes?from=${from}&to=${to}`);

    const newClothe = await response.text();

    const ClotheDiv = document.getElementById("Clothe");

    ClotheDiv.innerHTML += newSuperheroes;

    loadMoreRequests++;
}


async function checktitle() {

    let titleInput = document.getElementById('title');

    let title = titleInput.value;

    const response = await fetch(`/availabletitle?title=${title}`);

    const responseObj = await response.json();

    let message = responseObj.available ?
        '<p>Disponible</p>' :
        '<p>Campo incorrecto, porfavor compruebe que la comienza con mayuscula</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;

}