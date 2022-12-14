console.log("Loading script")
const imageArray = [`luke-skywalker_1.jpg`,
`c-3po_2.jpg`,
`r2-d2_3.jpg`,
`darth-vader_4.jpg`,
`leia-organa_5.jpg`,
`owen-lars_6.jpg`,
`beru-whitesun-lars_7.jpg`,
`r5-d4_8.jpg`,
`biggs-darklighter_9.jpg`,
`obi-wan-kenobi_10.jpg`]
function processResults(results){
    const divContainer = document.createElement("div")
    divContainer.classList.add("cardContainer")
    results.map((qualities,index) =>{
        const divCard = document.createElement("div")
        divCard.classList.add("card")
        const imageElement = document.createElement("img")
        imageElement.src = `/images/${imageArray[index]}`
        divCard.appendChild(imageElement)
            for(const key in qualities){
            if(!Array.isArray(qualities[key])){
                let text = `${key}:${qualities[key]}`
                const newText = document.createTextNode(text)
                const divElement = document.createElement("div")
                divElement.appendChild(newText)
                divCard.appendChild(divElement)
                divContainer.appendChild(divCard)   
            }
        }
    })
    const bodyElement = document.querySelector("body")
    bodyElement.appendChild(divContainer)    
}
function loadSWCharacters(){
    console.log("fetch")
    fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => processResults(data.results));

}
document.addEventListener("load",loadSWCharacters());



// body
//   div container
//      div - people 1
//          textNode
//      div - people 2
//           textNode
//      div - people 3
//          textNode
//      div - people 4
//           textNode



