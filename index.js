// let container = document.querySelector("todo-container");
let btn = document.querySelector("#btn");
let taskInput= document.querySelector("#taskInput")
let tasklist= document.querySelector(".taskList")
let ttt = document.querySelector(".tt")
let ctts = document.querySelector(".ct")
let btts = document.querySelector(".bt")

var tts = 0;
var cts = 0;
var bts = 0;
btn.addEventListener("click", function(dets){
let inptValue= taskInput.value;
if(inptValue.trim() !==""){
// console.log(dets);
ttt.textContent= ++tts;
btts.textContent= ++bts;
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
    li.remove();
    ttt.textContent= --tts;
    btts.textContent= --bts;
 })
li.appendChild(span)
li.appendChild(button)
tasklist.appendChild(li);
taskInput.value = "";
li.addEventListener("click",function(dets){

if (span.classList.contains("lt")) {
      dets.target.classList.remove("lt")
        btts.textContent= --bts;
        
    } 
    else {
        dets.target.classList.add("lt")
 ctts.textContent= ++cts;
    }     
      // 2. Screen par update sirf ek baar karein
    ctts.textContent = cts;
       
        
    

})
}

else{
    alert("write any task")
}

})