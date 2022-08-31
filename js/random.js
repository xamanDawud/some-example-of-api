let fetchUser = () => {
    fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((data) => getData(data.results));
};

function getData(data) {
    let div = document.getElementById("users");
    for (let user of data) {
        let aritcle = document.createElement("div");
        aritcle.innerHTML = `
       <p>First Name is: ${user.name.first}</p>
       <p>Last name is : ${user.name.last}</p>
       <p>Address: ${user.location.city}</p>
       
       `;
        aritcle.classList.add("graphic");
        div.appendChild(aritcle);
    }
}