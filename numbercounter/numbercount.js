let value = 0;

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counter = document.getElementById("value");

increment.addEventListener("click", () => {
    value++;
    counter.innerText = value;
    console.log("hello")
});

decrement.addEventListener("click", () => {
  value--;
  counter.innerText = value;
});

function reset(){
    counter.innerText = 0;

}
