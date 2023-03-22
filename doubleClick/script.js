console.log("hello")
const btn = document.getElementById("btn")

btn.addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "red"
    btn.innerText = "Double clicked"
})