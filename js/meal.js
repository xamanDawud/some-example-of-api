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
        <div class="card">
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
        console.log(food.strMeal);
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