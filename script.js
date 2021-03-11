window.addEventListener("load", (event) => {
    // TODO: fetch planets JSON
    console.log(event)

    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json")
    const destinationElement = document.getElementById("destination")
    const planetSelect = document.getElementById("planet-select")

    fetchPromise.then((response) => {
        const jsonPromise = response.json()
        console.log(response)

        jsonPromise.then((json) => {
            console.log(json);

            let index = Math.floor((Math.random() * 6))
            
            //TO DO: make this modular by adding the code to fetchPlanet.js and importing
            
            planetSelect.addEventListener("click", (event) => {
                destinationElement.innerHTML = `<h3> 
                    Planet: ${json[index].name} <br />
                    Diameter: ${json[index].diameter} <br />
                    </h3><br />
                    <img height = "250px" src = ${json[index].image}>`;
                    index = Math.floor((Math.random() * 6))
                });
        });
    });
 });