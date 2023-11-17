let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementsByTagName("BODY")[0]
let h3 = document.getElementsByTagName("H3")[0]
let button = document.getElementsByTagName("button")[0]

function setBackgroundColor(color1, color2){
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`
  h3.textContent = body.style.background 
}

color1.addEventListener("input",()=>setBackgroundColor(color1.value,color2.value))

color2.addEventListener("input", ()=>setBackgroundColor(color1.value,color2.value))

button.addEventListener("click", ()=>{
  let color1 = '#' + Math.floor(Math.random()*16777215).toString(16)
  let color2 = '#' + Math.floor(Math.random()*16777215).toString(16)
  setBackgroundColor(color1, color2)
})

