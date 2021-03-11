window.addEventListener("load", (event) => {
    // TODO: fetch planets JSON
    console.log(event)
    
    let fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json")
    let destinationElement = document.getElementById("destination")

    fetchPromise.then((response) => {
        let jsonPromise = response.json()

        jsonPromise.then((json) => {
            console.log(json)
            destinationElement.innerHTML = `<h3> Planet: ${json[0].name}</h3>`
        })
    })
 });