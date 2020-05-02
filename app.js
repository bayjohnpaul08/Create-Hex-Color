let hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector(".btn")
const body = document.querySelector("body")
const hex = document.querySelector(".hex")

btn.addEventListener("click", getHex);

function getHex() {
    let theHexColor = "#"
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexColor.length)
        theHexColor += hexColor[random]
    }
    body.style.background = theHexColor
    hex.innerHTML = theHexColor
}