let foodFetch = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => getdata(data.meals));
};

let getdata = (data) => {
    let cardSection = document.getElementById("food-cards");
    cardSection.innerText = "";
    for (let food of data) {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card" onclick="loadFoodDetails(${food.idMeal})">
        <img class="card-img-top" src="${
          food.strMealThumb
        }" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">
                ${food.strInstructions.slice(0, 200)}
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
    </div>
        `;
        div.classList.add("card-deck");
        cardSection.appendChild(div);
    }
};

document.getElementById("btn").addEventListener("click", function() {
    function searchWord() {
        let inputFiels = document.getElementById("input-field");
        let value = inputFiels.value;
        return value;
    }
    foodFetch(searchWord());
});

let loadFoodDetails = (idMeal) => {
    displayDetailsWithIdmeal(idMeal);
};

let displayDetailsWithIdmeal = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((info) => displayDetailsSet(info.meals[0]));
};

let displayDetailsSet = (info) => {
    let section = document.getElementById("display-details");
    section.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `
        <img class="card-img-top" src="${
          info.strMealThumb
        }" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">${info.strMeal}</h5>
            <p class="card-text">
                ${info.strInstructions.slice(0, 200)}
            </p>
            <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
            </p>
        </div>
    </div>
        `;
    div.classList.add("card-deck");
    section.appendChild(div);
};