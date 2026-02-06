// let container = document.querySelector("todo-container");
let btn = document.querySelector("#btn");
let taskInput= document.querySelector("#taskInput")
let tasklist= document.querySelector(".taskList")

btn.addEventListener("click", function(dets){
let inptValue= taskInput.value;
if(inptValue.trim() !==""){


let li=document.createElement("li")
let span = document.createElement("span")
let button = document.createElement("button")


span.classList.add("task-text");
span.textContent=inptValue;
button.textContent="delete"
button.classList.add("button");
// button.style.backgroundColor="red"
 button.addEventListener("click",function(detss){
    detss.stopPropagation();
    span.remove();
    button.remove();

 })
li.appendChild(span)
li.appendChild(button)
tasklist.appendChild(li);


taskInput.value = "";
li.addEventListener("click",function(dets){
dets.target.classList.toggle("lt")
})
}
else{
    alert("write any task")
}

})