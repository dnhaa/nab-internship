window.addEventListener('load', () => {
    document.getElementById("add-button").addEventListener('click', () => {
        addNewTask();
        document.getElementById("new-task").value = "";
    });
    document.getElementById("new-task").addEventListener('keypress', (e) =>{
        if (e.keyCode === 13){
            document.getElementById("add-button").click();
            document.getElementById("new-task").value = "";
        }
    });
})

function addNewTask() {
    const newTask = document.getElementById("new-task").value;
    if (newTask.trim() !== ""){
        const displayTask = document.createElement("div");
        const doneButton = document.createElement("input");
        doneButton.setAttribute("type", "checkbox")
        const prioritiseButton = document.createElement("input");
        prioritiseButton.setAttribute("type", "checkbox");
        const taskContent = document.createElement("div");
        doneButton.innerHTML = "Done";
        prioritiseButton.innerHTML = "Prioritise";

        displayTask.classList.add("display-task");
        doneButton.classList.add("done-button");
        prioritiseButton.classList.add("prioritise-button");
        taskContent.classList.add("task-content");

        //Add text content to display 
        taskContent.innerHTML = newTask;

        displayTask.appendChild(doneButton);
        displayTask.appendChild(taskContent);
        displayTask.appendChild(prioritiseButton);
        // displayTask.innerHTML = `
        //     <button class="done-button">Done</button>
        //     <div class="task-content">${newTask}</div>
        //     <button class="prioritise-button">Prioritise</button>
        // `;

        displayTask.classList.add("display-task");

        document.getElementById("task-container").appendChild(displayTask);

        //add event to done button
        doneButton.addEventListener('change', () => {
            if (doneButton.checked){
                document.getElementById("done-task-container").appendChild(displayTask);
                taskContent.style.setProperty("text-decoration", "line-through");
            }
            else {
            document.getElementById("task-container").appendChild(displayTask);
            taskContent.style.setProperty("text-decoration", "none");

            }
        });
        

        //add event to priority button
        prioritiseButton.addEventListener('change', () => {
            if (doneButton.checked){
                
            } else {
                if (prioritiseButton.checked){
                    document.getElementById("task-container").insertBefore(displayTask, document.getElementById("task-container").firstChild);
                }
                else {
                document.getElementById("task-container").appendChild(displayTask);
                }
            }     
        });
    }
    
};




