let fetchData = () => {
    fetch("https://randomuser.me/api/?gender=female")
        .then((res) => res.json())
        .then((data) => console.log(data.results[0]))
        .catch((err) => console.log(err));
};

let asyncData = async() => {
    let fetchData = await fetch("https://randomuser.me/api/?gender=female");
    let res = await fetchData.json();
    let data = await res.results[0];
    console.log(data);
};