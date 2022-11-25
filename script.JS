let name = document.querySelector("input"); 
let element = document.querySelector("button"); 
let container = document.querySelector("div"); 
let button = document.querySelector(".button") 
element.addEventListener("click", () => { 
    console.log(name.value) 
    let data=document.createElement("p"); 
    data.innerText=name.value 
    container.insertBefore(data,button) 
    name.value ="" 
})