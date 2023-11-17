let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementsByTagName("BODY")[0]
let h3 = document.getElementsByTagName("H3")[0]

function setBackgroundColor(){
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  h3.textContent = body.style.background 
}

color1.addEventListener("input",setBackgroundColor)

color2.addEventListener("input", setBackgroundColor)
