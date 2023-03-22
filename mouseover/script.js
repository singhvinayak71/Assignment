console.log("hello")
const btn = document.getElementById("btn")

btn.addEventListener("mouseover", ()=>{
    document.body.style.backgroundColor = "gray"
    btn.innerText = "Mouse Overed"
})
btn.addEventListener("mouseout", ()=>{
    document.body.style.backgroundColor = "orange"
    btn.innerText = "Mouse Out"
})