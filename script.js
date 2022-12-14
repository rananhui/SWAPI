console.log("Loading script")
function loadSWCharacters(){
    console.log("fetch")
    fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

document.addEventListener("load",loadSWCharacters);


