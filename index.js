let text = document.querySelector(".input");
let btn = document.querySelector(".add-btn");
let taskList= document.querySelector(".task-list");
const add = (event) => {
    event.preventDefault();
    if(text.value === ""){
        alert("The task cannot be empty");
    }
    else{
        let newTask = document.createElement("div");
        newTask.innerHTML = `${text.value}`;
        newTask.className = "list-div";
        let listDiv = document.querySelector(".list-div");
        let binBtn = document.createElement("button");
         binBtn.className = "bin-logo";
        binBtn.innerHTML = "<i class='fa-solid fa-trash'></i>"; 
        newTask.appendChild(binBtn);
        binBtn.addEventListener("click", () => {
            taskList.removeChild(newTask); // Remove the task when the bin button is clicked
        });

        taskList.appendChild(newTask);
        text.value = "";
        
    }
}
btn.addEventListener("click",add);