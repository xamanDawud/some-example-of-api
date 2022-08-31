fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => getData(data));

let getData = (resourse) => {
    let section = document.getElementById("section");
    resourse.forEach((res) => {
        let div = document.createElement("div");
        div.innerHTML = ` 
        <p>Country Name: ${res.name.common}</p>
        <p>Title: ${res.name.official}</p>
        <p>Population: ${res.population}</p>
        
        `;
        div.classList.add("graphic");
        section.appendChild(div);
    });
};