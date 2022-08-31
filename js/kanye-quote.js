document.getElementById("btn").addEventListener("click", function() {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => getQuote(data));

    function getQuote(data) {
        let div = document.getElementById("division");
        let p = document.createElement("p");
        p.innerText = data.quote;
        p.classList.add("simple-style");
        div.appendChild(p);
    }
});