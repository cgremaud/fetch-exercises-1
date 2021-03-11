window.addEventListener("load", (event) => {
    // TODO: fetch planets JSON
    console.log(event)

    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json")
    const destinationElement = document.getElementById("destination")
    const planetSelect = document.getElementById("planet-select")

    fetchPromise.then((response) => {
        const jsonPromise = response.json()

        jsonPromise.then((json) => {
            console.log(json);
            planetSelect.addEventListener("click", (event) => {
                destinationElement.innerHTML += `<h3> 
                    Planet: ${json[1].name} <br />
                    Diameter: ${json[1].diameter} <br />
                    </h3><br />
                    <img height = "200px" src = ${json[1].image}>`;
                });
        });
    });
 });