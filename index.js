// let container = document.querySelector("todo-container");
let btn = document.querySelector("#btn");
let taskInput= document.querySelector("#taskInput")
let tasklist= document.querySelector(".taskList")

btn.addEventListener("click", function(dets){
let inptValue= taskInput.value;
if(inptValue.trim() !==""){


let li=document.createElement("li")
let span = document.createElement("span")

span.classList.add("task-text");
span.textContent=inptValue;

li.appendChild(span)
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