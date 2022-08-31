fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => getData(data, data));

let getData = (resourse) => {
    let section = document.getElementById("section");
    resourse.forEach((res) => {
        let div = document.createElement("div");
        div.innerHTML = ` 
        <p>Country Name: ${res.name.common}</p>
        <p>Title: ${res.name.official}</p>
        <p>Population: ${res.population}</p>
        <button onclick=getCode('${res.cca2}')>Details</button>
        `;
        div.classList.add("graphic");
        section.appendChild(div);
    });
};

function getCode(code) {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then((country_details) => country_details.json())
        .then((data) => showFlag(data));
}

let showFlag = (flag) => {
    let section = document.getElementById("show-flag");
    for (let info of flag) {
        let img = document.getElementById("img");
        img.setAttribute("src", `${info.flags.png}`);
        console.log(info.flags.png);
    }
};