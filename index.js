


let btn = document.querySelector("#btn");
let taskInput = document.querySelector("#taskInput");
let tasklist = document.querySelector(".taskList");
let ttt = document.querySelector(".tt");   // Total Tasks
let ctts = document.querySelector(".ct");  // Completed Tasks
let btts = document.querySelector(".bt");  // Pending/Remaining Tasks

var tts = 0; // Total
var cts = 0; // Completed
var bts = 0; // Pending

btn.addEventListener("click", function() {
    let inptValue = taskInput.value;

    if (inptValue.trim() !== "") {
        // Counters update (Addition par)
        tts++;
        bts++;
        updateUI();

        let li = document.createElement("li");
        let span = document.createElement("span");
        let button = document.createElement("button");

        span.classList.add("task-text");
        span.textContent = inptValue;
        button.textContent = "delete";
        button.classList.add("button");

        // --- DELETE LOGIC ---
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            
            // Delete se pehle check karein: Kya task completed tha?
            if (span.classList.contains("lt")) {
                cts--; // Agar complete tha, to complete wala count kam karo
            } else {
                bts--; // Agar pending tha, to pending wala count kam karo
            }
            
            tts--; // Total to hamesha kam hoga
            li.remove();
            updateUI();
        });

        // --- TOGGLE (COMPLETE) LOGIC ---
        li.addEventListener("click", function() {
            if (span.classList.contains("lt")) {
                // Undo complete (Wapis pending mein)
                span.classList.remove("lt");
                cts--;
                bts++;
            } else {
                // Task complete kar diya
                span.classList.add("lt");
                cts++;
                bts--;
            }
            updateUI();
        });

        li.appendChild(span);
        li.appendChild(button);
        tasklist.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please write a task!");
    }
});

// Counter ko update karne ka function (Clean Code)
function updateUI() {
    ttt.textContent = tts;
    ctts.textContent = cts;
    btts.textContent = bts;
}